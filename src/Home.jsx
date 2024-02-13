import React from "react";
import { Link } from 'react-router-dom'

function Home() {
  return (
    <div>
      <h1>Welcome to the Vending Machine</h1>
      <img
        src="https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExcjN0cjNweTJhZzdycjBpb29yMTRtYTNkZzN5OHpweWRhYnJxMmJmdiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/LCrpjdvCARfrVaX2qS/giphy.gif"
        alt="Welcome to the vending machine"
      />
      <div><Link to="/Donuts">Donuts</Link></div>
      <div><Link to="/Cookies">Cookies</Link></div>
      <div><Link to="/Popcorn">Popcorn</Link></div>
    </div>
  );
}

export default Home;
