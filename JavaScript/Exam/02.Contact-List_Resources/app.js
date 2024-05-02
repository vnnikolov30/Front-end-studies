window.addEventListener("load", solve);

function solve() {
  const inputNameElement = document.getElementById("name");
  const inputPhoneElement = document.getElementById("phone");
  const inputCategoryElement = document.getElementById("category");

  const checkListElement = document.getElementById("check-list");
  const contactsListElement = document.getElementById("contact-list");

  const addButton = document.getElementById("add-btn");

  addButton.addEventListener("click", () => {
    const name = inputNameElement.value;
    const phone = inputPhoneElement.value;
    const category = inputCategoryElement.value;

    if (!name || !phone || !category) {
      return;
    }

    function createLiElement(name, phone, category) {
      const liContainerElement = document.createElement("li");
      const articleElement = document.createElement("article");

      const pNameElement = document.createElement("p");
      pNameElement.textContent = `name:${name}`;
      const pPhoneElement = document.createElement("p");
      pPhoneElement.textContent = `phone:${phone}`;
      const pCategoryElement = document.createElement("p");
      pCategoryElement.textContent = `category:${category}`;

      const divButtonContainer = document.createElement("div");
      divButtonContainer.classList.add("buttons");

      const editButton = document.createElement("button");
      editButton.classList.add("edit-btn");

      const saveButton = document.createElement("button");
      saveButton.classList.add("save-btn");

      divButtonContainer.appendChild(editButton);
      divButtonContainer.appendChild(saveButton);

      articleElement.appendChild(pNameElement);
      articleElement.appendChild(pPhoneElement);
      articleElement.appendChild(pCategoryElement);

      liContainerElement.appendChild(articleElement);
      liContainerElement.appendChild(divButtonContainer);

      return liContainerElement;
    }
    const contactElement = createLiElement(name, phone, category);
    checkListElement.appendChild(contactElement);

    inputNameElement.value = "";
    inputPhoneElement.value = "";
    inputCategoryElement.value = "";

    const editButton = document.querySelector(".edit-btn");
    editButton.addEventListener("click", () => {
      inputNameElement.value = name;
      inputPhoneElement.value = phone;
      inputCategoryElement.value = category;

      contactElement.remove();
    });

    const saveButton = document.querySelector(".save-btn");
    const deleteBtn = document.createElement("button");
    deleteBtn.classList.add("del-btn")

    saveButton.addEventListener("click", () => {
      const editBtn = document.querySelector(".edit-btn");
      const saveBtn = document.querySelector(".save-btn");
      editBtn.remove();
      saveBtn.remove();
      contactElement.remove();
      contactElement.appendChild(deleteBtn);
      contactsListElement.appendChild(contactElement);
    });

    deleteBtn.addEventListener("click", () => {
      contactsListElement.innerHTML = '';
    })
  });
}
