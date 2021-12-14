import * as yup from 'yup';

const todoScheme = yup.object().shape({  
        body: yup.string().matches(/(?!^\d+$)^.+$/, 'Need to enter not only numbers').required('Please add not empty task')        
})

export default todoScheme;