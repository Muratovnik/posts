import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

import About from "../pages/About";
import Posts from "../pages/Posts";
import PostIdPage from "../pages/PostIdPage";
import Login from "../pages/Login";

export const privateRoutes = [
  { path: "/about", element: <About></About> },
  { path: "/posts", element: <Posts></Posts> },
  { path: "/posts/:id", element: <PostIdPage></PostIdPage> },
  { path: "*", element: <Navigate to="/posts" replace /> },
];

export const publicRoutes = [
  { path: "/login", element: <Login></Login> },
  { path: "*", element: <Navigate to="/login" replace /> },
];
