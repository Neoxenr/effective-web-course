// React
import React, { ReactElement, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

// MobX
import { observer } from 'mobx-react-lite';

// Store
import comicsStore from 'stores/ComicsStore';

// MUI
import { Pagination } from '@mui/material';

// Components
import { Cards, Alert, Search } from 'components';

function Comics(): ReactElement {
  const location = useLocation();

  const navigate = useNavigate();

  const params = new URLSearchParams(location.search);

  const page = +(params.get('page') ?? 1);

  const { loading, error } = comicsStore;
  const { comicsTotal, comics } = comicsStore;

  useEffect(() => {
    comicsStore.getComicsList((page - 1) * 20, params.get('search'));
  }, [page]);

  if (error) {
    return <Alert type="error" title="Error" message={error} />;
  }

  return (
    <Cards
      type="comics"
      loading={loading}
      data={comics}
      search={
        <Search disabled={loading} getDataList={comicsStore.getComicsList} />
      }
      // getDataList={comicsStore.getComicsList}
      pagination={
        <Pagination
          count={Math.ceil(comicsTotal / 20)}
          siblingCount={0}
          page={page}
          onChange={(_, value) => {
            const query = new URLSearchParams(location.search);

            query.set('page', value.toString());

            navigate(`/comics?${query}`);
          }}
          className="pagination"
        />
      }
    />
  );
}

export default observer(Comics);
