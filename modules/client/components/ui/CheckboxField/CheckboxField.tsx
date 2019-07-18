import * as React from "react";

import { Checkbox, FormGroup, InputGroup, Label } from "@blueprintjs/core";
import { Field, FieldProps } from "formik";
import ValidationNotice from "../ValidationNotice/ValidationNotice";
import { CheckboxFieldProps } from "./CheckboxField.d";

const CheckboxField: React.FC<CheckboxFieldProps> = ({
  ref = null,
  className = "",
  onClick = e => console.info("Click"),
  helperText = null,
  label = "",
  fieldName = "",
  fieldInfo = "",
}) => {
  // const clickHandler = e => onClick(e);
  // const [isEnabled, setIsEnabled] = React.useState(false);
  // const handleEnabledChange = enabled => {
  //   console.info(enabled);
  //   setIsEnabled(enabled);
  // };
  return (
    <Field
      ref={ref}
      name={fieldName}
      render={({ field, form }: FieldProps<any>) => (
        <FormGroup
          helperText={helperText}
          labelFor={fieldName}
          labelInfo={fieldInfo}
        >
          <Checkbox
            id={fieldName}
            className={className}
            label={label}
            {...field}
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

export default CheckboxField;
