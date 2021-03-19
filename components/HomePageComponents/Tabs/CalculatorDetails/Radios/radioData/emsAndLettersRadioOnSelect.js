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

export { emsSelected, lettersSelected };
