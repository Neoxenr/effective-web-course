// React
import React, { ReactElement, useEffect } from 'react';
import { useParams } from 'react-router-dom';

// MobX
import { observer } from 'mobx-react-lite';

// Store
import seriesStore from 'stores/SeriesStore';

// Components
import { CardDetails, Alert } from 'components';

function Serial(): ReactElement {
  const { id } = useParams();

  const { loading, error, serial } = seriesStore;

  useEffect(() => {
    if (id) {
      seriesStore.getSerial(id);
    }
  }, [id]);

  if (error) {
    return <Alert type="error" title="Error" message={error} />;
  }

  return <CardDetails loading={loading || !serial.id} data={serial} />;
}

export default observer(Serial);
