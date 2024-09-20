import { BlogWhereUniqueInput } from "../blog/BlogWhereUniqueInput";

export type CommentUpdateInput = {
  blog?: BlogWhereUniqueInput | null;
  content?: string | null;
};
