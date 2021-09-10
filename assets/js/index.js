"use strict";

const cardsContainer = document.querySelector("#root");

const userCards = data.map((userObj) => generateUserCard(userObj));
cardsContainer.append(...userCards);

function generateUserCard(userObj) {
  const { firstName, lastName, contacts } = userObj;

  const userName = createElement(
    "h2",
    { classNames: ["cardName"] },
    document.createTextNode(`${firstName} ${lastName}`.trim())
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
    createImageWrapper(userObj),
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
