import * as React from "react";

import { TextareaFieldProps } from "./TextareaField.d";
import { InputGroup, FormGroup, TextArea } from "@blueprintjs/core";
import { FieldProps, Field } from "formik";
import ValidationNotice from "../ValidationNotice/ValidationNotice";

const TextareaField: React.FC<TextareaFieldProps> = ({
  ref = null,
  className = "",
  onClick = e => console.info("Click"),
  helperText = null,
  label = "",
  fieldName = "",
  fieldInfo = "(required)",
  fieldPlaceholder = "",
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
          <TextArea
            id={fieldName}
            className={className}
            growVertically={true}
            large={true}
            placeholder={fieldPlaceholder}
            // intent={Intent.PRIMARY}
            // onChange={this.handleChange}
            // value={this.state.value}
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

export default TextareaField;
