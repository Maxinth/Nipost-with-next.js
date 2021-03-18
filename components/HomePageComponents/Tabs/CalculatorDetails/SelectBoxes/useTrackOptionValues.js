import { useState } from "react";
import {
  regionItems,
  defaultDestinationItems,
  defaultServiceTypesItems,
} from "./data";

const useTrackRegionAndOptionValues = () => {
  // state to track region
  const [currentRegion, setCurrentRegion] = useState(regionItems[0].itemValue);

  // state to change the service selectboxes options Values based on region
  const [serviceTypeList, setServiceTypeList] = useState(
    defaultServiceTypesItems
  );

  // state to change the destination selectboxes options Values based on region
  const [destinationTypeList, setDestinationTypeList] = useState(
    defaultDestinationItems
  );

  return {
    currentRegion,
    setCurrentRegion,
    serviceTypeList,
    setServiceTypeList,
    destinationTypeList,
    setDestinationTypeList,
  };
};

export default useTrackRegionAndOptionValues;
