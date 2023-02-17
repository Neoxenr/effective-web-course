import { Base } from './base';

export type Card = Omit<Base, 'characters' | 'comics' | 'series'> & {
  type?: string;
};
