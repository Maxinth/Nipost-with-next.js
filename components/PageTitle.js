import Router from "next/router";
import { getTitle } from "./getTitle";

const useTitle = () => {
  const { route } = Router;
  const { pathname } = route;

  // get page title
  const pageTitle = getTitle(pathname);

  return {
    pageTitle,
  };
};

export default useTitle;
