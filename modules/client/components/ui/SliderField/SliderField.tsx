import * as React from "react";

import { SliderFieldProps } from "./SliderField.d";
import { FormGroup, Slider } from "@blueprintjs/core";
import { FieldProps, Field } from "formik";

const SliderField: React.FC<SliderFieldProps> = ({
  ref = null,
  className = "",
  onClick = e => console.info("Click"),
  helperText = null,
  label = "",
  fieldName = "",
  fieldInfo = "(required)",
}) => {
  const clickHandler = e => onClick(e);

  // const [sliderValue, setSliderValue] = React.useState(5);

  const renderLabel2 = function(val: number) {
    return `${val}`;
  };

  return (
    <Field
      ref={ref}
      name={fieldName}
      render={({ field, form }: FieldProps<any>) => {
        // console.info("field", field);
        return (
          <FormGroup
            helperText={helperText}
            labelFor={fieldName}
            labelInfo={fieldInfo}
          >
            <Slider
              min={0}
              max={10}
              stepSize={1}
              labelRenderer={renderLabel2}
              onChange={num => form.setFieldValue(fieldName, num)}
              onRelease={num => form.setFieldValue(fieldName, num)}
              value={field.value}
              // {...field}
            />
          </FormGroup>
        );
      }}
    />
  );
};

export default SliderField;
