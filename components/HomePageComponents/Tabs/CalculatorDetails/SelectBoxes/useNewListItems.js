import { useState } from "react";
import { data } from "./data";

const useNewListItems = () => {
  const { postRegion, postDestination, postServiceType } = data;

  // destructuring needed properties from the objects from 12 - SEE COMMENTS FOR id naming

  const { regionItems } = postRegion;
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
  if (index === 1) {
    setServiceTypeList(servicesTypesItemsForDomestic);
  } else if (index === 2) {
    setServiceTypesList(servicesTypesItemsForInternational);
  } else {
    setServiceTypeList(serviceTypesItems);
  }
  return {
    serviceTypeList,
    currentRegion,
    index,
  };
};

export default useNewListItems;
