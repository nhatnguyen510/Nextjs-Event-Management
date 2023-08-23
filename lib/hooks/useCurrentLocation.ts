import { useLocation, matchPath } from "react-router-dom";

export const useCurrentLocation = () => {
  const location = useLocation();
  let value = "";
  if (!!matchPath("/events/*", location.pathname)) {
    value = "events";
  } else if (!!matchPath("/agencies/*", location.pathname)) {
    value = "agencies";
  }

  return value;
};
