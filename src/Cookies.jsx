import React from "react";
import { Link } from 'react-router-dom'


function Cookies() {
  return (
    <div>
      <h1>C is for COOOKIE!</h1>
      <img
        src="https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExYThhYzhydjdyZzM3OTd0ZTRrbmIyajBwamJuMzBldWtvMjFhM25heiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/xT0xeMA62E1XIlup68/giphy.gif"
        alt="Cookie Monster eating cookies"
      />
      <div><Link to="/">Go Back</Link></div>
      
    </div>
  );
}

export default Cookies;