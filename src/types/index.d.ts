export type PostType = {
  id: string | number;
  title: string;
  body: string;
};
export type PostsType = PostType[];

export type SortType = "title" | "body" | "";
export type FilterType = {
  query: string;
  sort: SortType;
};
