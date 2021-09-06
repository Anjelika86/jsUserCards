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
  img.addEventListener("Load", imageLoadeHandler);

  const initails = createElement(
    "div",
    { classNames: ["initails"] },
    document.createTextNode(
      firstName
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
      attrs: { id: `wrappers${id}` },
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
      `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto ad molestiae nesciunt aliquid, quis voluptatem, labore, voluptates hic qui sequi consequuntur praesentium recusandae omnis delectus adipisci quae dolore excepturi. Officiis.`
    )
  );
  const article = createElement(
    "article",
    { classNames: ["userCard"] },
    imgWrapper,
    userName,
    cardDescription
  );
  const userCard = createElement(
    "li",
    { classNames: ["cardWrapper"] },
    article
  );
  return userCard;
}

function createElement(tagName, options, ...children) {
  const { classNames = [], attrs = {}, onClick = () => {} } = options;
  const element = document.createElement(tagName);
  element.classList.add(...classNames);
  const attributesTuples = Object.entries(attrs);
  for (const [key, value] of attributesTuples) {
    element.setAttribute(key, value);
  }
  element.onClick = onClick;
  element.append(...children);
  // element.id = id;
  return element;
}

function deleteHandler({ target }) {
  target.remove();
}

function stringToColour(str) {
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    hash = str.charCodeAt(i) + ((hash << 5) - hash);
  }
  var colour = "#";
  for (var i = 0; i < 3; i++) {
    var value = (hash >> (i * 8)) & 0xff;
    colour += ("00" + value.toString(16)).substr(-2);
  }
  return colour;
}

function imageLoadeHandler(e) {
  const {
    target: {
      dataset: { id },
    },
    target,
  } = e;

  document.getElementById(`wrapper${id}`).append(target);
}
