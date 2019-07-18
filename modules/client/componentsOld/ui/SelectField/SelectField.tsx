import * as React from "react";

import { SelectFieldProps } from "./SelectField.d";
import { InputGroup, FormGroup, HTMLSelect } from "@blueprintjs/core";
import { FieldProps, Field } from "formik";
import ValidationNotice from "../ValidationNotice/ValidationNotice";

const SelectField: React.FC<SelectFieldProps> = ({
  ref = null,
  className = "",
  onClick = e => console.info("Click"),
  onChange = e => console.info("Change"),
  helperText = "",
  label = "",
  fieldName = "",
  fieldInfo = "(required)",
  options = [],
}) => {
  const clickHandler = e => onClick(e);
  const changeHandler = e => onChange(e);

  return (
    <Field
      ref={ref}
      name={fieldName}
      render={({ field, form }: FieldProps<any>) => {
        return (
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
              onChange={e => {
                form.setFieldValue(fieldName, e.currentTarget.value);
                changeHandler(e);
              }}
            />
            {form.touched[fieldName] && form.errors[fieldName] ? (
              <ValidationNotice error={form.errors[fieldName]} />
            ) : (
              <></>
            )}
          </FormGroup>
        );
      }}
    />
  );
};

export default SelectField;
