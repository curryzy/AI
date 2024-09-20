import { AuthorWhereUniqueInput } from "../author/AuthorWhereUniqueInput";
import { CommentListRelationFilter } from "../comment/CommentListRelationFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";

export type BlogWhereInput = {
  author?: AuthorWhereUniqueInput;
  comments?: CommentListRelationFilter;
  content?: StringNullableFilter;
  id?: StringFilter;
  publishedAt?: DateTimeNullableFilter;
  status?: "Option1";
  title?: StringNullableFilter;
};
