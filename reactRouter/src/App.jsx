import { useState } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import About from './about';
import Home from './home';
import Navbar from './Navbar';

function App() {
  const [count, setCount] = useState(0);
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Navbar />
    },
    {
      path: '/about',
      element: <About />
    },
    {
      path: '/',
      element: <Home />
    },

  ]);

  return (
    <>
   
    <RouterProvider router={router}>
     <Navbar />
    </RouterProvider>

    
    </>
    
  );
}

export default App;
