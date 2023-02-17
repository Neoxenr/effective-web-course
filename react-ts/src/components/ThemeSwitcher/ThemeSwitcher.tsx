// React
import React, { ReactElement } from 'react';

// i18n
import { useTranslation } from 'react-i18next';

// MUI
import { Box, Switch, Typography } from '@mui/material';

// Store
import themeSwitcherStore from 'stores/ThemeSwitcherStore';

// SCSS
import styles from './ThemeSwitcher.module.scss';

function ThemeSwitcher(): ReactElement {
  const { t } = useTranslation();

  const { isDark } = themeSwitcherStore;

  return (
    <Box className={styles.switcher} component="div">
      <Switch
        defaultChecked={isDark}
        onChange={themeSwitcherStore.switchTheme}
      />
      <Typography>{t('footer.theme')}</Typography>
    </Box>
  );
}

export default ThemeSwitcher;
