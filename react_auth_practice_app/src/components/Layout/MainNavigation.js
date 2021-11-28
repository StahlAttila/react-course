import { useContext } from "react";
import { useHistory } from "react-router";
import { Link } from "react-router-dom";
import AuthContext from "../../store/auth-context";

import classes from "./MainNavigation.module.css";

const MainNavigation = () => {
  const authCtx = useContext(AuthContext);
  const history = useHistory();

  let navBarContent;

  const logoutHandler = () => {
    authCtx.logout();
    // history.replace("/auth");
  }

  if (authCtx.isLoggedIn) {
    navBarContent = (
      <ul>
        <li>
          <Link to="/profile">Profile</Link>
        </li>
        <li>
          <button onClick={logoutHandler}>Logout</button>
        </li>
      </ul>
    );
  } else {
    navBarContent = (
      <ul>
        <li>
          <Link to="/auth">Login</Link>
        </li>
      </ul>
    );
  }

  return (
    <header className={classes.header}>
      <Link to="/">
        <div className={classes.logo}>React Auth</div>
      </Link>
      <nav>
        {navBarContent}
      </nav>
    </header>
  );
};

export default MainNavigation;
