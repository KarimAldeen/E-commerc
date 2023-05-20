import React from "react";

import { useTranslation } from "react-i18next";
import classes from "./EmailForm.module.scss";

import { Formik, Form as FormikForm } from "formik";
import { initialValues, validationSchema } from "./utils";

import { toast } from "react-toastify";
import PulseLoader from "react-spinners/PulseLoader";
import { useEmailJS } from "../../Extensions/email/useEmailSend";
import { TextField } from "../../components/TextField/TextField";

const EmailForm = () => {
  const { t } = useTranslation();

  const resetButton = React.useRef(null);
  const { sendEmail, isSuccess, isLoading, isFailed } = useEmailJS();

  React.useEffect(() => {
    if (isSuccess) {
      resetButton.current.click();
      toast.success(t("email_sent_successfully"));
    }
    //eslint-disable-next-line
  }, [isSuccess]);

  React.useEffect(() => {
    if (isFailed) {
      toast.error(t("error_in_sending_email"));
    }
    //eslint-disable-next-line
  }, [isFailed]);

  return (
    <Formik
      onSubmit={sendEmail}
      initialValues={initialValues}
      validationSchema={validationSchema}
    >
      {(formik) => {
        return (
          <FormikForm className={classes.container}>
            <h2 className={classes.title}>{t("get_in_touch")}</h2>
            <TextField
              name="full_name"
              type="text"
              placeholder={t("full_name")}
            />
            <TextField name="email" placeholder={t("email")} type="text" />
            <TextField name="phone" placeholder={t("phone")} type="text" />

            <TextField
              name="message"
              placeholder={t("message")}
              component="textarea"
              rows="7"
              style={{ height: "auto" }}
            />

            <button
              disabled={isLoading}
              className={classes.button}
              type="submit"
            >
              <p>
                {isLoading ? (
                  <PulseLoader size={10} color="#fff" />
                ) : (
                  <>{t("send")}</>
                )}
              </p>
            </button>

            <button
              ref={resetButton}
              type="reset"
              style={{ display: "none" }}
            ></button>
          </FormikForm>
        );
      }}
    </Formik>
  );
};

export default EmailForm;
