import * as React from "react";

import { TextFieldProps } from "./TextField.d";
import { Field, FieldProps } from "formik";
import { FormGroup, InputGroup } from "@blueprintjs/core";

const TextField: React.FC<TextFieldProps> = ({
  ref = null,
  className = "",
  onClick = e => console.info("Click"),
  helperText = null,
  label = "",
  fieldName = "",
  fieldInfo = "(required)",
  fieldPlaceholder = "",
  fieldType = "text",
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
          <InputGroup
            id={fieldName}
            className={className}
            placeholder={fieldPlaceholder}
            type={fieldType}
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

export default TextField;
