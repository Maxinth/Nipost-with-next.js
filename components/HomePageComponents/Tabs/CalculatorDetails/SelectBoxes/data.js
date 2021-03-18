// jobFunctions = region, jobId == regionId, jobItems= regionItems

/*

jobIndustries =  serviceType
destination = destination
*/

export const data = {
  region: {
    regionId: "region",
    regionItems: [
      { itemName: "select region", itemValue: "selectRegion" },
      { itemName: "domestic", itemValue: "domestic" },
      { itemName: "international", itemValue: "international" },
    ],
  },

  serviceType: {
    serviceTypeId: "serviceType",
    serviceTypesItems: [
      {
        itemName: "select service type",
        itemValue: "selectServiceType",
      },
    ],
  },

  destination: {
    destinationId: "destination",
    destinationItems: [
      {
        itemName: "select destination",
        itemValue: "selectDestination",
      },
    ],
  },
};

const { region, destination, serviceType } = data;

const { regionItems } = region;
const { destinationItems } = destination;
const { serviceTypesItems } = serviceType;

export { regionItems, destinationItems, serviceTypesItems };
