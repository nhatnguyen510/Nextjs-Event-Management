import queryString from "query-string";

function useEncodedURL(idsArray: string[]) {
  const queryParams = {
    filter: JSON.stringify({
      id: idsArray,
    }),
    order: "ASC",
    page: 1,
    perPage: 10,
  };

  const encodedParams = queryString.stringify(queryParams);

  const url = `?${encodedParams}`;

  return url;
}

export default useEncodedURL;
