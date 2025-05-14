function changeContent() {
  const text = document.getElementById("dynamic-text");
  text.textContent = "You just changed the text and styling dynamically!";
  text.classList.toggle("highlight");
}

function addElement() {
  const container = document.getElementById("container");
  const newPara = document.createElement("p");
  newPara.textContent = "This is a new paragraph added dynamically.";
  container.appendChild(newPara);
}

function removeElement() {
  const container = document.getElementById("container");
  if (container.lastChild) {
    container.removeChild(container.lastChild);
  }
}
