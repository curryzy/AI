import { CustomerLevel } from "../customerLevel/CustomerLevel";

export type CustomerInfo = {
  address: string | null;
  contactInfo: string | null;
  createdAt: Date;
  customerLevel?: CustomerLevel | null;
  id: string;
  interactionHistory: string | null;
  name: string | null;
  updatedAt: Date;
};
