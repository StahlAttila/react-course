import { useContext, useRef } from "react";
import { useHistory } from "react-router";
import AuthContext from "../../store/auth-context";
import classes from "./ProfileForm.module.css";

const API_KEY = "AIzaSyAGF5rIfoI1UZpvhyPS3In7lt3g0glMqpA";

const ProfileForm = () => {
  const passwordInputRef = useRef();
  const authCtx = useContext(AuthContext);
  const history = useHistory();

  const submitHandler = (event) => {
    event.preventDefault();

    const eneteredPassword = passwordInputRef.current.value;

    fetch(
      "https://identitytoolkit.googleapis.com/v1/accounts:update?key=" +
        API_KEY,
      {
        method: "POST",
        body: JSON.stringify({
          idToken: authCtx.token,
          password: eneteredPassword,
          returnSecureToken: true,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      }
    ).then((res) => {
      if (res.ok) {
        return res.json();
      } else {
        return res.json().then((data) => {
          //show error modal
          let errorMessage = "Authentication failed!";
          if (data.error) {
            errorMessage = data.error.message;
          }
          throw new Error(errorMessage);
        });
      }
    }).then(data => {
      console.log(data);
      history.push("/");
    }).catch(err => {
      alert(err.message)
    });
  };

  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <div className={classes.control}>
        <label htmlFor="new-password">New Password</label>
        <input ref={passwordInputRef} type="password" id="new-password" />
      </div>
      <div className={classes.action}>
        <button>Change Password</button>
      </div>
    </form>
  );
};

export default ProfileForm;
