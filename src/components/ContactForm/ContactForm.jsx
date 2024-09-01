import { Field, Formik, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useDispatch } from "react-redux";
import { addContact } from "../../redux/contacts/operations";
import s from "./ContactForm.module.css";

const ContactForm = () => {
  const dispatch = useDispatch();

  const registerSchema = Yup.object({
    name: Yup.string()
      .required("This field is required")
      .min(3, "Name must be more than 3 chars")
      .max(50, "Name must be less than 50 chars"),

    number: Yup.string()
      .required("This field is required")
      .matches(/^\d+$/, "Number must contain only digits")
      .min(3, "Number must be more than 3 chars")
      .max(50, "Number must be less than 50 chars"),
  });

  const initialValues = {
    name: "",
    number: "",
  };

  const handleSubmit = (values, actions) => {
    dispatch(addContact({ id: Date.now().toString(), ...values }));
    actions.resetForm();
  };

  return (
    <div>
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={registerSchema}
      >
        <Form className={s.form}>
          <label className={s.label}>
            <span className={s.span}>Name:</span>
            <Field name="name" className={s.input} />
            <ErrorMessage className={s.error} name="name" component="span" />
          </label>
          <label className={s.label}>
            <span className={s.span}>Number:</span>
            <Field className={s.input} name="number" />
            <ErrorMessage className={s.error} name="number" component="span" />
          </label>
          <button className={s.button} type="submit">
            Add Contact
          </button>
        </Form>
      </Formik>
    </div>
  );
};

export default ContactForm;
