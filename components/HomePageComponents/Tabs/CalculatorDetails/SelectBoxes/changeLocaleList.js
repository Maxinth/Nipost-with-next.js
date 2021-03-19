import {
  servicesTypesItemsForRadioAtDomestic,
  destinationsForRadioAtForeign,
} from "./data";

export const changeLocaleList = (id, setterFn) => {
  console.log(`changeLocaleList ran for id = ${id}`);
  switch (id) {
    case id === "domestic":
      setterFn(servicesTypesItemsForRadioAtDomestic);
      console.log(`locale is ${id}`);
      break;
    case id === "foreign":
      setterFn(destinationsForRadioAtForeign);
      console.log(`locale is ${id}`);
      break;

    case id === "letters":
    case id === "ems":
      return;

    default:
      // setterFn(servicesTypesItemsForRadioAtDomestic);
      // console.log("locale is at default");
      // break;
      return;
  }
};
