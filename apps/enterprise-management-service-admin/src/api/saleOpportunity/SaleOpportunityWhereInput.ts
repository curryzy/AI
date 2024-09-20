import { ContractListRelationFilter } from "../contract/ContractListRelationFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { LeadWhereUniqueInput } from "../lead/LeadWhereUniqueInput";
import { IntNullableFilter } from "../../util/IntNullableFilter";

export type SaleOpportunityWhereInput = {
  contracts?: ContractListRelationFilter;
  customer?: StringNullableFilter;
  id?: StringFilter;
  lead?: LeadWhereUniqueInput;
  progress?: StringNullableFilter;
  revenueForecast?: IntNullableFilter;
};
