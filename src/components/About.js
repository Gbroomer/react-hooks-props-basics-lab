import React from "react";
import Links from './Links';

function About(props) {
  return (
    <div id="about">
      <h2>About Me</h2>
      <p>Put the bio in here</p>
      <img src="https://i.imgur.com/mV8PQxj.gif" alt="I made this" />
      {props.bio !== "" ? <p>{props.bio}</p> : null}
      <Links {...props.links} />
    </div>
  );
}

export default About;
