import React from "react";
import classes from "./FormsConrtols.module.scss";

const FormControl = ({ input, meta, children, ...props }) => {
  const hasError = meta.touched && meta.error;

  return (
    <div
      className={classes.formControl + " " + (hasError ? classes.error : "")}
    >
      <div>{children}</div>
      {hasError && <span>{meta.error}</span>}
    </div>
  );
};
export const Textarea = (props) => {
  const { input, meta, element, ...restProps } = props;
  return (
    <FormControl {...props}>
      <textarea {...input} {...restProps} />
    </FormControl>
  );
};

export const Input = ({ input, meta, ...props }) => {
  const hasError = meta.touched && meta.error;

  return (
    <div
      className={classes.formControl + " " + (hasError ? classes.error : "")}
    >
      <div>
        <input {...input} {...props} />
      </div>
      {hasError && <span>{meta.error}</span>}
    </div>
  );
};
