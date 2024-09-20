import * as React from "react";
import { Edit, SimpleForm, EditProps, TextInput } from "react-admin";

export const MarketActivityEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="activityName" source="activityName" />
        <TextInput label="evaluation" multiline source="evaluation" />
        <TextInput label="participants" multiline source="participants" />
      </SimpleForm>
    </Edit>
  );
};
