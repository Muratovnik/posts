import React, { useState, useEffect } from "react";

import "@styles/App.css";

import NavBar from "./components/UI/NavBar/NavBar";
import AppRouter from "./components/AppRouter";

import { AuthContext } from "./context/index";

function App() {
  const [isAuth, setIsAuth] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (localStorage.getItem("auth")) {
      setIsAuth(true);
      localStorage.setItem("auth", "true");
    }
    setIsLoading(false);
  }, []);

  return (
    <AuthContext.Provider
      value={{
        isAuth,
        setIsAuth,
        isLoading,
      }}
    >
      <div className="App">
        <NavBar></NavBar>
        <AppRouter></AppRouter>
      </div>
    </AuthContext.Provider>
  );
}

export default App;
