import {
  regionItems,
  regionId,
  defaultDestinationItems,
  destinationId,
  defaultServiceTypesItems,
  serviceTypeId,
  itemTypeId,
  itemTypeItems,
} from "./data";
import { useState, useEffect } from "react";
import { getNewItemsList } from "./getNewOptions";
import useGetChoice from "./useGetChoice";

export const useSelect = () => {
  // state to track region
  const [currentRegion, setCurrentRegion] = useState(regionItems[0].itemValue);
  // state to change the service selectboxes options Values based on region
  const [serviceTypeList, setServiceTypeList] = useState(
    defaultServiceTypesItems
  );
  // state to change the destination selectboxes options Values based on region
  const [destinationTypeList, setDestinationTypeList] = useState(
    defaultDestinationItems
  );

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
    defaultDestinationItems,
    itemTypeItems
  );

  // useEffect to change services options List values every time the selected region changes
  useEffect(() => {
    getNewItemsList(
      region,
      setCurrentRegion,
      setServiceTypeList,
      setDestinationTypeList
    );
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
      items: destinationTypeList,
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
