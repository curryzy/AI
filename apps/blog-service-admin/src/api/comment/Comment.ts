import { Blog } from "../blog/Blog";

export type Comment = {
  blog?: Blog | null;
  content: string | null;
  createdAt: Date;
  id: string;
  updatedAt: Date;
};
