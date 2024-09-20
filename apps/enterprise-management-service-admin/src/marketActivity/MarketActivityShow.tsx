import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
} from "react-admin";

export const MarketActivityShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="activityName" source="activityName" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="evaluation" source="evaluation" />
        <TextField label="ID" source="id" />
        <TextField label="participants" source="participants" />
        <DateField source="updatedAt" label="Updated At" />
      </SimpleShowLayout>
    </Show>
  );
};
