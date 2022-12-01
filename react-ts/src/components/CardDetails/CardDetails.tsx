// React
import React, { ReactElement } from 'react';

// MUI
import {
  Grid,
  StyledEngineProvider,
  Typography,
  Box,
  Link
} from '@mui/material';

// i18n
import { useTranslation } from 'react-i18next';

import MD5 from 'crypto-js/md5';

// Config
import envs from 'config/environments';

// Types
import { Base } from 'types';

// SCSS
import styles from './CardDetails.module.scss';

interface CardDetailsProps {
  data?: Base;
}

const ts = new Date().getTime();

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
                    href={`${item.resourceURI}?ts=${ts}&apikey=${
                      envs.apiKey
                    }&hash=${MD5(ts + envs.privateKey + envs.apiKey)}`}
                    rel="noreferrer"
                    target="_blank"
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
                    href={`${item.resourceURI}?ts=${ts}&apikey=${
                      envs.apiKey
                    }&hash=${MD5(ts + envs.privateKey + envs.apiKey)}`}
                    rel="noreferrer"
                    target="_blank"
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
                    href={`${item.resourceURI}?ts=${ts}&apikey=${
                      envs.apiKey
                    }&hash=${MD5(ts + envs.privateKey + envs.apiKey)}`}
                    rel="noreferrer"
                    target="_blank"
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
