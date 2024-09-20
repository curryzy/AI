import * as React from "react";
import { List, Datagrid, ListProps, TextField, DateField } from "react-admin";
import Pagination from "../Components/Pagination";

export const MarketActivityList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      title={"MarketActivities"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show" bulkActionButtons={false}>
        <TextField label="activityName" source="activityName" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="evaluation" source="evaluation" />
        <TextField label="ID" source="id" />
        <TextField label="participants" source="participants" />
        <DateField source="updatedAt" label="Updated At" />{" "}
      </Datagrid>
    </List>
  );
};
