import { data } from "./data";
import { useState, useEffect } from "react";
// import useNewListItems from "./useNewListItems";
export const useSelect = () => {
  // destructuring individual object items from data object
  //   const { region, destination, serviceType } = data;
  const { postRegion, postDestination, postServiceType } = data;

  // destructuring needed properties from the objects from 12 - SEE COMMENTS FOR id naming

  // useNewItems //
  const { regionItems, regionId } = postRegion;
  //   const { destinationItems, destinationId } = postDestination;
  const {
    serviceTypesItems,
    servicesTypesItemsForDomestic,
    servicesTypesItemsForInternational,
  } = postServiceType;

  const [index] = useState(0);

  const [currentRegion] = useState(regionItems[index].itemValue);

  const [serviceTypeList, setServiceTypeList] = useState(serviceTypesItems);
  console.log("serviceTypeList from useNew = ", serviceTypeList);
  console.log("initialList from useNew = ", serviceTypesItems);

  const getNewItems = () => {
    if (index === 1) {
      setServiceTypeList(servicesTypesItemsForDomestic);
    } else if (index === 2) {
      setServiceTypesList(servicesTypesItemsForInternational);
    } else {
      setServiceTypeList(serviceTypesItems);
    }
  };

  useEffect(() => {
    getNewItems();
  }, [currentRegion]);
  // useNewItems //

  const { destinationItems, destinationId } = postDestination;
  const { serviceTypeId } = postServiceType;

  //   const { serviceTypeList, currentRegion } = useNewListItems();
  console.log("serviceTypeList from useSelect = ", serviceTypeList);
  // values at initial load
  const initialValues = {
    region: currentRegion,
    serviceType: serviceTypeList[0].itemValue,
    destination: destinationItems[0].itemValue,
  };

  const [choice, setChoice] = useState(initialValues);

  const { regionChoice, serviceChoice, destinationChoice } = choice;

  // custom function to handle select option changes
  const onChange = (e) => {
    setChoice({
      ...choice,
      [e.target.id]: e.target.value,
    });
  };

  // reset to initial values
  const resetChoicesValues = () => {
    setChoice(initialValues);
  };

  // data for selectBoxes
  const selectBoxList = [
    { items: regionItems, currentChoice: regionChoice, id: regionId },
    {
      items: serviceTypeList,
      currentChoice: serviceChoice,
      id: serviceTypeId,
    },
    {
      items: destinationItems,
      currentChoice: destinationChoice,
      id: destinationId,
    },
  ];

  // An array of the items selected to be used as identifiers to be filtered from global jobs data
  const filterParameters = selectBoxList.map((item) => {
    return { id: item.id, choice: item.currentChoice };
  });

  return {
    selectBoxList,
    onChange,
    resetChoicesValues,
    choice,
    initialValues,
    filterParameters,
  };
};
