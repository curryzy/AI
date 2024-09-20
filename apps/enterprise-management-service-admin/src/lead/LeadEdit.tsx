import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  NumberInput,
  TextInput,
  ReferenceArrayInput,
  SelectArrayInput,
} from "react-admin";

import { SaleOpportunityTitle } from "../saleOpportunity/SaleOpportunityTitle";

export const LeadEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <NumberInput label="conversionRate" source="conversionRate" />
        <TextInput label="customer" source="customer" />
        <TextInput label="leadSource" source="leadSource" />
        <ReferenceArrayInput
          source="saleOpportunities"
          reference="SaleOpportunity"
        >
          <SelectArrayInput
            optionText={SaleOpportunityTitle}
            parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
            format={(value: any) => value && value.map((v: any) => v.id)}
          />
        </ReferenceArrayInput>
        <TextInput label="status" source="status" />
      </SimpleForm>
    </Edit>
  );
};
