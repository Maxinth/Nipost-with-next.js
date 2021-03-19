// ======= new states for domestic and foreign radios on click =======

const domesticAndForeignOnSelect = {
  domesticSelected: {
    domestic: true,
    foreign: false,
  },

  foreignSelected: {
    domestic: false,
    foreign: true,
  },
};

const { domesticSelected, foreignSelected } = domesticAndForeignOnSelect;

export { domesticSelected, foreignSelected };
