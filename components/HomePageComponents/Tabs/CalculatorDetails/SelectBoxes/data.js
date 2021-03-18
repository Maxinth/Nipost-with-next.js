import {
  serviceTypesItems,
  servicesTypesItemsForDomestic,
  servicesTypesItemsForInternational,
  regionItems,
  itemTypeItems,
  destinationItems,
} from "./selectBoxesData";

export const data = {
  postRegion: {
    regionId: "region",
    regionItems,
  },

  postServiceType: {
    serviceTypeId: "serviceType",
    serviceTypesItems,
    servicesTypesItemsForDomestic,
    servicesTypesItemsForInternational,
  },

  postDestination: {
    destinationId: "destination",
    destinationItems,
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
  destinationItems,
  destinationId,
  serviceTypesItems,
  serviceTypeId,
  servicesTypesItemsForDomestic,
  servicesTypesItemsForInternational,
  itemTypeId,
  itemTypeItems,
};
