import React, { ReactElement } from 'react';

// MUI
import { Toolbar, Typography, Link } from '@mui/material';

// CSS
import './style.css';

function Footer(): ReactElement {
  return (
    <footer className="footer">
      <Toolbar
        sx={{
          flexDirection: 'column',
          alignItems: 'start',
          padding: '10px 0'
        }}
      >
        <img src="marvel_logo.svg" alt="logo" className="footer__logo" />
        <Typography sx={{ fontSize: '14px', color: '#fff' }}>
          Data provided by Marver. © {new Date().getFullYear()}
        </Typography>
        <Link
          target="_blank"
          rel="noreferrer"
          href="https://developer.marvel.com"
          sx={{ color: '#fff' }}
        >
          <Typography sx={{ fontSize: '14px' }}>
            developer.marvel.com
          </Typography>
        </Link>
      </Toolbar>
    </footer>
  );
}

export default Footer;
