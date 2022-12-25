import { GetAllComicsResponseDto, GetComicResponseDto } from 'types';

import axios from './helpers/axios';

export default {
  async getComicsList(
    offset: number,
    nameStartsWith?: string | null
  ): Promise<GetAllComicsResponseDto> {
    const response = await axios.get(
      `v1/public/comics?${
        nameStartsWith ? `titleStartsWith=${nameStartsWith}&` : ''
      }offset=${offset}`
    );

    return response.data;
  },
  async getComic(id: string): Promise<GetComicResponseDto> {
    const response = await axios.get(`v1/public/comics/${id}`);

    return response.data;
  }
};
