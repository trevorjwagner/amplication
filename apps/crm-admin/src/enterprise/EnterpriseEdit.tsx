import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  DateTimeInput,
  SelectInput,
  NumberInput,
} from "react-admin";

export const EnterpriseEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
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
    </Edit>
  );
};
