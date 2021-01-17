import React, {useState} from 'react';
import Form from './Form';
import FormElement from './FormElement';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({

}));

function CourseInput() {
    const classes = useStyles();
    const [inputText, setInputText] = useState(""); 
    const [courses, setCourses] = useState([]); 

    return (
        <div>
            <p>Making the Form</p>
            <Form  inputText = {inputText} courses = {courses} setCourses = {setCourses} setInputText = {setInputText}/> 
            <FormElement courses={courses} setCourses = {setCourses}/>
        </div> 
    );
  }
  export default CourseInput;