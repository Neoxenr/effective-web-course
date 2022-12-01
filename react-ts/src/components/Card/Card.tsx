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

// SCSS
import styles from './Card.module.scss';

interface CardProps {
  id?: string;
  name?: string;
  description?: string;
  imageUrl?: string;
}

function Card({ id, name, description, imageUrl }: CardProps): ReactElement {
  const location = useLocation();

  const navigate = useNavigate();

  return (
    <CardMUI
      className={styles.card}
      onClick={() => {
        navigate(`${location.pathname}/${id}`);
      }}
    >
      <CardActionArea>
        <CardMedia
          component="img"
          className={styles.media}
          image={imageUrl}
          alt={name}
        />
        <CardContent>
          <Typography variant="h5" component="div" className={styles.title}>
            {name}
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
