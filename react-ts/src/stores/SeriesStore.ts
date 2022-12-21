// MobX
import { observable, action, makeObservable, runInAction } from 'mobx';

// API
import api from 'api';

// Types
import { Serial } from 'types';

class SeriesStore {
  @observable
  series: Serial[] = [];

  @observable
  serial: Serial = {};

  @observable
  seriesTotal: number = 0;

  @observable
  loading: boolean = false;

  @observable
  error: string = '';

  constructor() {
    makeObservable(this);
  }

  @action
  getSeriesList = async (
    offset: number = 0,
    nameStartsWith?: string | null
  ): Promise<void> => {
    try {
      this.loading = true;
      this.error = '';

      const response = await api.series.getSeriesList(offset, nameStartsWith);

      const series = response.data.results;

      const seriesTotal = response.data.total;

      if (this.seriesTotal !== seriesTotal) {
        runInAction(() => {
          this.seriesTotal = seriesTotal;
        });
      }

      runInAction(() => {
        this.series = series;
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
  getSerial = async (id: string): Promise<void> => {
    try {
      this.loading = true;
      this.error = '';

      const response = await api.series.getSerial(id);

      const serial = response.data.results[0];

      runInAction(() => {
        this.serial = serial;
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

const seriesStore = new SeriesStore();

export default seriesStore;
