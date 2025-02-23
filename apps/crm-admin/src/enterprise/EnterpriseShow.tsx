import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  DateField,
  TextField,
} from "react-admin";

export const EnterpriseShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <DateField source="createdAt" label="Created At" />
        <TextField label="Description" source="description" />
        <TextField label="EstablishedDate" source="establishedDate" />
        <TextField label="ID" source="id" />
        <TextField label="Industry" source="industry" />
        <TextField label="Name" source="name" />
        <TextField label="NumberOfEmployees" source="numberOfEmployees" />
        <DateField source="updatedAt" label="Updated At" />
      </SimpleShowLayout>
    </Show>
  );
};
