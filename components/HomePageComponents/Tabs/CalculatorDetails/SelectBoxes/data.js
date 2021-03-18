import {
  defaultServiceTypesItems,
  servicesTypesItemsForDomestic,
  servicesTypesItemsForInternational,
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
    servicesTypesItemsForDomestic,
    servicesTypesItemsForInternational,
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

const { postRegion, postDestination, postServiceType, postItemType } = data;

const { regionId } = postRegion;

const { serviceTypeId } = postServiceType;

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
};
