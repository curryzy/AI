import { Contract } from "../contract/Contract";
import { Lead } from "../lead/Lead";

export type SaleOpportunity = {
  contracts?: Array<Contract>;
  createdAt: Date;
  customer: string | null;
  id: string;
  lead?: Lead | null;
  progress: string | null;
  revenueForecast: number | null;
  updatedAt: Date;
};
