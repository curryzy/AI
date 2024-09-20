import * as React from "react";
import { Create, SimpleForm, CreateProps, TextInput } from "react-admin";

export const EmailCampaignCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="campaignDetails" multiline source="campaignDetails" />
        <TextInput label="status" source="status" />
      </SimpleForm>
    </Create>
  );
};
