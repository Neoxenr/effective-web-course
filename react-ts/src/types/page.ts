export type Page = {
  path: string;
  name: string;
  getDataList?: (
    offset?: number,
    nameStartsWith?: string | null | undefined
  ) => void;
};
