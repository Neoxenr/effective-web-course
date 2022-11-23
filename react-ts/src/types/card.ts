import { DetailLink } from './detail';

export type Card = {
  id: string;
  title?: string;
  description?: string;
  imageUrl?: string;
};

export type CardDetail = Card & {
  appearances?: {
    characters?: DetailLink[];
    comics?: DetailLink[];
    series?: DetailLink[];
  };
};
