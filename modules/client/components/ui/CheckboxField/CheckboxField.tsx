import * as React from "react";

import { CheckboxFieldProps } from "./CheckboxField.d";
import { InputGroup, FormGroup, Label, Checkbox } from "@blueprintjs/core";
import { FieldProps, Field } from "formik";

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
          {form.touched[fieldName] &&
            form.errors[fieldName] &&
            form.errors[fieldName]}
        </FormGroup>
      )}
    />
  );
};

export default CheckboxField;
