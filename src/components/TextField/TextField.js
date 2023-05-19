import React from "react";
import classes from "./TextFiled.module.scss";
import { ErrorMessage, useField, Field } from "formik";


import { useTranslation } from "react-i18next";

export const TextField = (props) => {
  const [field] = useField(props);
  const { t } = useTranslation();

  return (
    <div style={{width:"100%"}}>
      <div className={classes.wrapper}>
        <Field autoComplete="new-password" className={classes.input} {...props} {...field} />
      </div>
      <ErrorMessage name={field.name}>
          {(msg) => <span className={classes.error_message}>{t(msg)}</span>}
        </ErrorMessage>
    </div>
  );
};
