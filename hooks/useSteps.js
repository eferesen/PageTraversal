import { useRouter } from "next/router";
import { routes } from "../constants/routes";

const useSteps = () => {
  const router = useRouter();
  const currentPath = router.pathname.split("/")[2];
  const currentIndex = routes.indexOf(currentPath);
  const previousIndex = currentIndex - 1 < 0 ? undefined : currentIndex - 1;
  const nextIndex =
    currentIndex === routes.length - 1 ? undefined : currentIndex + 1;

  return {
    all: routes,
    current: routes[currentIndex],
    currentIndex,
    next: currentIndex === -1 ? undefined : routes[currentIndex + 1],
    previous: routes[currentIndex - 1],
    previousIndex,
    next: nextIndex ? routes[currentIndex + 1] : undefined,
    nextIndex,
  };
};

export { useSteps };


