// MobX
import { observable, action, makeObservable, runInAction } from 'mobx';

// API
import api from 'api';

// Types
import { Comic } from 'types';

class ComicsStore {
  @observable
  comics: Comic[] = [];

  @observable
  comicsTotal: number = 0;

  @observable
  comic: Comic = {};

  @observable
  loading: boolean = false;

  @observable
  error: string = '';

  constructor() {
    makeObservable(this);
  }

  @action
  getComicsList = async (
    offset: number = 0,
    nameStartsWith?: string
  ): Promise<void> => {
    try {
      this.loading = true;
      this.error = '';

      const response = await api.comics.getComicsList(offset, nameStartsWith);

      const comics = response.data.results;

      const comicsTotal = response.data.total;

      if (this.comicsTotal !== comicsTotal) {
        runInAction(() => {
          this.comicsTotal = comicsTotal;
        });
      }

      runInAction(() => {
        this.comics = comics;
      });
    } catch (error: any) {
      console.error(error);

      runInAction(() => {
        this.error = error.message;
      });
    } finally {
      runInAction(() => {
        this.loading = false;
      });
    }
  };

  @action
  getComic = async (id: string): Promise<void> => {
    try {
      this.loading = true;
      this.error = '';

      const response = await api.comics.getComic(id);

      const comic = response.data.results[0];

      runInAction(() => {
        this.comic = comic;
      });
    } catch (error: any) {
      console.error(error);

      runInAction(() => {
        this.error = error.message;
      });
    } finally {
      runInAction(() => {
        this.loading = false;
      });
    }
  };
}

const comicsStore = new ComicsStore();

export default comicsStore;
