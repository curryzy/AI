import { BlogCreateNestedManyWithoutAuthorsInput } from "./BlogCreateNestedManyWithoutAuthorsInput";

export type AuthorCreateInput = {
  blogs?: BlogCreateNestedManyWithoutAuthorsInput;
  email?: string | null;
  firstName?: string | null;
  lastName?: string | null;
};
