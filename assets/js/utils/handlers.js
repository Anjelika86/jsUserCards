function deleteHandler({ target }) {
  target.remove();
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
