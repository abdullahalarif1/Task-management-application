// import { useState } from 'react'
import { Outlet } from 'react-router-dom';
import './App.css'
import NavBar from './Shared/NavBar';
import { ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <NavBar></NavBar>
      <Outlet></Outlet>
      <ToastContainer />
    </>
  );
}

export default App
