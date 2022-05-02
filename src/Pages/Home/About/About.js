import React, { Fragment } from "react";
import aboutMe from "../../../images/jaed.png";
import "./About.css";

const About = () => {
  return (
    <Fragment>
      <div className="about-me mx-0 text-center row">
        <div className=" col-md-6">
          <img width={400} src={aboutMe} alt="" />
        </div>
        <div className=" text-center text-md-start col-md-6">
          <h1>ABOUT ME</h1>
          <h3>Ashraful Hider Jaed</h3>
          <p className="p-color">Student of Programming Hero</p>
          <p>
            My goal for next 1 year is to become a{" "}
            <span className="dev-color" >Full Stack Web Developer</span> for that I am preparing myself. I will apply for internship or job after
            completing the programming hero course in the next 2 months and
            for this i'm learning core concepts of front end techonologies. Besides, I do problem solving based on data structure and algorithms. This might increase my thinking capabilities Insha Allah.
          </p>
        </div>
      </div>
    </Fragment>
  );
};

export default About;
