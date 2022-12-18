// React
import React, { ReactElement, useState } from 'react';
import { useNavigate } from 'react-router-dom';

// MUI
import {
  Card as CardMUI,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography
} from '@mui/material';
import { Favorite, FavoriteBorder } from '@mui/icons-material';

// Store
import favoritesStore from 'stores/FavoritesStore';

// SCSS
import styles from './Card.module.scss';

interface CardProps {
  id?: string;
  type?: string;
  name?: string;
  description?: string;
  thumbnail?: {
    path?: string;
    extension?: string;
  };
}

function Card({
  id,
  type,
  name,
  description,
  thumbnail
}: CardProps): ReactElement {
  const navigate = useNavigate();

  const [isFavorited, setIsFavorited] = useState<boolean>(
    id ? favoritesStore.contains(id) : false
  );
  const [isHovered, setIsHovered] = useState<boolean>(false);

  return (
    <CardMUI
      className={styles.card}
      onClick={() => {
        navigate(`/${type}/${id}`);
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <CardActionArea className={styles.area}>
        {isHovered &&
          (isFavorited ? (
            <Favorite
              onClick={(event) => {
                event.stopPropagation();

                if (id) {
                  favoritesStore.removeFavorite(id);
                }

                setIsFavorited(false);
              }}
              className={styles.icon}
            />
          ) : (
            <FavoriteBorder
              onClick={(event) => {
                event.stopPropagation();

                favoritesStore.addFavorite({
                  id,
                  name,
                  type,
                  description,
                  thumbnail
                });

                setIsFavorited(true);
              }}
              className={styles.icon}
            />
          ))}
        <CardMedia
          component="img"
          className={styles.media}
          image={`${thumbnail?.path}/landscape_xlarge.${thumbnail?.extension}`}
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
