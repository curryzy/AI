import { Blog } from "../blog/Blog";

export type Author = {
  blogs?: Array<Blog>;
  createdAt: Date;
  email: string | null;
  firstName: string | null;
  id: string;
  lastName: string | null;
  updatedAt: Date;
};
