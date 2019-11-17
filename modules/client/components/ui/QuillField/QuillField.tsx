import * as React from "react";

import { FileInput, FormGroup, InputGroup, Text } from "@blueprintjs/core";
import { Field, FieldProps } from "formik";
// import ReactQuill, { Quill } from "react-quill";
import Utility from "../../../../services/Utility";
import ValidationNotice from "../ValidationNotice/ValidationNotice";
import { QuillFieldProps } from "./QuillField.d";

const QuillField: React.FC<QuillFieldProps> = ({
  ref = null,
  className = "",
  onClick = e => console.info("Click"),
  helperText = null,
  label = "",
  fieldName = "",
  fieldInfo = "(required)",
  fieldModules = null,
  fieldFormats = null,
}) => {
  const utility = new Utility();
  // react-draft-wysiwyg is also an option

  let Quill = null;
  if (document) {
    Quill = require("react-quill");
  }

  const modules =
    fieldModules === null
      ? {
          toolbar: [
            [{ header: [1, 2, false] }],
            ["bold", "italic", "underline", "strike", "blockquote"],
            [
              { list: "ordered" },
              { list: "bullet" },
              { indent: "-1" },
              { indent: "+1" },
            ],
            ["link", "image"],
            ["clean"],
          ],
        }
      : fieldModules;

  const formats =
    fieldFormats === null
      ? [
          "header",
          "bold",
          "italic",
          "underline",
          "strike",
          "blockquote",
          "list",
          "bullet",
          "indent",
          "link",
          "image",
        ]
      : fieldFormats;

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
          {Quill !== null ? (
            <Quill
              theme="snow"
              modules={modules}
              formats={formats}
              // {...field}
            />
          ) : (
            <></>
          )}
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

export default QuillField;
