import { useState } from "react";
import { servicesTypesItemsForRadioAtDomestic } from "./data";
const useLocale = () => {
  const [localeList, setLocaleList] = useState(
    servicesTypesItemsForRadioAtDomestic
  );

  const initialState = {
    localeInitialValue: localeList[0].itemValue,
  };
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
  };
};

export default useLocale;
