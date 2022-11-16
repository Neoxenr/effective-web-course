import React, { ReactElement } from 'react';
import { useRoutes } from 'react-router-dom';

// Routes
import routes from './routes';

// CSS
import './index.css';

function App(): ReactElement {
  const element = useRoutes(routes);

  return <>{element}</>;
}

export default App;
