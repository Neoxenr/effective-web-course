// React
import React, { ReactElement } from 'react';
import { Link, useLocation } from 'react-router-dom';

// MUI
import {
  AppBar,
  Box,
  StyledEngineProvider,
  Toolbar,
  Typography
} from '@mui/material';

// i18n
import { useTranslation } from 'react-i18next';

// SCSS
import styles from './Header.module.scss';

const pages = [
  { path: '/', name: 'characters' },
  { path: '/comics', name: 'comics' },
  { path: '/series', name: 'series' }
];

function Header(): ReactElement {
  const location = useLocation();

  const { t } = useTranslation();

  return (
    <StyledEngineProvider injectFirst>
      <AppBar className={styles.header}>
        <Box>
          <Toolbar className={styles.flexWrapper}>
            <img src="/marvel_logo.svg" alt="logo" className={styles.logo} />
            <Toolbar className={styles.linkContainer}>
              {pages.map((page) => (
                <Link key={page.name} to={page.path} className={styles.link}>
                  <Typography
                    className={`${styles.text} ${
                      location.pathname === page.path
                        ? styles.currentLink
                        : styles.otherLink
                    }`}
                    variant="subtitle1"
                  >
                    {t(`header.navigation.${page.name}`)}
                  </Typography>
                </Link>
              ))}
            </Toolbar>
          </Toolbar>
        </Box>
      </AppBar>
    </StyledEngineProvider>
  );
}

export default Header;
