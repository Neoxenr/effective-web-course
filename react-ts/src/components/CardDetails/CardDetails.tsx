// React
import React, { ReactElement } from 'react';
import { Link } from 'react-router-dom';

// MUI
import {
  Grid,
  StyledEngineProvider,
  Typography,
  Box
  // Link
} from '@mui/material';

// i18n
import { useTranslation } from 'react-i18next';

// Types
import { Base } from 'types';

// SCSS
import styles from './CardDetails.module.scss';

interface CardDetailsProps {
  data?: Base;
}

function CardDetails({ data }: CardDetailsProps): ReactElement {
  const { t } = useTranslation();

  return (
    <StyledEngineProvider injectFirst>
      <Box component="main" className={styles.cardDetails}>
        <Box component="div" className={styles.wrapper}>
          <Box
            component="img"
            className={styles.image}
            src={`${data?.thumbnail?.path}/portrait_uncanny.${data?.thumbnail?.extension}`}
          />
          <Box component="div">
            <Typography variant="h5" className={styles.header}>
              {data?.name !== undefined ? data.name : data?.title}
            </Typography>
            <Typography variant="body1" className={styles.description}>
              {data?.description}
            </Typography>
          </Box>
        </Box>
        <Grid container className={styles.details}>
          {data?.characters !== undefined && (
            <Grid xs={3} item>
              <Typography variant="h6" className={styles.title}>
                {t(`header.navigation.characters`)}
              </Typography>
              <Box component="div" className={styles.linkContainer}>
                {data.characters.items?.map((item) => (
                  <Link
                    key={item.resourceURI}
                    to={`/characters/${item.resourceURI.split('/').at(-1)}`}
                    className={styles.link}
                  >
                    <Typography className={styles.text}>{item.name}</Typography>
                  </Link>
                ))}
              </Box>
            </Grid>
          )}
          {data?.comics !== undefined && (
            <Grid xs={3} item>
              <Typography variant="h6" className={styles.title}>
                {t(`header.navigation.comics`)}
              </Typography>
              <Box component="div" className={styles.linkContainer}>
                {data.comics.items?.map((item) => (
                  <Link
                    key={item.resourceURI}
                    to={`/comics/${item.resourceURI.split('/').at(-1)}`}
                    className={styles.link}
                  >
                    <Typography className={styles.text}>{item.name}</Typography>
                  </Link>
                ))}
              </Box>
            </Grid>
          )}
          {data?.series !== undefined && (
            <Grid xs={3} item>
              <Typography variant="h6" className={styles.title}>
                {t(`header.navigation.series`)}
              </Typography>
              <Box component="div" className={styles.linkContainer}>
                {(data.series.items !== undefined
                  ? data.series.items
                  : [data.series]
                )?.map((item) => (
                  <Link
                    key={item.resourceURI}
                    to={`/series/${item.resourceURI.split('/').at(-1)}`}
                    className={styles.link}
                  >
                    <Typography className={styles.text}>{item.name}</Typography>
                  </Link>
                ))}
              </Box>
            </Grid>
          )}
        </Grid>
      </Box>
    </StyledEngineProvider>
  );
}

export default CardDetails;
