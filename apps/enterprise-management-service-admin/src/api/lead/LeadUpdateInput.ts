import { SaleOpportunityUpdateManyWithoutLeadsInput } from "./SaleOpportunityUpdateManyWithoutLeadsInput";

export type LeadUpdateInput = {
  conversionRate?: number | null;
  customer?: string | null;
  leadSource?: string | null;
  saleOpportunities?: SaleOpportunityUpdateManyWithoutLeadsInput;
  status?: string | null;
};
