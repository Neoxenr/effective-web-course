type BaseLink = {
  name?: string;
  resourceURI?: string;
};

type BaseItems = {
  items?: BaseLink[];
};

export type Base = {
  id?: string;
  name?: string;
  title?: string;
  description?: string;
  thumbnail?: {
    path?: string;
    extension?: string;
  };
  characters?: BaseItems;
  comics?: BaseItems;
  series?: BaseItems & BaseLink;
};
