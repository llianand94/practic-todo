import React from "react";
import { ErrorMessage, Field, Form, Formik} from "formik";
import styles from './TodoForm.module.scss';
import todoScheme from "../../utils/validationScheme";

const onClick = ({target}) =>{console.log(target.value )}
const TodoForm = (props) => {

  return (
    <Formik initialValues={{ body: "" }}  onSubmit={props.addTasks} validationSchema={todoScheme}>
      <Form className={styles.container}>
        <Field className={styles.field} name="body" placeholder='Enter any task'/>
        <ErrorMessage className={styles.error} name="body" component="span"></ErrorMessage>
        <button type="submit">Add</button>
        <Field className={styles.selectContainer} name="filter" as="select" onChange={onClick}>
          <option value="all">All</option>
          <option value="done">Only done</option>
          <option value="delete">Only deleted</option>
        </Field>
      </Form>
    </Formik>
  );
};

export default TodoForm;
