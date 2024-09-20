import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceArrayInput,
  SelectArrayInput,
  TextInput,
  ReferenceInput,
  SelectInput,
  NumberInput,
} from "react-admin";

import { ContractTitle } from "../contract/ContractTitle";
import { LeadTitle } from "../lead/LeadTitle";

export const SaleOpportunityEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <ReferenceArrayInput source="contracts" reference="Contract">
          <SelectArrayInput
            optionText={ContractTitle}
            parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
            format={(value: any) => value && value.map((v: any) => v.id)}
          />
        </ReferenceArrayInput>
        <TextInput label="customer" source="customer" />
        <ReferenceInput source="lead.id" reference="Lead" label="lead">
          <SelectInput optionText={LeadTitle} />
        </ReferenceInput>
        <TextInput label="progress" source="progress" />
        <NumberInput
          step={1}
          label="revenueForecast"
          source="revenueForecast"
        />
      </SimpleForm>
    </Edit>
  );
};
