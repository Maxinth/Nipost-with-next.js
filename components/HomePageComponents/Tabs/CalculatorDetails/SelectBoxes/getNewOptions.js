import {
  defaultServiceTypesItems,
  servicesTypesItemsForDomestic,
  servicesTypesItemsForInternational,
  defaultDestinationItems,
  destinationsForDomesticRegion,
  destinationsForInternationalRegion,
} from "./data";

// custom function to change options values list of service and destinations select boxes based on
// the option selected in region select box

export const getNewItemsList = (
  region,
  currentRegionSetterFn,
  changeServicesList,
  changeDestinationList
) => {
  if (region === "domestic") {
    currentRegionSetterFn(region);
    changeServicesList(servicesTypesItemsForDomestic);
    changeDestinationList(destinationsForDomesticRegion);
  } else if (region === "international") {
    currentRegionSetterFn(region);
    changeServicesList(servicesTypesItemsForInternational);
    changeDestinationList(destinationsForInternationalRegion);
  } else {
    currentRegionSetterFn("selectRegion");
    changeServicesList(defaultServiceTypesItems);
    changeDestinationList(defaultDestinationItems);
  }
};
