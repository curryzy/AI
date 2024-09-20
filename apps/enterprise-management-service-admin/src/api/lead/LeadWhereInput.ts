import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { SaleOpportunityListRelationFilter } from "../saleOpportunity/SaleOpportunityListRelationFilter";

export type LeadWhereInput = {
  conversionRate?: FloatNullableFilter;
  customer?: StringNullableFilter;
  id?: StringFilter;
  leadSource?: StringNullableFilter;
  saleOpportunities?: SaleOpportunityListRelationFilter;
  status?: StringNullableFilter;
};
