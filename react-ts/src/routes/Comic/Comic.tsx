// React
import React, { ReactElement, useEffect } from 'react';
import { useParams } from 'react-router-dom';

// MobX
import { observer } from 'mobx-react-lite';

// MUI
import { Alert, AlertTitle, CircularProgress } from '@mui/material';

// Store
import comicsStore from 'stores/ComicsStore';

// Components
import CardDetails from 'components/CardDetails/CardDetails';

// SCSS
import styles from '../../utility.module.scss';

function Comic(): ReactElement {
  const { id } = useParams();

  const { loading, error, comic, getComic } = comicsStore;

  useEffect(() => {
    if (id) {
      getComic(id);
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

  if (loading || !comic.id) {
    return <CircularProgress size={60} className={styles.spinner} />;
  }

  return <CardDetails data={comic} />;
}

export default observer(Comic);
