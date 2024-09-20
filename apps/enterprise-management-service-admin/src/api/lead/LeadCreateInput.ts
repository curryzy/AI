import { SaleOpportunityCreateNestedManyWithoutLeadsInput } from "./SaleOpportunityCreateNestedManyWithoutLeadsInput";

export type LeadCreateInput = {
  conversionRate?: number | null;
  customer?: string | null;
  leadSource?: string | null;
  saleOpportunities?: SaleOpportunityCreateNestedManyWithoutLeadsInput;
  status?: string | null;
};
