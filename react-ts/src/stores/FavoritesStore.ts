// MobX
import { observable, action, makeObservable } from 'mobx';
import { Card } from 'types';

class FavoritesStore {
  @observable
  favorites: Card[] = JSON.parse(localStorage.getItem('favorites') || '[]');

  constructor() {
    makeObservable(this);
  }

  @action
  addFavorite = (card: Card): void => {
    this.favorites = [...this.favorites, card];

    localStorage.setItem('favorites', JSON.stringify(this.favorites));
  };

  @action
  removeFavorite = (id: string): void => {
    this.favorites = this.favorites.filter((item) => item.id !== id);

    localStorage.setItem('favorites', JSON.stringify(this.favorites));
  };

  @action
  contains = (id: string): boolean => {
    return this.favorites.find((item) => item.id === id) !== undefined;
  };
}

const favoritesStore = new FavoritesStore();

export default favoritesStore;
