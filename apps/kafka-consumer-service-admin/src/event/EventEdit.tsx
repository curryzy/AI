import * as React from "react";
import { Edit, SimpleForm, EditProps, TextInput } from "react-admin";

export const EventEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="eventType" source="eventType" />
        <div />
      </SimpleForm>
    </Edit>
  );
};
