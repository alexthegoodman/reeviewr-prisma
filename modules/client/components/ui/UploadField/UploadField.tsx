import * as React from "react";

import { UploadFieldProps } from "./UploadField.d";
import { InputGroup, FormGroup, FileInput } from "@blueprintjs/core";
import { FieldProps, Field } from "formik";

const UploadField: React.FC<UploadFieldProps> = ({
  ref = null,
  className = "",
  onClick = e => console.info("Click"),
  helperText = null,
  label = "",
  fieldName = "",
  fieldInfo = "(required)",
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
          <FileInput
            id={fieldName}
            className={className}
            text="Choose file..."
            // onInputChange={}
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

export default UploadField;
