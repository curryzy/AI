import { CustomerInfo } from "../customerInfo/CustomerInfo";

export type CustomerLevel = {
  createdAt: Date;
  customerInfos?: Array<CustomerInfo>;
  description: string | null;
  id: string;
  level: string | null;
  potentialValue: number | null;
  transactionHistory: string | null;
  updatedAt: Date;
};
