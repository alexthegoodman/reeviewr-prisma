import * as React from "react";

import { SelectFieldProps } from "./SelectField.d";
import { InputGroup, FormGroup, HTMLSelect } from "@blueprintjs/core";
import { FieldProps, Field } from "formik";

const SelectField: React.FC<SelectFieldProps> = ({
  ref = null,
  className = "",
  onClick = e => console.info("Click"),
  helperText = null,
  label = "",
  fieldName = "",
  fieldInfo = "(required)",
  options = [],
}) => {
  // const clickHandler = e => onClick(e);
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
          <HTMLSelect
            id={fieldName}
            className={className}
            options={options}
            {...field}
          />
          {form.touched[fieldName] &&
            form.errors[fieldName] &&
            form.errors[fieldName]}
        </FormGroup>
      )}
    />
  );
};

export default SelectField;
