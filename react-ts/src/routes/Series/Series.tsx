// React
import React, { ReactElement, useEffect } from 'react';

// MobX
import { observer } from 'mobx-react-lite';

// Store
import seriesStore from 'stores/SeriesStore';
import searchStore from 'stores/SearchStore';

// MUI
import { Pagination } from '@mui/material';

// Components
import { Cards, Search, Alert } from 'components';

function Series(): ReactElement {
  const { loading, error } = seriesStore;
  const { seriesTotal, series } = seriesStore;

  const { searchedText } = searchStore;

  const [page, setPage] = React.useState(1);

  useEffect(() => {
    seriesStore.getSeriesList((page - 1) * 20, searchedText);
  }, [page]);

  if (error) {
    return <Alert type="error" title="Error" message={error} />;
  }

  return (
    <Cards
      type="series"
      loading={loading}
      data={series}
      search={<Search getList={seriesStore.getSeriesList} />}
      pagination={
        <Pagination
          count={Math.ceil(seriesTotal / 20)}
          siblingCount={0}
          page={page}
          onChange={(_, value) => setPage(value)}
          className="pagination"
        />
      }
    />
  );
}

export default observer(Series);
