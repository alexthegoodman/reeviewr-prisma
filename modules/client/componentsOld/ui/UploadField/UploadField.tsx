import * as React from "react";

import { UploadFieldProps } from "./UploadField.d";
import { InputGroup, FormGroup, FileInput, Text } from "@blueprintjs/core";
import { FieldProps, Field } from "formik";
import ValidationNotice from "../ValidationNotice/ValidationNotice";

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
            inputProps={{
              id: fieldName,
              name: fieldName,
            }}
            {...field}
            onChange={event => {
              // const files = event.target["files"][0];
              // console.info("file", event, files);
              // form.setFieldValue(fieldName, files);
              const file = event.target["files"][0];
              const reader = new FileReader();
              form.setFieldValue(fieldName, file.name);
              form.setFieldValue(fieldName + "Size", file.size);
              form.setFieldValue(fieldName + "Type", file.type);
              reader.onload = function(item) {
                form.setFieldValue(fieldName + "Data", item.target["result"]);
              };

              reader.readAsDataURL(file);
            }}
          />
          <Text tagName="p">
            Selected File:{" "}
            {field.value
              ? field.value
                  .split("\\")
                  .slice(-1)
                  .pop()
              : ""}
          </Text>
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

export default UploadField;
