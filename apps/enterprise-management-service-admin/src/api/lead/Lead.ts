import { SaleOpportunity } from "../saleOpportunity/SaleOpportunity";

export type Lead = {
  conversionRate: number | null;
  createdAt: Date;
  customer: string | null;
  id: string;
  leadSource: string | null;
  saleOpportunities?: Array<SaleOpportunity>;
  status: string | null;
  updatedAt: Date;
};
