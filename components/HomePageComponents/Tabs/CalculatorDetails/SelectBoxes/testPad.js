const initialDomesticServiceState = {
  serviceAtDomesticRadio: servicesTypesItemsForRadioAtDomestic[0].itemValue,
};
const [domesticService, setDomesticService] = useState(
  initialDomesticServiceState
);

const onChangeDomesticService = (e) => {
  setDomesticService({
    [e.target.id]: e.target.value,
  });
};

const { serviceAtDomesticRadio } = domesticService;
