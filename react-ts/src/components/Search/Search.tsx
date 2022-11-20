// React
import React, { ReactElement } from 'react';

// MUI
import {
  Button,
  StyledEngineProvider,
  TextField,
  Toolbar
} from '@mui/material';

// i18n
import { useTranslation } from 'react-i18next';

// SCSS
import styles from './Search.module.scss';

interface SearchProps {
  title?: string;
}

function Search({ title }: SearchProps): ReactElement {
  const { t } = useTranslation();

  return (
    <StyledEngineProvider injectFirst>
      <Toolbar className={styles.search}>
        <TextField
          placeholder={`${t('main.search.placeholder.part1')} ${t(
            `main.search.placeholder.part2.${title?.toLowerCase()}`
          )} ${t('main.search.placeholder.part3')}`}
          size="small"
          className={styles.textField}
        />
        <Button variant="contained" className={styles.btn}>
          {t('main.search.button')}
        </Button>
      </Toolbar>
    </StyledEngineProvider>
  );
}

export default Search;
