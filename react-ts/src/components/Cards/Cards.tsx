// React
import React, { FC, ReactNode } from 'react';
import { useLocation } from 'react-router-dom';

// MUI
import { Typography, Grid, StyledEngineProvider, Box } from '@mui/material';

// i18n
import { useTranslation } from 'react-i18next';

// Types
import { Character, Comic, Serial } from 'types';

// Components
import { Card } from 'components';

// SCSS
import styles from './Cards.module.scss';

interface CardsProps {
  data?: Character[] | Comic[] | Serial[];
  search?: ReactNode;
  pagination?: ReactNode;
}

const Cards: FC<CardsProps> = ({ data, search, pagination }) => {
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
        <Grid
          container
          rowSpacing={3}
          columnSpacing={{ xs: 1, sm: 2, md: 3 }}
          className={styles.cardContainer}
        >
          {data?.map((item) => (
            <Grid key={item?.id} item className={styles.item}>
              <Card
                id={item?.id}
                name={item?.name !== undefined ? item.name : item?.title}
                description={item?.description}
                imageUrl={`${item?.thumbnail?.path}/landscape_xlarge.${item?.thumbnail?.extension}`}
              />
            </Grid>
          ))}
        </Grid>
        {pagination}
      </Box>
    </StyledEngineProvider>
  );
};

export default Cards;
