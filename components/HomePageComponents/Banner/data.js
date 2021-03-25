export const data = [
  "/homeBanner/index.png",
  "/homeBanner/14.jpg",
  "/homeBanner/13.jpg",
  "/homeBanner/11.jpg",
];

export const matchAndMakeCurrent = (index, setIndex) => {
  const makeCurrentItem = (index) => {
    return setIndex(index);
  };

  // custom function to style control box
  const matchCurrentItem = (itemIndex) =>
    itemIndex === index ? "current" : "";

  return { makeCurrentItem, matchCurrentItem };
};

export const showForIndexBanner = (item) => {
  return item === "/homeBanner/index.png";
};
