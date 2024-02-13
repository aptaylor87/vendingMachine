import React from "react";
import { Link } from 'react-router-dom'


function Donuts() {
  return (
    <div>
      <h1>MMMMMMM Donuts</h1>
      <img
        src="https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExcDJkY3A4dWxmMWd5MWpydHoxMXQwNGE3cHFxZGV0bjhubmo5eGF5aiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/SHgX30N0E60a4/giphy.gif"
        alt="Homer eating donuts"
      />
      <div><Link to="/">Go Back</Link></div>
    </div>
  );
}

export default Donuts;