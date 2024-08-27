import React from "react";
import Search from "./Search";
import Filter from "./Filter";
import { Link} from "react-router-dom";
import { useDispatch } from "react-redux";
import { propertyAction } from "../../Store/Property/property-slice";
import { getAllProperties } from "../../Store/Property/property-action";

const Header = () => {
  const dispatch= useDispatch();
  const allproperties = () =>{
    dispatch(propertyAction.updateSearchParams({}));
    dispatch(getAllProperties());
  };

  return (
    <>
        <nav className="header row sticky-top">

      <Link to="/">
        <img 
          src="/assets/logo.png" 
          alt="logo" 
          className="logo"
          onClick={allproperties}
        />
      </Link>
          
       
        <div className="search_filter">
            <Search />
            <Filter />
        </div>
 
        <span className="material-symbols-outlined web_logo ">account_circle</span>
        </nav>
    </>
  );
};

export default Header;