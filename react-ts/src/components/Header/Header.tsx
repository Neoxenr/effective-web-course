import React, { ReactElement } from 'react';
import { Link, useLocation } from 'react-router-dom';

// MUI
import { AppBar, Box, Toolbar, Typography } from '@mui/material';

// CSS
import './style.css';

const pages = ['', 'Comics', 'Series'];

function Header(): ReactElement {
  const location = useLocation();

  return (
    <AppBar position="relative" sx={{ bgcolor: 'red' }}>
      <Box>
        <Toolbar sx={{ justifyContent: 'space-between' }}>
          <img src="marvel_logo.svg" alt="logo" className="header__logo" />
          <Toolbar sx={{ columnGap: '20px' }}>
            {pages.map((page) => (
              <Link
                key={page}
                to={`/${page.toLocaleLowerCase()}`}
                style={{ textDecoration: 'none' }}
              >
                <Typography
                  sx={{
                    color:
                      location.pathname === `/${page.toLocaleLowerCase()}`
                        ? '#fff'
                        : 'yellow'
                  }}
                >
                  {page === '' ? 'Characters' : page}
                </Typography>
              </Link>
            ))}
          </Toolbar>
        </Toolbar>
      </Box>
    </AppBar>
  );
}

export default Header;
