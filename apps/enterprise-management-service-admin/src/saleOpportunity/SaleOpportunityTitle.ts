import { SaleOpportunity as TSaleOpportunity } from "../api/saleOpportunity/SaleOpportunity";

export const SALEOPPORTUNITY_TITLE_FIELD = "customer";

export const SaleOpportunityTitle = (record: TSaleOpportunity): string => {
  return record.customer?.toString() || String(record.id);
};
