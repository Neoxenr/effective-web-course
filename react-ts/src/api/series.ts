import { GetAllSeriesResponseDto, GetSerialResponseDto } from 'types';

import axios from './helpers/axios';

export default {
  async getSeriesList(
    offset: number,
    nameStartsWith?: string
  ): Promise<GetAllSeriesResponseDto> {
    const response = await axios.get(
      `v1/public/series?${
        nameStartsWith ? `titleStartsWith=${nameStartsWith}&` : ''
      }offset=${offset}`
    );

    return response.data;
  },
  async getSerial(id: string): Promise<GetSerialResponseDto> {
    const response = await axios.get(`v1/public/series/${id}`);

    return response.data;
  }
};
