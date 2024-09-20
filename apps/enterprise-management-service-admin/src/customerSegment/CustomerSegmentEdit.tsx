import * as React from "react";
import { Edit, SimpleForm, EditProps, TextInput } from "react-admin";

export const CustomerSegmentEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="criteria" multiline source="criteria" />
        <TextInput label="segmentName" source="segmentName" />
      </SimpleForm>
    </Edit>
  );
};
