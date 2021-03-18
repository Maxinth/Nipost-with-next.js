import { data } from "./data";
import { useState, useEffect } from "react";
// import useNewListItems from "./useNewListItems";
export const useSelect = () => {
  // destructuring individual object items from data object
  //   const { region, destination, serviceType } = data;
  const { postRegion, postDestination, postServiceType } = data;

  // destructuring needed properties from the objects from 12 - SEE COMMENTS FOR id naming

  // useNewItems //
  const { regionItems, regionId } = postRegion;
  //   const { destinationItems, destinationId } = postDestination;
  const {
    serviceTypesItems,
    servicesTypesItemsForDomestic,
    servicesTypesItemsForInternational,
  } = postServiceType;

  //HERE
  const [index] = useState(0);

  const [currentRegion, setCurrentRegion] = useState(
    regionItems[index].itemValue
  );

  const [serviceTypeList, setServiceTypeList] = useState(serviceTypesItems);

  //   const getNewItems = () => {
  //     if (currentRegion === "domestic") {
  //       console.log("region has changed to domestic");
  //       setServiceTypeList(servicesTypesItemsForDomestic);
  //     } else if (currentRegion === "international") {
  //       console.log("region has changed to international");
  //       setServiceTypesList(servicesTypesItemsForInternational);
  //     } else {
  //       console.log("region at default");
  //       setServiceTypeList(serviceTypesItems);
  //     }
  //   };

  //   useEffect(() => {
  //     getNewItems();
  //     console.log("serviceTypeList from useEffect = ", serviceTypeList);
  //   }, [currentRegion, index]);

  //HERE
  //   useNewItems //

  const { destinationItems, destinationId } = postDestination;
  const { serviceTypeId } = postServiceType;

  //   const { serviceTypeList, currentRegion } = useNewListItems();
  console.log("serviceTypeList from useSelect = ", serviceTypeList);
  // values at initial load
  const initialValues = {
    region: currentRegion,
    serviceType: serviceTypeList[0].itemValue,
    destination: destinationItems[0].itemValue,
  };

  const [choice, setChoice] = useState(initialValues);

  const { region, serviceType, destination } = choice;

  // custom function to handle select option changes
  const onChange = (e) => {
    setChoice({
      ...choice,
      [e.target.id]: e.target.value,
    });
  };

  // MIDDLE TEST
  const getNewItems = () => {
    if (region === "domestic") {
      console.log("region has changed to domestic");
      setCurrentRegion(region);
      setServiceTypeList(servicesTypesItemsForDomestic);
    } else if (region === "international") {
      console.log("region has changed to international");
      setCurrentRegion(region);
      setServiceTypeList(servicesTypesItemsForInternational);
    } else {
      console.log("region at default");
      setCurrentRegion("selectRegion");
      setServiceTypeList(serviceTypesItems);
    }
  };

  useEffect(() => {
    getNewItems();
    console.log("serviceTypeList from useEffect = ", serviceTypeList);
  }, [region, index]);

  // HERE
  //   const [index] = useState(0);

  //   const [currentRegion, setCurrentRegion] = useState(
  //     regionItems[index].itemValue
  //   );

  //   const [serviceTypeList, setServiceTypeList] = useState(serviceTypesItems);

  //   const getNewItems = () => {
  //     setCurrentRegion(region);
  //     if (region === "domestic") {
  //       console.log("region has changed to domestic");
  //       setServiceTypeList(servicesTypesItemsForDomestic);
  //     } else if (region === "international") {
  //       console.log("region has changed to international");
  //       setServiceTypesList(servicesTypesItemsForInternational);
  //     } else {
  //       console.log("region at default");
  //       setServiceTypeList(serviceTypesItems);
  //     }
  //   };

  //   useEffect(() => {
  //     getNewItems();
  //     console.log("serviceTypeList from useEffect = ", serviceTypeList);
  //   }, [currentRegion, index]);
  // HERE

  // data for selectBoxes
  const selectBoxList = [
    { items: regionItems, currentChoice: region, id: regionId },
    {
      items: serviceTypeList,
      currentChoice: serviceType,
      id: serviceTypeId,
    },
    {
      items: destinationItems,
      currentChoice: destination,
      id: destinationId,
    },
  ];

  // An array of the items selected to be used as identifiers to be filtered from global jobs data
  const filterParameters = selectBoxList.map((item) => {
    return { id: item.id, choice: item.currentChoice };
  });

  return {
    selectBoxList,
    onChange,

    choice,
    initialValues,
    filterParameters,
  };
};
