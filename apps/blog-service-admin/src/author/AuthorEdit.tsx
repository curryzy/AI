import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceArrayInput,
  SelectArrayInput,
  TextInput,
} from "react-admin";

import { BlogTitle } from "../blog/BlogTitle";

export const AuthorEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <ReferenceArrayInput source="blogs" reference="Blog">
          <SelectArrayInput
            optionText={BlogTitle}
            parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
            format={(value: any) => value && value.map((v: any) => v.id)}
          />
        </ReferenceArrayInput>
        <TextInput label="email" source="email" type="email" />
        <TextInput label="firstName" source="firstName" />
        <TextInput label="lastName" source="lastName" />
      </SimpleForm>
    </Edit>
  );
};
