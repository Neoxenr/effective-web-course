// React
import React, { ReactElement, useEffect } from 'react';
import { useParams } from 'react-router-dom';

// MobX
import { observer } from 'mobx-react-lite';

// MUI
import { Alert, AlertTitle, CircularProgress } from '@mui/material';

// Store
import charactersStore from 'stores/CharactersStore';

// Components
import CardDetails from 'components/CardDetails/CardDetails';

// SCSS
import styles from '../../utility.module.scss';

function Character(): ReactElement {
  const { id } = useParams();

  const { loading, error, character, getCharacter } = charactersStore;

  useEffect(() => {
    if (id) {
      getCharacter(id);
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

  if (loading || !character.id) {
    return <CircularProgress size={60} className={styles.spinner} />;
  }

  return <CardDetails data={character} />;
}

export default observer(Character);
