import { getTitle } from "./getTitle";
import Router from "next/router";

const useTitle = () => {
  const { route } = Router;
  const { pathname } = route;

  const pageTitle = getTitle(pathname);

  return {
    pageTitle,
  };
};

export default useTitle;
