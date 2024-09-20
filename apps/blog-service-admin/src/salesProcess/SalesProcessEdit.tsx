import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  DateTimeInput,
} from "react-admin";

export const SalesProcessEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="customer" source="customer" />
        <DateTimeInput label="followUp" source="followUp" />
        <TextInput label="salesStage" source="salesStage" />
      </SimpleForm>
    </Edit>
  );
};
