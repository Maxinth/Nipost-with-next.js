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
      console.log("path has not changed");
      break;
  }
  return title;
};
