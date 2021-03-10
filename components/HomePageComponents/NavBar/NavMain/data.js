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
};

export const itemsOnHover = (id) => {
  return {
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
