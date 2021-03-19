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

export {
  emsAndLetters,
  emsAndLetterState,
  domesticAndForeign,
  domesticAndForeignState,
};
