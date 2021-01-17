import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import DeleteOutlinedIcon from '@material-ui/icons/DeleteOutlined';


const useStyles = makeStyles((theme) => ({
    course : {
        flexGrow: "1",
    }
}));


const Course= ({key, text,course,courses,setCourses}) => {
  const classes = useStyles();
  const deleteHandler = () => {
    setCourses(courses.filter((el) => el.id !== course.id)); 
  }

  return (
    <div className="course">
      <p className = "courseName">{text} <button onClick = {deleteHandler}><DeleteOutlinedIcon className={classes.icon}/></button> </p>
      
    </div>
  )
}
export default Course;