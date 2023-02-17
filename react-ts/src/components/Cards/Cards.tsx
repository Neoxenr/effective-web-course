// React
import React, { FC, ReactNode } from 'react';
import { useLocation } from 'react-router-dom';

// MUI
import {
  Typography,
  StyledEngineProvider,
  Box,
  CircularProgress
} from '@mui/material';

// i18n
import { useTranslation } from 'react-i18next';

// Types
import { Card as CardType } from 'types';

// Components
import { Card } from 'components';

// SCSS
import styles from './Cards.module.scss';

interface CardsProps {
  loading?: boolean;
  type?: string;
  data?: CardType[];
  search?: ReactNode;
  pagination?: ReactNode;
}

const Cards: FC<CardsProps> = ({ loading, type, data, search, pagination }) => {
  const location = useLocation();

  const { t } = useTranslation();

  return (
    <StyledEngineProvider injectFirst>
      <Box component="main" className={styles.main}>
        <Typography variant="h4" className={styles.title}>
          {`${t(
            `header.navigation.${location.pathname.substring(1).toLowerCase()}`
          )} (${data?.length})`}
        </Typography>
        {search}
        {loading && <CircularProgress size={60} className="spinner" />}
        {data?.length ? (
          <Box component="div" hidden={loading}>
            <Box component="div" className={styles.cardContainer}>
              {data?.map((item) => (
                <Card
                  key={item?.id}
                  id={item?.id}
                  type={type ?? item?.type}
                  name={item?.name ? item.name : item?.title}
                  description={item?.description}
                  thumbnail={item?.thumbnail}
                />
              ))}
            </Box>
            {pagination}
          </Box>
        ) : (
          <Typography hidden={loading} className="not-found">
            {t(
              `main.content.cards.${location.pathname
                .substring(1)
                .toLowerCase()}`
            )}
          </Typography>
        )}
      </Box>
    </StyledEngineProvider>
  );
};

export default Cards;
