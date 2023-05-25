import React from "react";
import { image } from "../data/data";

function About() {
  return (
  <div>
    <h2>About Me</h2>
    <p>I love React Web Development. It Makes life much Easier</p>
    <img src={image} alt="I made this" />
  </div>);
}

export default About;
