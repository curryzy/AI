import * as React from "react";
import { Edit, SimpleForm, EditProps, TextInput } from "react-admin";

export const EmailCampaignEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="campaignDetails" multiline source="campaignDetails" />
        <TextInput label="status" source="status" />
      </SimpleForm>
    </Edit>
  );
};
