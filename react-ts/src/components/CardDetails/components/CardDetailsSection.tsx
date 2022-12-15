// React
import React, { ReactElement } from 'react';
import { Link } from 'react-router-dom';

// MUI
import { Grid, StyledEngineProvider, Typography, Box } from '@mui/material';

// i18n
import { useTranslation } from 'react-i18next';

// Types
import { BaseLink } from 'types/base';

// SCSS
import styles from '../CardDetails.module.scss';

interface CardDetailsSectionProps {
  items: BaseLink[];
  title: string;
}

function CardDetailsSection({
  items,
  title
}: CardDetailsSectionProps): ReactElement {
  const { t } = useTranslation();

  return (
    <StyledEngineProvider injectFirst>
      <Grid xs={3} item>
        <Typography variant="h6" className={styles.title}>
          {t(`header.navigation.${title}`)}
        </Typography>
        <Box component="div" className={styles.linkContainer}>
          {items.length
            ? items.map((item) => (
                <Link
                  key={item.resourceURI}
                  to={`/${title}/${item.resourceURI.split('/').at(-1)}`}
                  className={styles.link}
                >
                  <Typography className={styles.text}>{item.name}</Typography>
                </Link>
              ))
            : t(`main.content.cardDetails.${title}`)}
        </Box>
      </Grid>
    </StyledEngineProvider>
  );
}

export default CardDetailsSection;
