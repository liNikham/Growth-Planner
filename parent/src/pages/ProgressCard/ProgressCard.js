import style from "./ProgressCard.module.css";
import Navbar from "../../components/Navbar/Navbar";
import { useEffect, useState } from "react";

const ProgressCard = ({ childId }) => {
  const [childStats, setChildStats] = useState(null);

  useEffect(() => {
    document.documentElement.style.setProperty(
      "--navbar-button",
      "#A390FB",
    );
  }, []);

  useEffect(() => {
    fetch(
      "http://localhost:4000/child/stats/5be45953-696f-4d1e-a8c2-accabee2b764",
    )
      .then((res) => res.json())
      .then((data) => {
        setChildStats(data.tasks);
      });
  }, []);

  return (
    <div className={style.progresscard}>
      {childStats && (
        <div className={style.wrapper}>
          <div className={style.progressReport}>
            <h1>
              {childStats[childStats.length - 1].percentile}{" "}
              percentile
            </h1>
            <p className={style.report}>
              Name of the quiz :{" "}
              {childStats[childStats.length - 1].taskName}
            </p>
            <p className={style.report}>
              Total students appeared:{" "}
              {childStats[childStats.length - 1].noOfParticipants}
            </p>
          </div>
          <div className={style.graph}>
            <div className={style.barGraph}>
              <div className={style.imgData}></div>
            </div>
            <div className={style.list}>
              <div className={style.list_items}>
                <ul className={style.col_heading}>
                  <li>Task Name</li>
                  <li>No of Participants</li>
                  <li>Percentile</li>
                </ul>
              </div>
              {childStats.map((task) => {
                return (
                  <>
                    <div className={style.container}>
                      <div className={style.box}>{task.taskName}</div>
                      <div className={style.box}>
                        {task.noOfParticipants}
                      </div>
                      <div className={style.box}>
                        {task.percentile}
                      </div>
                    </div>
                  </>
                );
              })}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProgressCard;
