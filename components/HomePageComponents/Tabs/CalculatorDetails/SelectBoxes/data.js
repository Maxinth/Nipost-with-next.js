import {
  defaultServiceTypesItems,
  servicesTypesItemsForDomestic,
  servicesTypesItemsForInternational,
  servicesTypesItemsForRadioAtDomestic,
  regionItems,
  itemTypeItems,
  defaultDestinationItems,
  destinationsForDomesticRegion,
  destinationsForInternationalRegion,
} from "./selectBoxesData";

const data = {
  postRegion: {
    regionId: "region",
    regionItems,
  },

  postServiceType: {
    serviceTypeId: "serviceType",
    defaultServiceTypesItems,
  },

  postServiceTypesForDomesticRadio: {
    serviceTypeDomesticId: "serviceTypeForDomesticRadio",
    servicesTypesItemsForRadioAtDomestic,
  },

  postDestination: {
    destinationId: "destination",
    defaultDestinationItems,
  },
  postItemType: {
    itemTypeId: "itemType",
    itemTypeItems,
  },
};

const {
  postRegion,
  postDestination,
  postServiceType,
  postItemType,
  postServiceTypesForDomesticRadio,
} = data;

const { regionId } = postRegion;

const { serviceTypeId } = postServiceType;
const { serviceTypeDomesticId } = postServiceTypesForDomesticRadio;

const { destinationId } = postDestination;

const { itemTypeId } = postItemType;

export {
  regionItems,
  regionId,
  defaultDestinationItems,
  destinationsForDomesticRegion,
  destinationsForInternationalRegion,
  destinationId,
  defaultServiceTypesItems,
  serviceTypeId,
  servicesTypesItemsForDomestic,
  servicesTypesItemsForInternational,
  itemTypeId,
  itemTypeItems,
  serviceTypeDomesticId,
  servicesTypesItemsForRadioAtDomestic,
};
