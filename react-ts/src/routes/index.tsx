import React from 'react';

// Components
import { Layout } from 'components';

// Pages
import Characters from './Characters/Characters';
import Comics from './Comics/Comics';
import Series from './Series/Series';

export default [
  {
    path: '/',
    element: <Layout />,
    children: [
      { index: true, element: <Characters /> },
      { path: '/comics', element: <Comics /> },
      { path: '/series', element: <Series /> },
      { path: '*', element: <div>Page not found</div> }
    ]
  }
];
