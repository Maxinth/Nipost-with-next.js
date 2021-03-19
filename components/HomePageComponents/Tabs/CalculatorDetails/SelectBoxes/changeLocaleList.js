import {
  servicesTypesItemsForRadioAtDomestic,
  destinationsForRadioAtForeign,
} from "./data";

export const changeLocaleList = (id, setterFn) => {
  switch (id) {
    case id === "domestic":
      setterFn(servicesTypesItemsForRadioAtDomestic);
      console.log("locale is domestic");
      break;
    case id === "foreign":
      setterFn(destinationsForRadioAtForeign);
      console.log("locale is domestic");
      break;
    default:
      setterFn(servicesTypesItemsForRadioAtDomestic);
      console.log("locale is default");
      break;
  }
};
