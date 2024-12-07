import { BlogWhereUniqueInput } from "../blog/BlogWhereUniqueInput";

export type CommentCreateInput = {
  blog?: BlogWhereUniqueInput | null;
  content?: string | null;
};
