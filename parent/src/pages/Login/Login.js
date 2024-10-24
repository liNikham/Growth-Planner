import { useState, useContext } from "react";
import { useNavigate } from 'react-router-dom';
import style from "./Login.module.css";
import TokenContext from "../../context/TokenContext";

const Login = () => {
  const [email, setEmail] = useState("");
  const [pwd, setPwd] = useState("");
  const navigate = useNavigate();
  const { token, updateToken } = useContext(TokenContext);
  const handleSubmit = (e) => {
    e.preventDefault();
    fetch("http://localhost:4000/auth/parent/login", {
      method: "POST",

      body: JSON.stringify({
        "email": email,
        "password": pwd
      }),

      headers: {
        "Content-type": "application/json"
      }
    })
      .then(response => response.json())
      .then(response => {
        if (!response.error) {
          localStorage.setItem('parent-token', response.data.token);
          updateToken(response.data.token);
          console.log(response.data.token);
          navigate('/');
        }
        else {
          alert(response.error);
        }

      })
  };

  return (
    <>
      <div className={style.login}>
        <div className={style.decor}>
          <p className={style.name}>Parent WEB</p>
          <div className={style.imgContainer}>
            <img
              src={require("../../assets/Kid fly 1.svg")}
              alt=""
              className={style.img}
            />
          </div>
        </div>
        <div className={style.login_form}>
          <div className={style.form_text}>
            <p className={style.heading}>LOG IN</p>
            <p className={style.sub_heading}>
              Don’t have an account?{" "}
              <a href="/signup" className={style.link}>
                Sign up
              </a>
            </p>
          </div>
          <div className={style.form_div}>
            <form onSubmit={(e) => handleSubmit(e)}>
              <label className={style.label}>Email</label>
              <input
                className={style.field}
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <label className={style.label}>Password</label>
              <input
                className={style.field}
                type="password"
                required
                value={pwd}
                onChange={(e) => setPwd(e.target.value)}
              />
              <button className={style.btn}>LOG IN</button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
