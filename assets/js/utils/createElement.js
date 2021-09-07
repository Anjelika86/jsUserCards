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
  return element;
}
