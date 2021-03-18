import { useState } from "react";

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

  // state to track select boxes state.
  const [choice, setChoice] = useState(initialValues);

  // custom function to handle select option changes
  const onChange = (e) => {
    setChoice({
      ...choice,
      [e.target.id]: e.target.value,
    });
  };

  const { region, serviceType, destination, itemType } = choice;

  return [
    initialValues,
    choice,
    onChange,
    region,
    serviceType,
    destination,
    itemType,
  ];
};

export default useGetChoice;
