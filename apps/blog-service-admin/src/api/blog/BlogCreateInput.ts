import { AuthorWhereUniqueInput } from "../author/AuthorWhereUniqueInput";
import { CommentCreateNestedManyWithoutBlogsInput } from "./CommentCreateNestedManyWithoutBlogsInput";

export type BlogCreateInput = {
  author?: AuthorWhereUniqueInput | null;
  comments?: CommentCreateNestedManyWithoutBlogsInput;
  content?: string | null;
  publishedAt?: Date | null;
  status?: "Option1" | null;
  title?: string | null;
};
