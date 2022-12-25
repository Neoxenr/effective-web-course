// React
import React, { ReactElement } from 'react';
import { NavLink } from 'react-router-dom';

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

// Types
import { Page } from 'types';

// SCSS
import styles from './Header.module.scss';

const pages: Page[] = [
  { path: '/favorites', name: 'favorites' },
  { path: '/characters', name: 'characters' },
  { path: '/comics', name: 'comics' },
  { path: '/series', name: 'series' }
];

function Header(): ReactElement {
  const { t } = useTranslation();

  return (
    <StyledEngineProvider injectFirst>
      <AppBar className={styles.header}>
        <Box>
          <Toolbar className={styles.flexWrapper}>
            <img src="/marvel_logo.svg" alt="logo" className={styles.logo} />
            <Toolbar className={styles.linkContainer}>
              {pages.map((page) => (
                <NavLink key={page.name} to={page.path} className={styles.link}>
                  {({ isActive }) => (
                    <Typography
                      className={styles.text}
                      variant={isActive ? 'subtitle2' : 'subtitle1'}
                      onClick={(event) => {
                        if (isActive) {
                          event.preventDefault();
                        }
                      }}
                    >
                      {t(`header.navigation.${page.name}`)}
                    </Typography>
                  )}
                </NavLink>
              ))}
            </Toolbar>
          </Toolbar>
        </Box>
      </AppBar>
    </StyledEngineProvider>
  );
}

export default Header;
