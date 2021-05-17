import { routes } from "../constants/routes";

const getPageInfo = (pageName) => {
  const currentIndex = routes.indexOf(pageName);
  const prevPage = currentIndex > 0 ? routes[currentIndex - 1] : null;
  const nextPage =
    currentIndex === routes.length - 1 ? null : routes[currentIndex + 1];

  return { nextPage, prevPage };
};

export { getPageInfo };
