import { SaleOpportunity } from "../saleOpportunity/SaleOpportunity";

export type Contract = {
  contractDetails: string | null;
  createdAt: Date;
  customer: string | null;
  id: string;
  saleOpportunity?: SaleOpportunity | null;
  updatedAt: Date;
  validityPeriod: Date | null;
};
