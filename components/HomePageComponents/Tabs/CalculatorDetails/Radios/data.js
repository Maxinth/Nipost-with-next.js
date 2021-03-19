const data = {
  // ems and letters radios
  emsAndLetters: [
    { label: "EMS", id: "ems" },
    { label: "LETTERS", id: "letters" },
  ],

  emsAndLetterState: {
    ems: true,
    letters: false,
  },

  // domestic and foreign radios
  domesticAndForeign: [
    { label: "DOMESTIC", id: "domestic" },
    { label: "FOREIGN", id: "foreign" },
  ],

  domesticAndForeignState: {
    // domestic: false,
    domestic: true,
    foreign: false,
  },
};

// destructing needed values from data for export
const {
  emsAndLetters,
  emsAndLetterState,
  domesticAndForeign,
  domesticAndForeignState,
} = data;

// ======= new states for ems and letters radio on click =======

// object for ems and letters radios on select
const emsAndLettersOnSelect = {
  emsSelected: {
    ems: true,
    letters: false,
  },

  lettersSelected: {
    ems: false,
    letters: true,
  },
};

// destructing needed values from emsLettersOnSelect for export
const { emsSelected, lettersSelected } = emsAndLettersOnSelect;

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

export {
  emsAndLetters,
  emsAndLetterState,
  domesticAndForeign,
  domesticAndForeignState,
  emsSelected,
  lettersSelected,
  domesticSelected,
  foreignSelected,
};
