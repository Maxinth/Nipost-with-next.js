const data = {
  defaultServiceTypesItems: [
    {
      itemName: "select service type",
      itemValue: "selectServiceType",
    },
  ],

  //servicesTypes Items when region is set as Domestic on  region select box
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

  //servicesTypes Items when region is set as International on  region select box
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

  servicesTypesItemsForRadioAtDomestic: [
    {
      itemName: "select service type",
      itemValue: "selectServiceType",
    },
    {
      itemName: "counter delivery",
      itemValue: "counterDelivery",
    },
    {
      itemName: "home delivery",
      itemValue: "homeDelivery",
    },
  ],
};

const {
  defaultServiceTypesItems,
  servicesTypesItemsForDomestic,
  servicesTypesItemsForInternational,
  servicesTypesItemsForRadioAtDomestic,
} = data;

export {
  defaultServiceTypesItems,
  servicesTypesItemsForDomestic,
  servicesTypesItemsForInternational,
  servicesTypesItemsForRadioAtDomestic,
};
