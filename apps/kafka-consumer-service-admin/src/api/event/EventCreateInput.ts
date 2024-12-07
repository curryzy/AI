import { InputJsonValue } from "../../types";

export type EventCreateInput = {
  eventType?: string | null;
  payload?: InputJsonValue;
};
