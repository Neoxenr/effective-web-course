// Types
import { GetAllCharactersResponseDto, GetCharacterResponseDto } from 'types';

// Axios
import axios from './helpers/axios';

export default {
  async getCharactersList(
    offset: number,
    nameStartsWith?: string | null
  ): Promise<GetAllCharactersResponseDto> {
    const response = await axios.get(
      `v1/public/characters?${
        nameStartsWith ? `nameStartsWith=${nameStartsWith}&` : ''
      }offset=${offset}`
    );

    return response.data;
  },
  async getCharacter(id: string): Promise<GetCharacterResponseDto> {
    const response = await axios.get(`v1/public/characters/${id}`);

    return response.data;
  }
};
