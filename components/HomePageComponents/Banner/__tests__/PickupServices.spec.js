import { showForIndexBanner } from "../data";

test("checks if current item is NOT banner for the homepage", () => {
  const item = "/homeBanner/scam.png";
  expect(showForIndexBanner(item)).toBe(false);
});

test("gets the snapshot for <PickUpServices />", () => {});
