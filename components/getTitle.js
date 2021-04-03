let title = "";

export const getTitle = (path) => {
  switch (path) {
    case "/":
      title = "Nipost -- Home";
      break;

    case "/track-and-trace":
      title = "Nipost - Track and Trace";
      break;

    case "/calculator":
      title = "Nipost - Use our expenses calculator";
      break;
    case "/post":
      title = "Nipost - Post office Finder";
      break;

    default:
      title = "Oops!, 404 says HI!";
      break;
  }
  return title;
};
