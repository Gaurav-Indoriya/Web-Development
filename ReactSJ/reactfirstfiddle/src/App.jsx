import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Mainlayout from './Layouts/Mainlayout';
import Home from './component/Home';
import About from './component/About';
import Brand from './component/Brand';
import OurTeam from './component/OurTeam';
import PressRelease from './component/PressRelease';
import Contact from './component/Contact';
import Careers from './component/Careers';

const AppRouter = createBrowserRouter([
{
  path: "/",
  element: <Mainlayout />,
  children:[
    {
      path: "/",
      element: <Home/>,
    },
    {
      path: "About",
      element: <About/>,
    },
    {
      path: "Brand",
      element: <Brand/>,
    },
    {
      path: "OurTeam",
      element: <OurTeam/>
    },
    {
      path: "PressRelease",
      element: <PressRelease/>
    },
    {
      path: "Contact",
      element: <Contact/>
    },
    {
      path: "Careers",
      element: <Careers/>
    }
  ]
}
]);

function App() {
  return (
    <>
      <RouterProvider router={AppRouter} />
    </>
  )
}

export default App
