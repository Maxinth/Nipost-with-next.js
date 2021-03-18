import {
  defaultServiceTypesItems,
  servicesTypesItemsForDomestic,
  servicesTypesItemsForInternational,
  defaultDestinationItems,
  destinationsForDomesticRegion,
  destinationsForInternationalRegion,
} from "./data";

export const getNewItemsList = (
  region,
  regionSetterFn,
  changeServicesList,
  changeDestinationList
) => {
  if (region === "domestic") {
    regionSetterFn(region);
    changeServicesList(servicesTypesItemsForDomestic);
    changeDestinationList(destinationsForDomesticRegion);
  } else if (region === "international") {
    regionSetterFn(region);
    changeServicesList(servicesTypesItemsForInternational);
    changeDestinationList(destinationsForInternationalRegion);
  } else {
    regionSetterFn("selectRegion");
    changeServicesList(defaultServiceTypesItems);
    changeDestinationList(defaultDestinationItems);
  }
};
