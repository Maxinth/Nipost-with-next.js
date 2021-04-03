import { useRouter } from "next/router";
import { getTitle } from "./getTitle";

const usePageTitle = () => {
  const { pathname } = useRouter();

  const pageTitle = getTitle(pathname);

  return { pageTitle };
};

export default usePageTitle;
