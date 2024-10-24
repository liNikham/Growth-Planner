import { useEffect } from "react";
import Navbar from "../../components/Navbar/Navbar";
import style from "./About.module.css";

const About = () => {
  useEffect(() => {
    document.documentElement.style.setProperty(
      "--navbar-button",
      "#A390FB",
    );
  }, []);

  return (
    <>
      <div className={style.about}>
        <div className={style.navbar}>{/* <Navbar /> */}</div>
        <div className={style.txt}>
          <h1 className={style.heading}>About :</h1>
          <p className={style.abtxt}>
            Learn and grow with celestial kids…. A smart learning
            application for parents to monitor the growth of their
            children in cognitive, psychomotor, and affective domains.
            It assists parents with a complete guide that ensures the
            necessary learning at an early age. The app is provided
            with amazing tasks, games and AI guide yoga for children
            to perform which could be tracked and monitored by their
            parents.
          </p>
        </div>

        <div className={style.img_container}>
          <div className={style.img_wrap}>
            <img
              src={require("../../assets/Saly-17.svg")}
              alt=" "
              className={style.img}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
