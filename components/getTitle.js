let title = "";

export const changeTitle = (path) => {
    switch (path) {
        case "/":
            title="Home";
            break;

        case "/track-and-trace":
            title = "Track and Trace"
            break;
        case "/calculator":
            title = "Online Calculator";
            break;
        case "/post":
            title = "PostOffice Address";
            break;
        default:
            title="Home";
            break;
    }
    return title;

}