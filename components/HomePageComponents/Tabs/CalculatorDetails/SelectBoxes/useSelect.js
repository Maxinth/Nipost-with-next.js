import { data } from "./data";
import { useState, useEffect } from "react";
import { getNewServiceItems } from "./getNewOptions";
export const useSelect = () => {
  // TRY EXPORTIN ALL FROM A SEPARTE FILE
  const { postRegion, postDestination, postServiceType } = data;
  const { regionItems, regionId } = postRegion;

  const { serviceTypesItems } = postServiceType;
  const { destinationItems, destinationId } = postDestination;

  // TRY EXPORTIN ALL FROM A SEPARTE FILE

  // state to change the service selectboxes options Values based on region
  const [currentRegion, setCurrentRegion] = useState(regionItems[0].itemValue);
  const [serviceTypeList, setServiceTypeList] = useState(serviceTypesItems);

  const { serviceTypeId } = postServiceType;

  // values at initial load
  const initialValues = {
    region: currentRegion,
    serviceType: serviceTypeList[0].itemValue,
    destination: destinationItems[0].itemValue,
  };

  const [choice, setChoice] = useState(initialValues);
  // custom function to handle select option changes
  const onChange = (e) => {
    setChoice({
      ...choice,
      [e.target.id]: e.target.value,
    });
  };

  const { region, serviceType, destination } = choice;

  // useEffect to change services options List values every time the selected region changes
  useEffect(() => {
    getNewServiceItems(region, setCurrentRegion, setServiceTypeList);
  }, [region]);

  // data for selectBoxes
  const selectBoxList = [
    { items: regionItems, currentChoice: region, id: regionId },
    {
      items: serviceTypeList,
      currentChoice: serviceType,
      id: serviceTypeId,
    },
    {
      items: destinationItems,
      currentChoice: destination,
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
    choice,
    initialValues,
    filterParameters,
  };
};
