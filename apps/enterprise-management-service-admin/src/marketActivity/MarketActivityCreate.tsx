import * as React from "react";
import { Create, SimpleForm, CreateProps, TextInput } from "react-admin";

export const MarketActivityCreate = (
  props: CreateProps
): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="activityName" source="activityName" />
        <TextInput label="evaluation" multiline source="evaluation" />
        <TextInput label="participants" multiline source="participants" />
      </SimpleForm>
    </Create>
  );
};
