// React
import React, { ReactElement, useEffect } from 'react';

// i18n
import { useTranslation } from 'react-i18next';

// MobX
import { observer } from 'mobx-react-lite';

// Store
import comicsStore from 'stores/ComicsStore';
import searchStore from 'stores/SearchStore';

// MUI
import {
  Alert,
  AlertTitle,
  CircularProgress,
  Pagination,
  Typography
} from '@mui/material';

// Components
import { Cards, Search } from 'components';

// SCSS
import styles from '../../utility.module.scss';

function Comics(): ReactElement {
  const { loading, error } = comicsStore;
  const { comicsTotal, comics, getComicsList } = comicsStore;

  const { searchedText } = searchStore;

  const { t } = useTranslation();

  const [page, setPage] = React.useState(1);

  useEffect(() => {
    getComicsList((page - 1) * 20, searchedText);
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
      data={comics}
      search={<Search getList={getComicsList} />}
      pagination={
        comicsTotal ? (
          <Pagination
            count={Math.ceil(comicsTotal / 20)}
            siblingCount={0}
            page={page}
            onChange={(_, value) => setPage(value)}
            className={styles.pagination}
          />
        ) : (
          <Typography>{t('main.content.cards.comics')}</Typography>
        )
      }
    />
  );
}

export default observer(Comics);
