import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  DateTimeInput,
  SelectInput,
  NumberInput,
} from "react-admin";

export const EnterpriseCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="Description" multiline source="description" />
        <DateTimeInput label="EstablishedDate" source="establishedDate" />
        <SelectInput
          source="industry"
          label="Industry"
          choices={[{ label: "Option 1", value: "Option1" }]}
          optionText="label"
          allowEmpty
          optionValue="value"
        />
        <TextInput label="Name" source="name" />
        <NumberInput
          step={1}
          label="NumberOfEmployees"
          source="numberOfEmployees"
        />
      </SimpleForm>
    </Create>
  );
};
