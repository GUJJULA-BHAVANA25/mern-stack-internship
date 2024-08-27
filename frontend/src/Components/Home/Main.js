//importing react library from react in to this js file
import React from "react";
import { Outlet } from "react-router-dom";
//Outlet is used to render the content of nested routes.
import Header from "./Header";
import Footer from "./Footer";

//Arrow function
const Main = () => {
  return (
    <div>
      {/* Rendering the header,footer and outlet component */}
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Main;
//to use in other files.if you don't export it ,you can't use it in other files.

//rafce snippet used for generating React functional components structures quickly

//This snippet help you to create the basic structure of a funcctional component with minimal typing

/* Normal function
funtion add(a,b)
{
    return a+b;
}
   */

/*
Arrow function
const add = (a,b) => a +b;
*/

/*React router:Library in the react
That helps to manage navigation and routing within a single-page web application.IT will organise website's different page
(or)
so it is the react router that controls the url inline with the user interface
*/
