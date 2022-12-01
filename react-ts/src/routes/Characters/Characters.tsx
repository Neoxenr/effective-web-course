// React
import React, { ReactElement, useEffect } from 'react';

// MUI
import { Alert, AlertTitle, CircularProgress, Pagination } from '@mui/material';

// MobX
import { observer } from 'mobx-react-lite';

// Store
import charactersStore from 'stores/CharactersStore';
import searchStore from 'stores/SearchStore';

// Components
import { Cards, Search } from 'components';

// SCSS
import styles from '../../utility.module.scss';

function Characters(): ReactElement {
  const { loading, error } = charactersStore;
  const { charactersTotal, characters, getCharactersList } = charactersStore;

  const { searchedText } = searchStore;

  const [page, setPage] = React.useState(1);

  useEffect(() => {
    getCharactersList((page - 1) * 20, searchedText);
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
      data={characters}
      search={<Search getList={getCharactersList} />}
      pagination={
        charactersTotal ? (
          <Pagination
            count={Math.ceil(charactersTotal / 20)}
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

export default observer(Characters);
