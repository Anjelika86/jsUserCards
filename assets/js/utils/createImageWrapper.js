function createImageWrapper(userObj) {
  const { id, firstName, lastName, profilePicture } = userObj;
  const img = createElement("img", {
    classNames: ["img"],
    attrs: { src: profilePicture, alt: firstName, "data-id": id },
  });

  img.addEventListener("error", deleteHandler);
  img.addEventListener("load", imageLoadeHandler);

  const initails = createElement(
    "div",
    { classNames: ["initails"] },
    document.createTextNode(
      firstName
        .trim()
        .split(" ")
        .map((word) => word[0])
        .join(" ")
    ),
    document.createTextNode(
      lastName
        .trim()
        .split(" ")
        .map((word) => word[0])
        .join(" ")
    )
  );

  initails.style.backgroundColor = stringToColour(firstName.trim());

  const imgWrapper = createElement(
    "div",
    {
      classNames: ["imgWrapper"],
      attrs: { id: `wrapper${id}` },
    },
    initails
  );
  return imgWrapper;
}
