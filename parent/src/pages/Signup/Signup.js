import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import style from "./Signup.module.css";

const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [pwd, setPwd] = useState("");
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    fetch('http://localhost:4000/auth/parent/register', {

      method: "POST",

      body: JSON.stringify({
        "name": name,
        "email": email,
        "password": pwd
      }),

      headers: {
        "Content-type": "application/json"
      }
    })
      .then(response => response.json())
      .then(response => {
        console.log(response)
        if (!response.error)
          navigate('/login');
        else {
          alert(response.error);
        }

      })
  };

  return (
    <>
      <div className={style.signup}>
        <div className={style.decor}>
          <p className={style.name}>Parent WEB</p>
          <img

            alt="#"
            className={style.img}
          />
        </div>
        <div className={style.signup_form}>
          <div className={style.form_text}>
            <p className={style.heading}>SIGN UP</p>
            <p className={style.sub_heading}>
              Have an account?{" "}
              <a href="#" className={style.link}>
                Login
              </a>
            </p>
          </div>
          <div className={style.form_div}>
            <form onSubmit={(e) => handleSubmit(e)}>
              <label className={style.label}>Name</label>
              <input
                className={style.field}
                type="text"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
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
              <button className={style.btn}>SIGN UP</button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Signup;
