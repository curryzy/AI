import { BlogWhereUniqueInput } from "../blog/BlogWhereUniqueInput";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type CommentWhereInput = {
  blog?: BlogWhereUniqueInput;
  content?: StringNullableFilter;
  id?: StringFilter;
};
