import queryString from "query-string";

function useEncodedURL(idsArray: string[]) {
  const queryParams = {
    displayedFilters: JSON.stringify({
      title: true,
      location: true,
      date: true,
      agency: true,
      attendees: true,
    }),
    filter: JSON.stringify({
      id: idsArray,
    }),
    order: "ASC",
    page: 1,
    perPage: 10,
    sort: "date",
  };

  const encodedParams = queryString.stringify(queryParams);

  const url = `/events?${encodedParams}`;

  return url;
}

export default useEncodedURL;
