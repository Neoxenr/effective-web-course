// MobX
import { observable, action, makeObservable } from 'mobx';

class ThemeSwitcherStore {
  @observable
  isDark = !!JSON.parse(localStorage.getItem('isDark') ?? 'false');

  constructor() {
    makeObservable(this);
  }

  @action
  switchTheme = (): void => {
    this.isDark = !this.isDark;

    localStorage.setItem('isDark', this.isDark.toString());
  };
}

const themeSwitcherStore = new ThemeSwitcherStore();

export default themeSwitcherStore;
