// React
import React, { ReactElement } from 'react';

// MobX
import { observer } from 'mobx-react-lite';

// Store
import favoritesStore from 'stores/FavoritesStore';

// Components
import { Cards } from 'components';

function Favorites(): ReactElement {
  const { favorites } = favoritesStore;

  return <Cards data={favorites} />;
}

export default observer(Favorites);
