// React
import React, { ChangeEvent, ReactElement, useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

// MUI
import {
  Button,
  StyledEngineProvider,
  TextField,
  Toolbar
} from '@mui/material';

// i18n
import { useTranslation } from 'react-i18next';

// Store
import searchStore from 'stores/SearchStore';

// SCSS
import styles from './Search.module.scss';

interface SearchProps {
  getList?: (offset: number, nameStartsWith?: string) => void;
}

function Search({ getList }: SearchProps): ReactElement {
  const location = useLocation();

  const { t } = useTranslation();

  const [text, setText] = useState<string>('');
  const { searchedText } = searchStore;

  useEffect(() => {
    setText(searchedText);
  }, [searchedText]);

  return (
    <StyledEngineProvider injectFirst>
      <Toolbar className={styles.search}>
        <TextField
          placeholder={`${t('main.search.placeholder.part1')} ${t(
            `main.search.placeholder.part2.${location.pathname
              .substring(1)
              .toLowerCase()}`
          )} ${t('main.search.placeholder.part3')}`}
          size="small"
          value={text}
          onChange={(
            event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
          ) => setText(event.target.value)}
          className={styles.textField}
        />
        <Button
          variant="contained"
          onClick={() => {
            searchStore.setSearchedText(text);
            getList?.(0, text);
          }}
          className={styles.btn}
        >
          {t('main.search.button')}
        </Button>
      </Toolbar>
    </StyledEngineProvider>
  );
}

export default Search;
