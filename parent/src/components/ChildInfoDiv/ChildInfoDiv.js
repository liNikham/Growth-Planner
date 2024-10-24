import styles from "./ChildInfoDiv.module.css";
import { Link } from "react-router-dom";

const ChildInfoDiv = ({ color, gender, name, ageGrp, coins }) => {
  return (
    <div className={styles.child_info_div} style={color}>
      <p className={styles.name}>{name}</p>
      <div className={styles.details_wrapper}>
        <div className={styles.div_1}>
          <p className={styles.detail}>Coins: {coins}</p>
          <p className={styles.detail}>Sex: {gender}</p>
        </div>
        <div className={styles.div_2}>
        <p className={styles.detail}>Age Group: {ageGrp}</p>
        </div>
      </div>
      <Link to="progress">
        <button className={styles.btn}>Assign Tasks</button>
      </Link>
      <Link to="percent">
        <button className={styles.btn}>View Progress</button>
      </Link>
      {gender === "Male" && (
        <img
          src={require("../../assets/_0004.svg")}
          alt=""
          className={styles.img}
        />
      )}
      {gender === "Female" && (
        <img
          src={require("../../assets/img_0011.svg")}
          alt=""
          className={styles.img2}
        />
      )}
    </div>
  );
};

export default ChildInfoDiv;
