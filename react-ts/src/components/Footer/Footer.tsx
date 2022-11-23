// React
import React, { ReactElement } from 'react';

// MUI
import {
  AppBar,
  Toolbar,
  Typography,
  Link,
  StyledEngineProvider
} from '@mui/material';

// i18n
import { useTranslation } from 'react-i18next';

// Components
import Language from '../Language/Language';

// SCSS
import styles from './Footer.module.scss';

function Footer(): ReactElement {
  const { t } = useTranslation();

  return (
    <StyledEngineProvider injectFirst>
      <AppBar component="footer" className={styles.footer}>
        <Toolbar className={styles.flexWrapper}>
          <img src="/marvel_logo.svg" alt="logo" className={styles.logo} />
          <Typography className={styles.info}>
            {`${t('footer.info')} ${new Date().getFullYear()}`}
          </Typography>
          <Link
            target="_blank"
            rel="noreferrer"
            href="https://developer.marvel.com"
            className={styles.linkWrapper}
          >
            <Typography variant="subtitle2" className={styles.link}>
              developer.marvel.com
            </Typography>
          </Link>
        </Toolbar>
        <Language />
      </AppBar>
    </StyledEngineProvider>
  );
}

export default Footer;
