const data = {
  // ems and letters radios
  emsAndLetters: [
    { label: "EMS", id: "ems" },
    { label: "LETTERS", id: "letters" },
  ],
  emsAndLetterState: {
    ems: false,
    letters: false,
  },

  // domestic and foreign radios
  domesticAndForeign: [
    { label: "DOMESTIC", id: "domestic" },
    { label: "FOREIGN", id: "foreign" },
  ],

  domesticAndForeignState: {
    domestic: false,
    foreign: false,
  },
};

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
