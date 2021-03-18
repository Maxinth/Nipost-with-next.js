import { useState } from "react";
import { data } from "./data";

const useNewListItems = (initialList) => {
  const { postRegion, postDestination, postServiceType } = data;

  // destructuring needed properties from the objects from 12 - SEE COMMENTS FOR id naming

  const { regionItems } = postRegion;
  //   const { destinationItems, destinationId } = postDestination;
  const {
    servicesTypesItemsForDomestic,
    servicesTypesItemsForInternational,
  } = postServiceType;

  const [index] = useState(0);

  const [currentRegion] = useState(regionItems[index].itemValue);

  const [serviceTypeList, setServiceTypeList] = useState(initialList);
  console.log("serviceTypeList from useNew = ", serviceTypeList);
  console.log("initialList from useNew = ", initialList);
  if (index === 1) {
    setServiceTypeList(servicesTypesItemsForDomestic);
  } else if (index === 2) {
    setServiceTypesList(servicesTypesItemsForInternational);
  } else {
    setServiceTypeList(initialList);
  }
  return {
    serviceTypeList,
    currentRegion,
    index,
  };
};

export default useNewListItems;
