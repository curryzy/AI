import { AuthorWhereUniqueInput } from "../author/AuthorWhereUniqueInput";
import { CommentUpdateManyWithoutBlogsInput } from "./CommentUpdateManyWithoutBlogsInput";

export type BlogUpdateInput = {
  author?: AuthorWhereUniqueInput | null;
  comments?: CommentUpdateManyWithoutBlogsInput;
  content?: string | null;
  publishedAt?: Date | null;
  status?: "Option1" | null;
  title?: string | null;
};
