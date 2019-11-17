import * as React from "react";

import { FormGroup } from "@blueprintjs/core";
import { Field, FieldProps } from "formik";
import Select from "react-select";
import ValidationNotice from "../ValidationNotice/ValidationNotice";
import { AutocompleteFieldProps } from "./AutocompleteField.d";

const AutocompleteField: React.FC<AutocompleteFieldProps> = ({
  ref = null,
  className = "",
  onClick = e => console.info("Click"),
  helperText = null,
  label = "",
  fieldName = "",
  fieldInfo = "(required)",
  fieldPlaceholder = "",
  fieldType = "text",
  options = [],
  isMulti = false,
}) => {
  return (
    <Field
      ref={ref}
      name={fieldName}
      render={({ field, form }: FieldProps<any>) => (
        <FormGroup
          helperText={helperText}
          label={label}
          labelFor={fieldName}
          labelInfo={fieldInfo}
        >
          <Select
            value={field.value}
            placeholder={fieldPlaceholder}
            onChange={value => {
              form.setFieldValue(field.name, value);
            }}
            options={options}
            isMulti={isMulti}
            // {...field}
          />
          {form.touched[fieldName] && form.errors[fieldName] ? (
            <ValidationNotice error={form.errors[fieldName]} />
          ) : (
            <></>
          )}
        </FormGroup>
      )}
    />
  );
};

export default AutocompleteField;
