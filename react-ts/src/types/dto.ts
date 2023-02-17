import { Comic, Serial } from 'types';
import { Character } from './character';

export type GetAllCharactersResponseDto = {
  data: {
    total: number;
    results: Character[];
  };
};

export type GetCharacterResponseDto = {
  data: {
    results: Character[];
  };
};

export type GetAllComicsResponseDto = {
  data: {
    total: number;
    results: Comic[];
  };
};

export type GetComicResponseDto = {
  data: {
    results: Comic[];
  };
};

export type GetAllSeriesResponseDto = {
  data: {
    total: number;
    results: Serial[];
  };
};

export type GetSerialResponseDto = {
  data: {
    results: Serial[];
  };
};
