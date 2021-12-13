import * as yup from 'yup';

const todoScheme = yup.object().shape({  
        body: yup.string().required('Please add a noempty task')        
})

export default todoScheme;