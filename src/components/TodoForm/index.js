import React from "react";
import { ErrorMessage, Field, Form, Formik} from "formik";
import classNames from "classnames";
import styles from './TodoForm.module.scss';
import todoScheme from "../../utils/validationScheme";


const TodoForm = (props) => {
  const {addTasksAction, filterTasksAction} = props;
  
  return (
    <Formik initialValues={{ body: "" }}  onSubmit={addTasksAction} validationSchema={todoScheme}>
      <Form className={styles.container}>
        <Field className={styles.field} name="body" placeholder='Enter any task'/>
        <ErrorMessage className={styles.error} name="body" component="span"></ErrorMessage>
        <button type="submit">Add</button>
        <Field className={classNames(styles.field, styles.selectContainer)} name="filter" as="select" onChange={filterTasksAction}>
          <option value="all">All</option>
          <option value="done">Only done</option>
          <option value="current">Only current</option>
        </Field>
      </Form>
    </Formik>
  );
};

export default TodoForm;
