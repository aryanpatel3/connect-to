import React, {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';



const useStyles = makeStyles((theme) => ({

}));

const Form = ({inputText, setInputText, courses, setCourses})=>{
  const classes = useStyles();
  const inputTextHandler = (e) => {
    console.log('TARGET')
    console.log(e.target.value); 
    setInputText(e.target.value); 
    console.log("INPUT TEXT")
    console.log(inputText)
  }; 

  const submitCourseHandler = (e) => {
    e.preventDefault(); 
    setCourses([
      ...courses, {text:inputText, id: Math.random()*1000}
    ]); 
    setInputText("");
  }

  return (
      <div>
          <h1>{inputText}</h1>
          <form>
            <input value = {inputText}onChange={inputTextHandler} type="text" className='courseInput'/> 
            <button onClick={submitCourseHandler} className="addCourseBtn" type="submit">
            Submit 
            </button>
          </form>
        
      </div>
  );
}
export default Form;