import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { CssBaseline } from '@material-ui/core';
import Course from './Course';

const useStyles = makeStyles((theme) => ({

}));


const FormElement= ({courses, setCourses}) => {
  const classes = useStyles();

  return (
    <div className="courseContainer">
      <ul className = "courseList">
        {courses.map(course =>(
          <Course key = {course.id} text ={course.text} course = {course}  courses={courses} setCourses = {setCourses} />
        ))}
      </ul>
    </div>
  )
}
export default FormElement;