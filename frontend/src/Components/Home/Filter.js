import React, { useEffect, useState } from "react";
import FilterModel from "./FilterModel";
import { useDispatch } from "react-redux";
import { getAllProperties } from "../../Store/Property/property-action";
import { propertyAction } from "../../Store/Property/property-slice";


const Filter = () => {
  //state for controlling modal visability
  const [isModalOpen, setIsModalOpen] = useState(false);
  //state for storing selected filters
  const [selectedFilters, setSlectedFilters] = useState({});
  const dispatch = useDispatch();
  useEffect(() =>{
      dispatch(propertyAction.updateSearchParams(selectedFilters));
      dispatch(getAllProperties());
  }, [selectedFilters, dispatch]);

  //function to handel opening the modal/popupWindow
  const handleOpenModal = () => {
    setIsModalOpen(true); //sets isModalOpen to true to ipen the modal
  };

  //function to handle closing the modal
  const handleCloseModal = () => {
    setIsModalOpen(false); //set isModalOpen to false to close the modal
  };

  //Function to handle changes in filters
  const handleFilterChange = (filterName, value) => {
    //update the selected filters with the new values
    setSlectedFilters((prevFilters) => ({
      ...prevFilters,
      [filterName]: value,
    }));
  };

  return (
    <>
      {/* Click event to open the modal*/}
      {/*fragment tag(React)  -{" "} */}
      <span class="material-symbols-outlined filter" onClick={handleOpenModal}>
        tune
      </span>
      {isModalOpen && (
        <FilterModel
          selectedFilters={selectedFilters}
          onFilterChange={handleFilterChange}
          onClose={handleCloseModal}
        />
      )}
    </>
  );
};

export default Filter;
