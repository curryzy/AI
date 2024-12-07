import { BlogUpdateManyWithoutAuthorsInput } from "./BlogUpdateManyWithoutAuthorsInput";

export type AuthorUpdateInput = {
  blogs?: BlogUpdateManyWithoutAuthorsInput;
  email?: string | null;
  firstName?: string | null;
  lastName?: string | null;
};
