import {
  regionItems,
  regionId,
  destinationItems,
  destinationId,
  serviceTypesItems,
  serviceTypeId,
  itemTypeId,
  itemTypeItems,
} from "./data";
import { useState, useEffect } from "react";
import { getNewServiceItems } from "./getNewOptions";
import useGetChoice from "./useGetChoice";

export const useSelect = () => {
  // state to change the service selectboxes options Values based on region
  const [currentRegion, setCurrentRegion] = useState(regionItems[0].itemValue);
  const [serviceTypeList, setServiceTypeList] = useState(serviceTypesItems);

  const [
    initialValues,
    choice,
    onChange,
    region,
    serviceType,
    destination,
    itemType,
  ] = useGetChoice(
    currentRegion,
    serviceTypeList,
    destinationItems,
    itemTypeItems
  );

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
    {
      items: itemTypeItems,
      currentChoice: itemType,
      id: itemTypeId,
    },
  ];

  return {
    selectBoxList,
    onChange,
    choice,
    initialValues,
  };
};
