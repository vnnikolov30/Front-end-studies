function addItem() {
  const itemsListElement = document.getElementById("items");
  const inputFeildElement = document.getElementById("newItemText");

  const newItemElement = document.createElement("li");
  newItemElement.textContent = inputFeildElement.value;

  const deleteElement = document.createElement("a");
  deleteElement.textContent = "[Delete]";
  deleteElement.href = "#";
  newItemElement.appendChild(deleteElement);

  deleteElement.addEventListener("click", () => {
    newItemElement.remove()
  });

  itemsListElement.appendChild(newItemElement);
  inputFeildElement.value = ''

}
