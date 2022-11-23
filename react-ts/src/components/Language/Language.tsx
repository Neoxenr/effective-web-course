// React
import React, { ReactElement, useState } from 'react';

// MUI
import { FormControl, InputLabel, MenuItem, Select } from '@mui/material';

// i18n
import { useTranslation } from 'react-i18next';

// SCSS
import styles from './Language.module.scss';

function Language(): ReactElement {
  const { t, i18n } = useTranslation();

  const [language, setLanguage] = useState<string>(i18n.language);

  return (
    <FormControl focused={false} className={styles.formControl}>
      <InputLabel id="select-label">{t('footer.lang.label')}</InputLabel>
      <Select
        labelId="select-label"
        value={language}
        label={t('footer.lang.label')}
        onChange={(event): void => {
          i18n.changeLanguage(event?.target.value);
          setLanguage(event?.target.value);
        }}
        className={styles.language}
        MenuProps={{ disableScrollLock: true }}
      >
        <MenuItem value="en">{t('footer.lang.en')}</MenuItem>
        <MenuItem value="ru-RU">{t('footer.lang.ru')}</MenuItem>
      </Select>
    </FormControl>
  );
}

export default Language;
