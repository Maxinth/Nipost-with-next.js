import { data } from "./data";
import { useState } from "react";

export const useSelect = () => {
  // destructuring individual object items from data object
  const { region, destination, serviceType } = data;

  // destructuring needed properties from the objects from 12 - SEE COMMENTS FOR id naming

  const { regionItems, regionId } = region;
  const { destinationItems, destinationId } = destination;
  const { serviceTypesItems, serviceTypeId } = serviceType;

  // values at initial load
  const initialValues = {
    regionChoice: regionItems[0].itemValue,
    serviceChoice: serviceTypesItems[0].itemValue,
    destinationChoice: destinationItems[0].itemValue,
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
      items: serviceTypesItems,
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
