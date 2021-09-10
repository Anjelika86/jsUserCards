function createElement(tagName, options, ...children) {
  const {
    classNames = [],
    attrs = {},
    listener = {},
    onClick = () => {},
  } = options;
  const element = document.createElement(tagName);
  element.classList.add(...classNames);

  const attributesTuples = Object.entries(attrs);
  for (const [key, value] of attributesTuples) {
    element.setAttribute(key, value);
  }
  const listenerTuples = Object.entries(listener);
  for (const [key, value] of listenerTuples) {
    element.addEventListener(key, value);
  }

  element.onClick = onClick;
  element.append(...children);
  return element;
}
