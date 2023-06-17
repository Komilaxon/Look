import { useRef } from "react";
import "./login.css";
export const Login = ({ login, setLogin }) => {
  let LOGIN = useRef("");
  let PASSWORD = useRef("");

  const submit = (evt) => {
    evt.preventDefault();
    LOGIN = LOGIN.current.value;
    PASSWORD = PASSWORD.current.value;
    localStorage.setItem("login",  [LOGIN, PASSWORD])
    setLogin({ LOGIN, PASSWORD });
  };
  console.log(login);
  return (
    <>
      <form onSubmit={submit} className="login_form">
        <h2 className="login_title">Login</h2>
        <div>
          <input className="login_input" ref={LOGIN} type="text" placeholder="Enter your login..."  />
        </div>
        <div>
          <input className="login_input input2"
            ref={PASSWORD}
            type="text"
            placeholder="Enter your password..."
          />
        </div>
        <button className="login_btn" type="submit">Send</button>
      </form>
    </>
  );
};
