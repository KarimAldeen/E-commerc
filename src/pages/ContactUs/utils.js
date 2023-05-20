import * as Yup from "yup";

const phoneRegExp = /^\+?\d+.{4,15}$/gm;
const nameRegExp = /^([^0-9]*)$/;

export const initialValues = {
  full_name: "",
  email: "",
  phone: "",
  message: "",
};

export const validationSchema = Yup.object({
  full_name: Yup.string()
    .matches(nameRegExp, "_validation.invalid_full_name")
    .required("_required.full_name"),
  email: Yup.string()
    .email("_validation.invalid_email")
    .required("_required.email"),
  phone: Yup.string()
    .matches(phoneRegExp, "_validation.invalid_phone")
    .required("_required.phone"),
  message: Yup.string().required("_required.message"),
});
