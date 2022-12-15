// React
import React, { ReactElement, useEffect } from 'react';
import { useParams } from 'react-router-dom';

// MobX
import { observer } from 'mobx-react-lite';

// Store
import charactersStore from 'stores/CharactersStore';

// Components
import { CardDetails, Alert } from 'components';

function Character(): ReactElement {
  const { id } = useParams();

  const { loading, error, character } = charactersStore;

  useEffect(() => {
    if (id) {
      charactersStore.getCharacter(id);
    }
  }, [id]);

  if (error) {
    return <Alert type="error" title="Error" message={error} />;
  }

  return <CardDetails loading={loading || !character.id} data={character} />;
}

export default observer(Character);
