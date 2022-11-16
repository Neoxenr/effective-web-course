import React, { ReactElement } from 'react';

// Types
import { Card as CardType } from 'types';

// MUI
import {
  Card as CardMUI,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography
} from '@mui/material';

// CSS
import './style.css';

function Card({ title, description, imageUrl }: CardType): ReactElement {
  return (
    <CardMUI sx={{ maxWidth: 300 }}>
      <CardActionArea>
        <CardMedia component="img" height="200" image={imageUrl} alt={title} />
        <CardContent>
          <Typography variant="h5" component="div">
            {title}
          </Typography>
          <Typography
            variant="body2"
            color="text.secondary"
            className="card__description"
          >
            {description}
          </Typography>
        </CardContent>
      </CardActionArea>
    </CardMUI>
  );
}

export default Card;
