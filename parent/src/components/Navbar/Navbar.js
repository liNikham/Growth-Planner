import style from "./Navbar.module.css";
import { NavLink, useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  return (
    <div className={style.navbar}>
      <div className={style.left_div}>
        <ul className={style.menu}>
          <li className={style.item}>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? "active item_button" : "item_button"
              }
            >
              HOME
            </NavLink>
          </li>
          {/* <li className={style.item}>
                        <div className={style.item_button} tabIndex="2">COMMUNITY</div>
                    </li> */}
                          <li className={style.item}>
            <NavLink
              to="meeting"
              className={({ isActive }) =>
                isActive ? "active item_button" : "item_button"
              }
            >
              Appointment
            </NavLink>
          </li>
        </ul>
      </div>
      <div className={`${style.right_div} item_button`} onClick={()=>{localStorage.clear();
      navigate("/login")}}>
         Logout
      </div>
    </div>
  );
};

export default Navbar;
