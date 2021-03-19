import { useState } from "react";
import { useGlobalContext } from "../../../../context";

const useLocale = () => {
  const { localeList } = useGlobalContext();

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
