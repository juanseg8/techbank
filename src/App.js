
import './App.css';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Main from "../src/components/Main/index"
import Footer from "../src/components/Footer"
import SingIn from './components/SignIn';
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

const router = createBrowserRouter([
  {
    path: '/signin',
    element: <SingIn />
  },

  {
    path: '/',
    element:
      <>
        <Main />
        <Footer />
      </>
  }
])


function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );

}
export default App;
