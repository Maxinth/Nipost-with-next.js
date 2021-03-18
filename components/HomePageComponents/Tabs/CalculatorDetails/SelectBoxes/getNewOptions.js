import { data } from "./data";

const { postServiceType } = data;
const {
  serviceTypesItems,
  servicesTypesItemsForDomestic,
  servicesTypesItemsForInternational,
} = postServiceType;

export const getNewServiceItems = (region, regionSetterFn, listSetterFn) => {
  if (region === "domestic") {
    regionSetterFn(region);
    listSetterFn(servicesTypesItemsForDomestic);
  } else if (region === "international") {
    regionSetterFn(region);
    listSetterFn(servicesTypesItemsForInternational);
  } else {
    regionSetterFn("selectRegion");
    listSetterFn(serviceTypesItems);
  }
};
