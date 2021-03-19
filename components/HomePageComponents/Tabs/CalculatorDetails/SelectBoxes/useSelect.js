import {
  regionItems,
  regionId,
  defaultDestinationItems,
  destinationId,
  serviceTypeId,
  itemTypeId,
  itemTypeItems,
  servicesTypesItemsForRadioAtDomestic,
  serviceTypeDomesticId,
} from "./data";
import { useEffect } from "react";
import { getNewItemsList } from "./getNewOptions";
import useGetChoice from "./useGetChoice";
import useTrackRegionAndOptionValues from "./useTrackOptionValues";
export const useSelect = () => {
  // getting needed values from useTrackRegionAndOptionsValues
  const {
    currentRegion,
    setCurrentRegion,
    serviceTypeList,
    setServiceTypeList,
    destinationTypeList,
    setDestinationTypeList,
  } = useTrackRegionAndOptionValues();

  // getting values from useGetChoice custom hoook
  const [
    initialValues,
    choice,
    onChange,
    region,
    serviceType,
    destination,
    itemType,
    serviceAtDomesticRadio,
  ] = useGetChoice(
    currentRegion,
    serviceTypeList,
    defaultDestinationItems,
    itemTypeItems,
    servicesTypesItemsForRadioAtDomestic
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
      items: serviceTypeList, // serviceItems is a tracked state value
      currentChoice: serviceType,
      id: serviceTypeId,
    },
    {
      items: destinationTypeList, // destinationItems  is also tracked state value
      currentChoice: destination,
      id: destinationId,
    },
    {
      items: itemTypeItems,
      currentChoice: itemType,
      id: itemTypeId,
    },
  ];

  //  serviceTypeDomesticId,
  // servicesTypesItemsForRadioAtDomestic,
  const selectBoxForDomesticRadio = [
    {
      items: servicesTypesItemsForRadioAtDomestic,
      currentChoice: serviceAtDomesticRadio,
      id: serviceTypeDomesticId,
    },
  ];

  return {
    selectBoxList,
    onChange,
    choice,
    initialValues,
    selectBoxForDomesticRadio,
  };
};
