import { createContext } from "react";

type ContextOptions = {
  isAuth: boolean,
  setIsAuth: React.Dispatch<React.SetStateAction<boolean>>,
  isLoading: boolean,
};

export const AuthContext = createContext({} as ContextOptions);
