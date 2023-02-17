// React
import React, { ReactElement, useEffect } from 'react';
import { useParams } from 'react-router-dom';

// MobX
import { observer } from 'mobx-react-lite';

// Store
import comicsStore from 'stores/ComicsStore';

// Components
import { CardDetails, Alert } from 'components';

function Comic(): ReactElement {
  const { id } = useParams();

  const { loading, error, comic } = comicsStore;

  useEffect(() => {
    if (id) {
      comicsStore.getComic(id);
    }
  }, [id]);

  if (error) {
    return <Alert type="error" title="Error" message={error} />;
  }

  return <CardDetails loading={loading || !comic.id} data={comic} />;
}

export default observer(Comic);
