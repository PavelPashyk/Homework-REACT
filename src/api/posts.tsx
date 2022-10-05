export const fetchPosts = (searchText: string, offset: number) => {
  const promise = fetch(
    `https://studapi.teachmeskills.by/blog/posts/?limit=12&search=${searchText}&offset=${offset}`
  );

  const responsePromise = promise.then((response) => {
    return response.json();
  });

  return responsePromise;
};

// export const fetchPostsAsync = async (searchText: string, offset: number) => {
//   const response = await fetch(
//     `https://studapi.teachmeskills.by/blog/posts/?limit=12&search=${searchText}&offset=${offset}`
//   );

//   const json = await response.json();
//   return json;
// };
