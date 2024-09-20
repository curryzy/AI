import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";
import { CustomerLevelTitle } from "../customerLevel/CustomerLevelTitle";

export const CustomerInfoEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="address" source="address" />
        <TextInput
          label="communicationContent"
          multiline
          source="communicationContent"
        />
        <TextInput label="companyInfo" source="companyInfo" />
        <TextInput label="contactInfo" source="contactInfo" />
        <ReferenceInput
          source="customerLevel.id"
          reference="CustomerLevel"
          label="customerLevel"
        >
          <SelectInput optionText={CustomerLevelTitle} />
        </ReferenceInput>
        <TextInput label="followUpLogs" multiline source="followUpLogs" />
        <TextInput label="name" source="name" />
      </SimpleForm>
    </Edit>
  );
};
