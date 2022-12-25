// React
import React, { ReactElement, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

// MobX
import { observer } from 'mobx-react-lite';

// Store
import seriesStore from 'stores/SeriesStore';

// MUI
import { Pagination } from '@mui/material';

// Components
import { Cards, Search, Alert } from 'components';

function Series(): ReactElement {
  const location = useLocation();

  const navigate = useNavigate();

  const params = new URLSearchParams(location.search);

  const page = +(params.get('page') ?? 1);

  const { loading, error } = seriesStore;
  const { seriesTotal, series } = seriesStore;

  useEffect(() => {
    seriesStore.getSeriesList((page - 1) * 20, params.get('search'));
  }, [page]);

  if (error) {
    return <Alert type="error" title="Error" message={error} />;
  }

  return (
    <Cards
      type="series"
      loading={loading}
      data={series}
      search={
        <Search disabled={loading} getDataList={seriesStore.getSeriesList} />
      }
      pagination={
        <Pagination
          count={Math.ceil(seriesTotal / 20)}
          siblingCount={0}
          page={page}
          onChange={(_, value) => {
            const query = new URLSearchParams(location.search);

            query.set('page', value.toString());

            navigate(`/series?${query}`);
          }}
          className="pagination"
        />
      }
    />
  );
}

export default observer(Series);
