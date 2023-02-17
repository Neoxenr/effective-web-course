// React
import React, { ChangeEvent, ReactElement, useMemo, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

// MUI
import { StyledEngineProvider, TextField, Toolbar } from '@mui/material';

// i18n
import { useTranslation } from 'react-i18next';

// Debounce
import debounce from 'lodash.debounce';

// SCSS
import styles from './Search.module.scss';

interface SearchProps {
  disabled?: boolean;
  getDataList?: (offset: number, nameStartsWith?: string) => void;
}

function Search({ disabled, getDataList }: SearchProps): ReactElement {
  const { t } = useTranslation();

  const location = useLocation();

  const navigate = useNavigate();

  const params = new URLSearchParams(location.search);

  const handleChange = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    getDataList?.(0, event.target.value);

    navigate(
      `${location.pathname}?page=1${
        event.target.value ? `&search=${event.target.value}` : ''
      }`
    );
  };

  const debouncedResults = useMemo(() => {
    return debounce(handleChange, 3000);
  }, []);

  useEffect(() => {
    return () => {
      debouncedResults.cancel();
    };
  });

  return (
    <StyledEngineProvider injectFirst>
      <Toolbar className={styles.search}>
        <TextField
          disabled={disabled}
          placeholder={`${t('main.search.placeholder.part1')} ${t(
            `main.search.placeholder.part2.${location.pathname
              .substring(1)
              .toLowerCase()}`
          )} ${t('main.search.placeholder.part3')}`}
          defaultValue={params.get('search')}
          size="small"
          onChange={debouncedResults}
          className={styles.textField}
        />
      </Toolbar>
    </StyledEngineProvider>
  );
}

export default Search;
