import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './style/global.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import LoginPage from './pages/Login.jsx';
import UsersPage from './pages/Users.jsx';
import BookPage from './pages/Book.jsx';
import TodoApp from './pages/TodoApp.jsx';
import ErrorPage from './pages/Error.jsx';
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children:
      [
        {
          index: true,
          element: <TodoApp />
        },
        {
          path: "/users",
          element: <UsersPage />
        },
        {
          path: "/book",
          element: <BookPage />
        }
      ]
  },
  {
    path: "login",
    element: <LoginPage></LoginPage>
  },

]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
