import { CustomerLevel } from "../customerLevel/CustomerLevel";

export type CustomerInfo = {
  address: string | null;
  communicationContent: string | null;
  companyInfo: string | null;
  contactInfo: string | null;
  createdAt: Date;
  customerLevel?: CustomerLevel | null;
  followUpLogs: string | null;
  id: string;
  name: string | null;
  updatedAt: Date;
};
