import { useContext, FormEvent } from "react";

import { AuthContext } from "@context";

import UIInput from "@UI/input/UIInput";
import UIButton from "@UI/button/UIButton";
import Title from "@components/Title/Title";

import classes from "./LoginForm.module.css";

const LoginForm = () => {
  const { setIsAuth } = useContext(AuthContext);

  const login = (evt: FormEvent) => {
    evt.preventDefault();
    setIsAuth(true);
    localStorage.setItem("auth", "true");
  };

  return (
    <div className={classes["login-form"]}>
      <Title className={classes["login-form-title"]}>Sign in</Title>
      <form className={classes["form"]} onSubmit={login}>
        <UIInput type="text" placeholder="Username"></UIInput>
        <UIInput type="password" placeholder="Password"></UIInput>
        <UIButton>Sign in</UIButton>
      </form>
    </div>
  );
};

export default LoginForm;
