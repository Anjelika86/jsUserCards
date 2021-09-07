"use strict";

const cardsContainer = document.querySelector("#root");

const userCards = data.map((userObj) => generateUserCard(userObj));
cardsContainer.append(...userCards);

function generateUserCard(userObj) {
  const { id, firstName, lastName, profilePicture, contacts } = userObj;
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

  const userName = createElement(
    "h2",
    { classNames: ["cardName"] },
    document.createTextNode(`${firstName} ${lastName}`)
  );

  const cardDescription = createElement(
    "p",
    { classNames: ["cardDescription"] },
    document.createTextNode(
      `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto ad molestiae nesciunt aliquid, quis voluptatem, labore, voluptates hic qui sequi consequuntur praesentium recusandae omnis .`
    )
  );

  const linkWrapper = createElement(
    "div",
    {
      classNames: ["linkWrapper"],
    },
    ...generateLinks(contacts)
  );
  const article = createElement(
    "article",
    { classNames: ["userCard"] },
    imgWrapper,
    userName,
    cardDescription,
    linkWrapper
  );

  const userCard = createElement(
    "li",
    { classNames: ["cardWrapper"] },
    article
  );
  return userCard;
}
