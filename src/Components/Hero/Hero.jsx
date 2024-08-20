import React from "react";
import "./Hero.css";
import profile from "../../assets/profile.jpg";

function Hero() {
  return (
    <div className="hero">
      <img className="profile_img" src={profile} alt="profile imge" />
      <h1>I'm Ankit Kumar, Full-Stack Web Developer </h1>
      <p>
        Passionate Full-Stack Web Developer adept in JavaScript, React, Node.js,
        and MongoDB, with a focus on crafting beautiful and functional websites.
        Proficient in HTML, CSS, and Bootstrap, I strive to deliver seamless
        user experiences through innovative design and industry-leading
        practices. Let's collaborate to bring your web projects to life with
        creativity and precision.
      </p>
      <div className="hero-action">
        <div className="hero connect">Contact</div>
        <div className="hero-resume">Download CV</div>
      </div>
    </div>
  );
}

export default Hero;
