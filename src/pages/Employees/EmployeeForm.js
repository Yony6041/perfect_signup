import React, {useState, useEffect} from 'react'
import {Grid, TextField, makeStyles} from '@material-ui/core';



const useStyles = makeStyles(theme =>({
  root: {
    '& .MUIFormControl-root':{
      width: '80%',
      margin: theme.spacing(1)
    }
  }
}));
const initialFValues = {
  id:0,
  fullName:'',
  email:'',
  mobile:'',
  city:'',
  gender:'male',
  departmentId:'',
  hireDate: new Date(),
  isPermanent:false,
}



function EmployeeForm() {
  const [values, setValues] = useState(initialFValues);
  const classes = useStyles();
  
  useEffect(() => {
    console.log('something is changing!');
  }, [values]);

  const handleInputChange = e => {
    // Here we grab variables from the target that triggered the event.
    const {name, value } = e.target
    setValues({
      ...values,
      [name]:value
    })
  }
  return (
    <form className={classes.root}>
      <Grid container>
        <Grid item xs={6}>
        <TextField
          variant="outlined" 
          label="Full Name"
          name='fullName'
          value={values.fullName}
          onChange={handleInputChange}  
          />
          <TextField
            variant="outlined" 
            label="Email"
            name= "email"
            value={values.email}
            onChange={handleInputChange}
            />
        </Grid>
      </Grid>
    </form>
  )
}

export default EmployeeForm;
