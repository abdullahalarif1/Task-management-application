// import { useState } from 'react'
import { Outlet } from 'react-router-dom';
import './App.css'
import NavBar from './Shared/NavBar';

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
     <NavBar></NavBar>
     <Outlet></Outlet>
    </>
  );
}

export default App
