import "./App.css";

//Importing necessary components and functions from the react-router-dom library for routing.
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

import Main from "./Components/Home/Main";
import PropertyList from "./Components/Home/PropertyList";
import PropertyDetails from "./Components/PropertyDetails/PropertyDetails";

function App() {
  //manages the routing configuration for the application
  const router = createBrowserRouter(
    //creates routes from the elements passed to it
    createRoutesFromElements(
      //defines a Route componnent that mathches all paths "/" and renders the Main componnent
      //exact properties ensure that the route matches exactly what you gave in path
      <Route path="/" element={<Main />} id="main" exact>
         <Route id="home" index element={<PropertyList />} exact/>
         <Route 
           element={<PropertyDetails />}
           id="PropertyDetails"
           path="propertylist/:id"
           exact
         />
      </Route>
    )
  );
  return (
    <div className="App">
      {/* this ensures that the routing functionality is available throughout the application */}
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
