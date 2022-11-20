// React
import React, { ReactElement } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

// MUI
import {
  Card as CardMUI,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography
} from '@mui/material';

// Types
import { Card as CardType } from 'types';

// SCSS
import styles from './Card.module.scss';

function Card({ id, title, description, imageUrl }: CardType): ReactElement {
  const location = useLocation();

  const navigate = useNavigate();

  return (
    <CardMUI
      className={styles.card}
      onClick={() =>
        navigate(
          `${
            location.pathname === '/' ? '/characters' : location.pathname
          }/${id}`
        )
      }
    >
      <CardActionArea>
        <CardMedia
          component="img"
          className={styles.media}
          image={imageUrl}
          alt={title}
        />
        <CardContent>
          <Typography variant="h5" component="div" className={styles.title}>
            {title}
          </Typography>
          <Typography variant="body2" className={styles.description}>
            {description}
          </Typography>
        </CardContent>
      </CardActionArea>
    </CardMUI>
  );
}

export default Card;
