import React from "react";
import { ErrorMessage, Field, Form, Formik} from "formik";
import styles from './TodoForm.module.scss';
import todoScheme from "../../utils/validationScheme";

const TodoForm = (props) => {

  return (
    <Formik initialValues={{ body: "" }} onSubmit={props.addTasks} validationSchema={todoScheme}>
      <Form className={styles.container}>
        <Field className={styles.field} name="body" placeholder='Enter anyone task'/>
        <ErrorMessage className={styles.error} name="body" component="span"></ErrorMessage>
        <button type="submit">Add</button>
      </Form>
    </Formik>
  );
};

export default TodoForm;
