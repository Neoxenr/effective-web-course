// MobX
import { observable, action, makeObservable, runInAction } from 'mobx';

// API
import api from 'api';

// Types
import { Character } from 'types';

class CharactersStore {
  @observable
  characters: Character[] = [];

  @observable
  charactersTotal: number = 0;

  @observable
  character: Character = {};

  @observable
  loading: boolean = false;

  @observable
  error: string = '';

  constructor() {
    makeObservable(this);
  }

  @action
  getCharactersList = async (
    offset: number = 0,
    nameStartsWith?: string | null
  ): Promise<void> => {
    try {
      this.loading = true;
      this.error = '';

      const response = await api.characters.getCharactersList(
        offset,
        nameStartsWith
      );

      const characters = response.data.results;

      const charactersTotal = response.data.total;

      if (this.charactersTotal !== charactersTotal) {
        runInAction(() => {
          this.charactersTotal = charactersTotal;
        });
      }

      runInAction(() => {
        this.characters = characters;
      });
    } catch (error) {
      console.error(error);

      runInAction(() => {
        this.error = (error as Error).message;
      });
    } finally {
      runInAction(() => {
        this.loading = false;
      });
    }
  };

  @action
  getCharacter = async (id: string): Promise<void> => {
    try {
      this.loading = true;
      this.error = '';

      const response = await api.characters.getCharacter(id);

      const character = response.data.results[0];

      runInAction(() => {
        this.character = character;
      });
    } catch (error) {
      console.error(error);

      runInAction(() => {
        this.error = (error as Error).message;
      });
    } finally {
      runInAction(() => {
        this.loading = false;
      });
    }
  };
}

const charactersStore = new CharactersStore();

export default charactersStore;
