import * as React from "react";

import { RadioFieldProps } from "./RadioField.d";
import { Radio, RadioGroup, FormGroup } from "@blueprintjs/core";
import { Field, FieldProps } from "formik";

const RadioField: React.FC<RadioFieldProps> = ({
  ref = null,
  className = "",
  onClick = e => console.info("Click"),
  helperText = null,
  label = "",
  fieldName = "",
  fieldInfo = "(required)",
  options = [],
}) => {
  const clickHandler = e => onClick(e);
  return (
    <Field
      ref={ref}
      name={fieldName}
      render={({ field, form }: FieldProps<any>) => {
        return (
          <FormGroup
            helperText={helperText}
            labelFor={fieldName}
            labelInfo={fieldInfo}
          >
            <RadioGroup label={label} {...field}>
              {options.map((option, i) => {
                <Radio label={option.label} value={option.value} />;
              })}
            </RadioGroup>
          </FormGroup>
        );
      }}
    />
  );
};

export default RadioField;
