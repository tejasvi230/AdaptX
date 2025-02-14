document.getElementById("highlight-btn").addEventListener("click", function () {
  let selection = window.getSelection();
  if (!selection.rangeCount) return;

  let range = selection.getRangeAt(0);
  let span = document.createElement("span");
  span.className = "highlighted";
  range.surroundContents(span);
});

document.getElementById("clear-btn").addEventListener("click", function () {
  document.querySelectorAll(".highlighted").forEach((el) => {
    let parent = el.parentNode;
    parent.replaceChild(document.createTextNode(el.textContent), el);
  });
});
