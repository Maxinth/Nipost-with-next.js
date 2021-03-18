export const data = {
  postRegion: {
    regionId: "region",
    regionItems: [
      { itemName: "select region", itemValue: "selectRegion" },
      { itemName: "domestic", itemValue: "domestic" },
      { itemName: "international", itemValue: "international" },
    ],
  },

  postServiceType: {
    serviceTypeId: "serviceType",
    serviceTypesItems: [
      {
        itemName: "select service type",
        itemValue: "selectServiceType",
      },
      // {
      //   itemName: "select service type 2",
      //   itemValue: "selectServiceType2",
      // },
      // {
      //   itemName: "select service type 3",
      //   itemValue: "selectServiceType3",
      // },
    ],

    servicesTypesItemsForDomestic: [
      {
        itemName: "select service type",
        itemValue: "selectServiceType",
      },
      {
        itemName: "Airpost express",
        itemValue: "airpostExpress",
      },
      {
        itemName: "speed post",
        itemValue: "speedPost",
      },
      {
        itemName: "speed post economy",
        itemValue: "speedPostEconomy",
      },
    ],

    servicesTypesItemsForInternational: [
      {
        itemName: "select service type",
        itemValue: "selectServiceType",
      },
      {
        itemName: "ems",
        itemValue: "ems",
      },
    ],
  },

  postDestination: {
    destinationId: "destination",
    destinationItems: [
      {
        itemName: "select destination",
        itemValue: "selectDestination",
      },
      {
        itemName: "select destination2",
        itemValue: "selectDestination2",
      },
      {
        itemName: "select destination3",
        itemValue: "selectDestination3",
      },
    ],
  },
};

const { postRegion, postDestination, postServiceType } = data;

const { regionItems } = postRegion;
const { destinationItems } = postDestination;
const { serviceTypesItems } = postServiceType;

export { regionItems, destinationItems, serviceTypesItems };
