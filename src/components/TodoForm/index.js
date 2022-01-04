import React from "react";
import { ErrorMessage, Field, Form, Formik} from "formik";
import styles from './TodoForm.module.scss';
import todoScheme from "../../utils/validationScheme";


const TodoForm = (props) => {
  const {addTasksAction} = props;
  
  return (
    <Formik initialValues={{ body: "" }}  onSubmit={addTasksAction} validationSchema={todoScheme}>
      <Form className={styles.container}>
        <Field className={styles.field} name="body" placeholder='Enter any task'/>
        <ErrorMessage className={styles.error} name="body" component="span"/>
        <button className={styles.btn} type="submit">Add</button>
      </Form>
    </Formik>
  );
};

export default TodoForm;
