import { useContext } from "react";
import { Link, Outlet } from "react-router-dom";

import classes from "./NavBar.module.css";

import Container from "@components/Container/Container";

import { ReactComponent as UserIcon } from "@assets/svg/user-icon.svg";

import { AuthContext } from "@context";

const NavBar = () => {
  const { setIsAuth } = useContext(AuthContext);

  const logout = () => {
    setIsAuth(false);
    localStorage.removeItem("auth");
  };

  const links = [
    {
      url: "/about",
      text: "About us",
    },
    {
      url: "/posts",
      text: "Posts",
    },
  ];

  return (
    <div className={classes.navbar}>
      <Container>
        <div className={classes["navbar-inner"]}>
          <div className={classes["navbar-links"]}>
            {links.map((link) => (
              <Link
                className={classes["navbar-link"]}
                to={link.url}
                key={link.url}
              >
                {link.text}
              </Link>
            ))}
          </div>
          <button
            type="button"
            className={classes["logout-button"]}
            onClick={logout}
          >
            <UserIcon></UserIcon>
            <span>Log out</span>
          </button>
          <Outlet></Outlet>
        </div>
      </Container>
    </div>
  );
};

export default NavBar;
