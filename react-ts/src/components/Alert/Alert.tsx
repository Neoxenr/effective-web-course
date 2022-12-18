// React
import React, { ReactElement } from 'react';

// MUI
import { Alert as AlertMUI, AlertTitle } from '@mui/material';

interface AlertProps {
  type?: 'error' | 'info' | 'success' | 'warning';
  title?: string;
  message?: string;
}

function Alert({ type, title, message }: AlertProps): ReactElement {
  return (
    <AlertMUI severity={type}>
      <AlertTitle>{title}</AlertTitle>
      {message}
    </AlertMUI>
  );
}

export default Alert;
