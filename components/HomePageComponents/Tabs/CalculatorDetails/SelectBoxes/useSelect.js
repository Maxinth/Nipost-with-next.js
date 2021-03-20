import {
  regionItems,
  regionId,
  defaultDestinationItems,
  destinationId,
  serviceTypeId,
  itemTypeId,
  itemTypeItems,
  serviceTypeDomesticId,
  destinationsForRadioAtForeign,
  servicesTypesItemsForRadioAtDomestic,
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

  // getting values from useGetChoice custom hook
  const [
    initialValues,
    choice,
    onChange,
    region,
    serviceType,
    destination,
    itemType,
    localeInitialValue,
    onChangeLocaleOptionVal,
    localeOptionVal,
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

  const domesticRadioClicksList = [
    {
      items: servicesTypesItemsForRadioAtDomestic,
      currentChoice: localeInitialValue,
      id: serviceTypeDomesticId,
    },
  ];

  const foreignRadioClickList = [
    {
      items: destinationsForRadioAtForeign,
      currentChoice: localeInitialValue,
      id: serviceTypeDomesticId,
    },
  ];

  return {
    selectBoxList,
    onChange,
    choice,
    initialValues,
    domesticRadioClicksList,
    onChangeLocaleOptionVal,
    localeOptionVal,
    foreignRadioClickList,
  };
};
