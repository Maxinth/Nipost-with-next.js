import {
  servicesTypesItemsForRadioAtDomestic,
  destinationsForRadioAtForeign,
} from "./data";

// export const changeLocaleList = (id, setterFn) => {
//   console.log(`changeLocaleList ran for id = ${id}`);
//   switch (id) {
//     case id === "domestic":
//       setterFn(servicesTypesItemsForRadioAtDomestic);
//       console.log(`locale is ${id}`);
//       break;
//     case id === "foreign":
//       setterFn(destinationsForRadioAtForeign);
//       console.log(`locale is ${id}`);
//       break;

//     case id === "letters":
//     case id === "ems":
//       return;

//     default:

//       return;
//   }
// };
export const changeLocaleList = (id, setterFn) => {
  console.log(`changeLocaleList ran for id = ${id}`);
  switch (id) {
    case id === "domestic":
      setterFn(id);
      console.log(`locale is ${id}`);
      break;
    case id === "foreign":
      setterFn(id);
      console.log(`locale is ${id}`);
      break;

    case id === "letters":
    case id === "ems":
      return;

    default:
      return;
  }
};
