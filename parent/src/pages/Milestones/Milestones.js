import style from "./Milestones.module.css";
import Navbar from "../../components/Navbar/Navbar";
import { useEffect, useState } from "react";

const Milestones = () => {
  const [formIsOpen, setFormIsOpen] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  useEffect(() => {
    document.documentElement.style.setProperty(
      "--navbar-button",
      "#A390FB",
    );
  }, []);

  return (
    <div className={style.milestone}>
      <div className={style.navbar}>
        <Navbar />
      </div>
      <div className={style.heading}>
        <p>Milestone Chart</p>
      </div>
      <div className={style.wrapper}>
        <div className={style.imgDiv}>
          <img
            className={style.img}
            src={require("../../assets/Cartoon Giraffe 1.svg")}
            alt=""
          />
        </div>
        <div className={style.msChart}>
          <div className={style.msform}>
            <form onSubmit={(e) => handleSubmit(e)}>
              <p className={style.form_heading}>
                Check the Milestones
              </p>
              <ul className={style.ms_list}>
                <li>
                  <input
                    type="checkbox"
                    id="ms1"
                    name="ms1"
                    value="walk"
                    className={style.ms_check}
                  />
                  <label className={style.ms_name}>
                    kid can walk
                  </label>
                </li>
                <li>
                  <input
                    type="checkbox"
                    id="ms2"
                    name="ms2"
                    value="talk"
                    className={style.ms_check}
                  />
                  <label className={style.ms_name}>
                    kid can talk
                  </label>
                </li>
                <li>
                  <input
                    type="checkbox"
                    id="ms3"
                    name="ms3"
                    value="sit"
                    className={style.ms_check}
                  />
                  <label className={style.ms_name}>kid can sit</label>
                </li>
                <li>
                  <input
                    type="checkbox"
                    id="ms4"
                    name="ms4"
                    value="eat"
                    className={style.ms_check}
                  />
                  <label className={style.ms_name}>kid can eat</label>
                </li>
              </ul>
              <button>
                Save
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Milestones;
