// React
import React, { ReactElement, useEffect } from 'react';

// MobX
import { observer } from 'mobx-react-lite';

// Store
import comicsStore from 'stores/ComicsStore';
import searchStore from 'stores/SearchStore';

// MUI
import { Pagination } from '@mui/material';

// Components
import { Cards, Search, Alert } from 'components';

function Comics(): ReactElement {
  const { loading, error } = comicsStore;
  const { comicsTotal, comics } = comicsStore;

  const { searchedText } = searchStore;

  const [page, setPage] = React.useState(1);

  useEffect(() => {
    comicsStore.getComicsList((page - 1) * 20, searchedText);
  }, [page]);

  if (error) {
    return <Alert type="error" title="Error" message={error} />;
  }

  return (
    <Cards
      type="comics"
      loading={loading}
      data={comics}
      search={<Search getList={comicsStore.getComicsList} />}
      pagination={
        <Pagination
          count={Math.ceil(comicsTotal / 20)}
          siblingCount={0}
          page={page}
          onChange={(_, value) => setPage(value)}
          className="pagination"
        />
      }
    />
  );
}

export default observer(Comics);
