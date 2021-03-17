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
  emsAndLetterResetState: {
    ems: false,
    letters: false,
  },

  emsSelected: {
    ems: true,
    letters: false,
  },

  lettersSelected: {
    ems: false,
    letters: true,
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
  emsAndLetterResetState,
  emsSelected,
  lettersSelected,
} = data;

export {
  emsAndLetters,
  emsAndLetterState,
  domesticAndForeign,
  domesticAndForeignState,
  emsAndLetterResetState,
  emsSelected,
  lettersSelected,
};

// ==== START HERE ====
// add first commit and fix select box issue which needs the second select box to come in
// veiw due to a click in one of the select boxes of the first set
