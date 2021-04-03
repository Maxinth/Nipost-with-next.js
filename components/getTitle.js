let title = "";

export const getTitle = (path) => {
  switch (path) {
    case "/":
      title = "Home";
      break;

    case "/track-and-trace":
      title = "Track and Trace";
      break;

    case "/calculator":
      title = "Online Calculator";
      break;
    case "/post":
      title = "PostOffice Address";
      break;

    default:
      title = "Oops!, 404 says HI!";
      break;
  }
  return title;
};
