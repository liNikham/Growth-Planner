import Navbar from "../../components/Navbar/Navbar";
import style from "./Progress.module.css";
import { useEffect } from "react";

const Progress = () => {
  useEffect(() => {
    document.documentElement.style.setProperty(
      "--navbar-button",
      "#A390FB",
    );
  }, []);

  return (
    <div className={style.tasks_progress}>
      <div className={style.assign_tasks}>
        <p className={style.heading1}>Assign tasks:</p>
        <div className={style.wrapper}>
          <div className={style.assigned}>
            <p className={style.heading2}>Assigned </p>
            <div className={style.content_wrapper}>
              <div className={style.content}>
                <div className={style.task}>
                  <p className={style.task_name}>VNDL BAEOJE</p>
                  <div className={style.task_status}>
                    <p className={style.status}>Assigned</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={style.cognitive}>
            <p className={style.heading2}>cognitive</p>
            <div className={style.content_wrapper}>
              <div className={style.content}>
                <div className={style.task}>
                  <p className={style.task_name}>VNDL BAEOJE</p>
                  <div className={style.task_status}>
                    <p className={style.status}>Assign</p>
                  </div>
                </div>
                <div className={style.task}>
                  <p className={style.task_name}>VNDL BAEOJE</p>
                  <div className={style.task_status}>
                    <p className={style.status}>Assign</p>
                  </div>
                </div>
                <div className={style.task}>
                  <p className={style.task_name}>VNDL BAEOJE</p>
                  <div className={style.task_status}>
                    <p className={style.status}>Assign</p>
                  </div>
                </div>
                <div className={style.task}>
                  <p className={style.task_name}>VNDL BAEOJE</p>
                  <div className={style.task_status}>
                    <p className={style.status}>Assign</p>
                  </div>
                </div>
                <div className={style.task}>
                  <p className={style.task_name}>VNDL BAEOJE</p>
                  <div className={style.task_status}>
                    <p className={style.status}>Assign</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={style.psychomotor}>
            <p className={style.heading2}>psychomotor</p>
            <div className={style.content_wrapper}>
              <div className={style.content}>
                <div className={style.task}>
                  <p className={style.task_name}>VNDL BAEOJE</p>
                  <div className={style.task_status}>
                    <p className={style.status}>Assign</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
    
            <div className={style.galleryWrapper}>
               <div className={style.heading}> <p >VIRTUAL GALLERY TO CHERISH YOUR MEMORIES</p></div>
                <div className={style.imgWrapper}>
                <div className={style.img_div}>
                    <img
                    src = {require("../../assets/galleryimg1.jpeg")}
                    alt=""
                    className={style.galleryImg}/>
                </div>
                <div className={style.img_div}>
                    <img
                    src = {require("../../assets/galleryimg2.jpeg")}
                    alt =""
                    className={style.galleryImg}/>
                </div>
                </div>
            </div>
        </div>
    
    
  );
};

export default Progress;
