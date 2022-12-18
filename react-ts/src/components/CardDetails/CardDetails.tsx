// React
import React, { ReactElement } from 'react';

// MUI
import {
  Grid,
  StyledEngineProvider,
  Typography,
  Box,
  CircularProgress
  // Link
} from '@mui/material';

// i18n
import { useTranslation } from 'react-i18next';

// Types
import { Base } from 'types';

// Components
import CardDetailsSection from './components/CardDetailsSection';

// SCSS
import styles from './CardDetails.module.scss';

interface CardDetailsProps {
  loading?: boolean;
  data?: Base;
}

function CardDetails({ loading, data }: CardDetailsProps): ReactElement {
  const { t } = useTranslation();

  return (
    <StyledEngineProvider injectFirst>
      <Box component="main" className={styles.cardDetails}>
        {loading ? (
          <CircularProgress size={60} className="spinner" />
        ) : (
          <>
            <Box component="div" className={styles.wrapper}>
              <Box
                component="img"
                className={styles.image}
                src={`${data?.thumbnail?.path}/portrait_uncanny.${data?.thumbnail?.extension}`}
              />
              <Box component="div">
                <Typography variant="h5" className={styles.header}>
                  {data?.name ? data.name : data?.title}
                </Typography>
                <Typography variant="body1" className={styles.description}>
                  {data?.description?.trim()
                    ? data.description
                    : t('main.content.cardDetails.description')}
                </Typography>
              </Box>
            </Box>
            <Grid container className={styles.details}>
              {data?.characters && (
                <CardDetailsSection
                  items={data.characters.items ?? []}
                  title="characters"
                />
              )}
              {data?.comics && (
                <CardDetailsSection
                  items={data.comics.items ?? []}
                  title="comics"
                />
              )}
              {data?.series && (
                <CardDetailsSection
                  items={data.series.items ?? [data.series]}
                  title="series"
                />
              )}
            </Grid>
          </>
        )}
      </Box>
    </StyledEngineProvider>
  );
}

export default CardDetails;
