import React from "react";
import { Link } from 'react-router-dom'

function Popcorn() {
  return (
    <div>
      <h1>Popcorn!</h1>
      <img
        src="https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExbmRsMjhweWM3c3FtN3Ixcjdpd3F0OTJiYWsyaWpvZXdzdXd1anExeCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/11vsrRFqhjOcKI/giphy.gif"
        alt="George eating Popcorn."
      />
      <div><Link to="/">Go Back</Link></div>
    </div>
  );
}

export default Popcorn;