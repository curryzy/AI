import { Order as TOrder } from "../api/order/Order";

export const ORDER_TITLE_FIELD = "customer";

export const OrderTitle = (record: TOrder): string => {
  return record.customer?.toString() || String(record.id);
};
