// React
import React from 'react';
import { Navigate } from 'react-router-dom';

// Components
import { Layout } from 'components';

// Pages
import Characters from './Characters/Characters';
import Comics from './Comics/Comics';
import Series from './Series/Series';
import Character from './Character/Character';
import Comic from './Comic/Comic';
import Serial from './Serial/Serial';

export default [
  {
    path: '/',
    element: <Layout />,
    children: [
      { index: true, element: <Navigate to="/characters" /> },
      { path: '/characters', element: <Characters /> },
      { path: '/characters/:id', element: <Character /> },
      { path: '/comics', element: <Comics /> },
      { path: '/comics/:id', element: <Comic /> },
      { path: '/series', element: <Series /> },
      { path: '/series/:id', element: <Serial /> },
      { path: '*', element: <div>Page not found</div> }
    ]
  }
];
