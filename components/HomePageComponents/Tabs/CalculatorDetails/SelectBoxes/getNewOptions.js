import {
  serviceTypesItems,
  servicesTypesItemsForDomestic,
  servicesTypesItemsForInternational,
} from "./data";

export const getNewServiceItems = (
  region,
  regionSetterFn,
  changeServicesList
) => {
  if (region === "domestic") {
    regionSetterFn(region);
    changeServicesList(servicesTypesItemsForDomestic);
  } else if (region === "international") {
    regionSetterFn(region);
    changeServicesList(servicesTypesItemsForInternational);
  } else {
    regionSetterFn("selectRegion");
    changeServicesList(serviceTypesItems);
  }
};
