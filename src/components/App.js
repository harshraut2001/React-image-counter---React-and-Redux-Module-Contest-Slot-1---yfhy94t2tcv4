import React, { useState } from 'react'
import '../styles/App.css';
import star from '../star.png'
const App = () => {
  const [dimensions,setDimenstions]=useState({width:300,height:300});
  const increaseSize=()=>{
    setDimenstions({
      width:dimensions.width+2,
      height:dimensions.height+2,
    });
  };
  return (
    <div id="main">
      <img src={star}  height={dimensions.height} width={dimensions.width} onClick={increaseSize} />
    </div>
  )
}


export default App;
