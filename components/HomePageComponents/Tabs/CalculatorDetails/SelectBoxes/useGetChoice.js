import { useState } from "react";
import useLocale from "./useLocale";
import useChoice from "./useChoice";

const useGetChoice = (
  currentRegion,
  defaultServiceTypesItems,
  defaultDestinationItems,
  itemTypeItems
) => {
  // default select boxes values on start up
  const initialValues = {
    region: currentRegion,
    serviceType: defaultServiceTypesItems[0].itemValue,
    destination: defaultDestinationItems[0].itemValue,
    itemType: itemTypeItems[0].itemValue,
  };

  // getting user choice and function to change choice from useChoice custom hook
  const { choice, onChange } = useChoice(initialValues);

  const {
    localeInitialValue,
    onChangeLocaleOptionVal,
    localeOptionVal,
    localeList,
  } = useLocale();

  // const { localeInitialValue } = localeOptionVal;
  const { region, serviceType, destination, itemType } = choice;

  return [
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
    localeList,
  ];
};

export default useGetChoice;
