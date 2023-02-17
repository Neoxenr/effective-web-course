// React
import React, { ReactElement, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

// MUI
import { Pagination } from '@mui/material';

// MobX
import { observer } from 'mobx-react-lite';

// Store
import charactersStore from 'stores/CharactersStore';

// Components
import { Cards, Search, Alert } from 'components';

function Characters(): ReactElement {
  const location = useLocation();

  const navigate = useNavigate();

  const params = new URLSearchParams(location.search);

  const page = +(params.get('page') ?? 1);

  const { loading, error } = charactersStore;
  const { charactersTotal, characters } = charactersStore;

  useEffect(() => {
    charactersStore.getCharactersList((page - 1) * 20, params.get('search'));
  }, [page]);

  if (error) {
    return <Alert type="error" title="Error" message={error} />;
  }

  return (
    <Cards
      type="characters"
      loading={loading}
      data={characters}
      search={
        <Search
          disabled={loading}
          getDataList={charactersStore.getCharactersList}
        />
      }
      pagination={
        <Pagination
          count={Math.ceil(charactersTotal / 20)}
          siblingCount={0}
          page={page}
          onChange={(_, value) => {
            const query = new URLSearchParams(location.search);

            query.set('page', value.toString());

            navigate(`/characters?${query}`);
          }}
          className="pagination"
        />
      }
    />
  );
}

export default observer(Characters);
