// React
import React, { FC, ReactNode } from 'react';

// MUI
import { Typography, Grid, StyledEngineProvider, Box } from '@mui/material';

// i18n
import { useTranslation } from 'react-i18next';

// Types
import { Card as CardType } from 'types';

// Components
import { Card, Search } from 'components';

// SCSS
import styles from './MainLayout.module.scss';

interface MainLayoutProps {
  title?: string;
  data?: CardType[];
  children?: ReactNode;
}

const MainLayout: FC<MainLayoutProps> = ({ title, data, children }) => {
  const { t } = useTranslation();

  return (
    <StyledEngineProvider injectFirst>
      <Box component="main" className={styles.main}>
        <Typography variant="h4" className={styles.title}>
          {`${t(`header.navigation.${title?.toLowerCase()}`)} (${
            data?.length
          })`}
        </Typography>
        <Search title={title} />
        <Grid
          container
          rowSpacing={3}
          columnSpacing={{ xs: 1, sm: 2, md: 3 }}
          className={styles.cardContainer}
        >
          {data?.map((item) => (
            <Grid key={item.title} item className={styles.item}>
              <Card
                id={item.id}
                title={item.title}
                description={item.description}
                imageUrl={item.imageUrl}
              />
            </Grid>
          ))}
        </Grid>
        {children}
      </Box>
    </StyledEngineProvider>
  );
};

export default MainLayout;
