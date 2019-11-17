import * as React from "react";

import { RadioFieldProps } from "./RadioField.d";
import { Radio, RadioGroup, FormGroup } from "@blueprintjs/core";
import { Field, FieldProps } from "formik";
import ValidationNotice from "../ValidationNotice/ValidationNotice";

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

  const [fieldValue, setFieldValue] = React.useState("off");

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
            <RadioGroup
              label={label}
              name={fieldName}
              onChange={event => {
                console.info("radio change", event.currentTarget.value);
                form.setFieldValue(fieldName, event.currentTarget.value);
                setFieldValue(event.currentTarget.value);
              }}
              selectedValue={fieldValue}
            >
              {options.map((option, i) => {
                return (
                  <div key={i} className="radioField">
                    <Radio
                      {...field}
                      onChange={event => {
                        console.info("radio change", event.currentTarget.value);
                        form.setFieldValue(
                          fieldName,
                          event.currentTarget.value
                        );
                        setFieldValue(event.currentTarget.value);
                      }}
                      name={fieldName}
                      label={option.label}
                      value={option.label}
                    />
                  </div>
                );
              })}
              {form.touched[fieldName] && form.errors[fieldName] ? (
                <ValidationNotice error={form.errors[fieldName]} />
              ) : (
                <></>
              )}
            </RadioGroup>
          </FormGroup>
        );
      }}
    />
  );
};

export default RadioField;
