// React
import React, { ReactElement, useEffect } from 'react';
import { useParams } from 'react-router-dom';

// MobX
import { observer } from 'mobx-react-lite';

// MUI
import { Alert, AlertTitle, CircularProgress } from '@mui/material';

// Store
import seriesStore from 'stores/SeriesStore';

// Components
import CardDetails from 'components/CardDetails/CardDetails';

// SCSS
import styles from '../../utility.module.scss';

function Serial(): ReactElement {
  const { id } = useParams();

  const { loading, error, serial, getSerial } = seriesStore;

  useEffect(() => {
    if (id) {
      getSerial(id);
    }
  }, [id]);

  if (error) {
    return (
      <Alert severity="error">
        <AlertTitle>Error</AlertTitle>
        {error}
      </Alert>
    );
  }

  if (loading || !serial.id) {
    return <CircularProgress size={60} className={styles.spinner} />;
  }

  return <CardDetails data={serial} />;
}

export default observer(Serial);
