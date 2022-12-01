// MobX
import { observable, action, makeObservable, runInAction } from 'mobx';

class SearchStore {
  @observable
  searchedText: string = '';

  constructor() {
    makeObservable(this);
  }

  @action
  setSearchedText = async (searchedText: string): Promise<void> => {
    runInAction(() => {
      this.searchedText = searchedText;
    });
  };
}

const searchStore = new SearchStore();

export default searchStore;
