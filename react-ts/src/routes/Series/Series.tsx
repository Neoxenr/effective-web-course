// React
import React, { ReactElement, useEffect } from 'react';

// MobX
import { observer } from 'mobx-react-lite';

// Store
import seriesStore from 'stores/SeriesStore';
import searchStore from 'stores/SearchStore';

// MUI
import { Alert, AlertTitle, CircularProgress, Pagination } from '@mui/material';

// Components
import { Cards, Search } from 'components';

// SCSS
import styles from '../../utility.module.scss';

function Series(): ReactElement {
  const { loading, error } = seriesStore;
  const { seriesTotal, series, getSeriesList } = seriesStore;

  const { searchedText } = searchStore;

  const [page, setPage] = React.useState(1);

  useEffect(() => {
    getSeriesList((page - 1) * 20, searchedText);
  }, [page]);

  if (error) {
    return (
      <Alert severity="error">
        <AlertTitle>Error</AlertTitle>
        {error}
      </Alert>
    );
  }

  if (loading) {
    return <CircularProgress size={60} className={styles.spinner} />;
  }

  return (
    <Cards
      data={series}
      search={<Search getList={getSeriesList} />}
      pagination={
        seriesTotal ? (
          <Pagination
            count={Math.ceil(seriesTotal / 20)}
            siblingCount={0}
            page={page}
            onChange={(_, value) => setPage(value)}
            className={styles.pagination}
          />
        ) : (
          <></>
        )
      }
    />
  );
}

export default observer(Series);