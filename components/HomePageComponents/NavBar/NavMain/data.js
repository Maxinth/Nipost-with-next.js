export const data = [
  { linkText: "home", goTo: "/", id: "home" },
  { linkText: "about us", goTo: "/#", id: "aboutUs" },
  { linkText: "services", goTo: "/#", id: "services" },
  { linkText: "media", goTo: "/#", id: "media" },
  { linkText: "quick tools", goTo: "/#", id: "quickTools" },
  { linkText: "contact", goTo: "/#", id: "contact" },
];

export const linkItems = {
  home: false,
  aboutUs: false,
  services: false,
  media: false,
  quickTools: false,
  contact: false,
  searchIcon: false,
  leftOffset: 0,
};

export const itemsOnHover = (e, id) => {
  let temp = e.target.getBoundingClientRect();
  const { left } = temp; //   get its left offset
  return {
    leftOffset: parseInt(left),
    home: false,
    aboutUs: false,
    services: false,
    media: false,
    quickTools: false,
    contact: false,
    searchIcon: false,
    [id]: true,
  };
};

export const itemsWhenOutOfFocus = () => {
  return {
    leftOffset: 0,
    home: false,
    aboutUs: false,
    services: false,
    media: false,
    quickTools: false,
    contact: false,
    searchIcon: false,
  };
};
