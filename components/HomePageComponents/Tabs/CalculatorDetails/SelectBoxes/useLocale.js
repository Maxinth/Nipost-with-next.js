import { useState, useEffect } from "react";
// import { servicesTypesItemsForRadioAtDomestic } from "./data";
import { useGlobalContexnt } from "../../../../context";
const useLocale = () => {
  const { localeList, setLocaleList } = useGlobalContext();
  // // state to track and change options list based on radio click
  // const [localeList, setLocaleList] = useState(
  //   servicesTypesItemsForRadioAtDomestic
  // );

  const initialState = {
    localeInitialValue: localeList[0].itemValue,
  };

  // console.log("localeList = ", localeList);

  // useEffect(() => {
  //   setLocaleList(localeList);
  // }, [localeList]);

  const [localeOptionVal, setLocaleOptionVal] = useState(initialState);

  const onChangeLocaleOptionVal = (e) => {
    setLocaleOptionVal({
      [e.target.id]: e.target.value,
    });
  };

  const { localeInitialValue } = localeOptionVal;
  return {
    localeInitialValue,
    onChangeLocaleOptionVal,
    localeOptionVal,
    // localeList,
  };
};

export default useLocale;
