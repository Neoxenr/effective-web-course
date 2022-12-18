// React
import React, { ReactElement, useEffect } from 'react';

// MUI
import { Pagination } from '@mui/material';

// MobX
import { observer } from 'mobx-react-lite';

// Store
import charactersStore from 'stores/CharactersStore';
import searchStore from 'stores/SearchStore';

// Components
import { Cards, Search, Alert } from 'components';

function Characters(): ReactElement {
  const { loading, error } = charactersStore;
  const { charactersTotal, characters } = charactersStore;

  const { searchedText } = searchStore;

  const [page, setPage] = React.useState(1);

  useEffect(() => {
    charactersStore.getCharactersList((page - 1) * 20, searchedText);
  }, [page]);

  if (error) {
    return <Alert type="error" title="Error" message={error} />;
  }

  return (
    <Cards
      type="characters"
      loading={loading}
      data={characters}
      search={<Search getList={charactersStore.getCharactersList} />}
      pagination={
        <Pagination
          count={Math.ceil(charactersTotal / 20)}
          siblingCount={0}
          page={page}
          onChange={(_, value) => setPage(value)}
          className="pagination"
        />
      }
    />
  );
}

export default observer(Characters);
