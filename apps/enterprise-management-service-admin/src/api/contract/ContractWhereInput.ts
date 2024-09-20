import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { SaleOpportunityWhereUniqueInput } from "../saleOpportunity/SaleOpportunityWhereUniqueInput";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";

export type ContractWhereInput = {
  contractDetails?: StringNullableFilter;
  customer?: StringNullableFilter;
  id?: StringFilter;
  saleOpportunity?: SaleOpportunityWhereUniqueInput;
  validityPeriod?: DateTimeNullableFilter;
};
