import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  DateTimeInput,
} from "react-admin";

export const SalesProcessCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="customer" source="customer" />
        <DateTimeInput label="followUp" source="followUp" />
        <TextInput label="salesStage" source="salesStage" />
      </SimpleForm>
    </Create>
  );
};
