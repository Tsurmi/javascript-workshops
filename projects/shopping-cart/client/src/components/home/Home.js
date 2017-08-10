import React from 'react';
import HomeTile from "./HomeTile";

const Home = (props) => {
  return(
    <div>
    <h1>{props.title}</h1>
    <HomeTile />
    </div>
  )
}

export default Home;
