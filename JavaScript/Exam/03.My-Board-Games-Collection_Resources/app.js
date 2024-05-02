const baseUrl = "http://localhost:3030/jsonstore/games";

const loadButton = document.getElementById("load-games");
const gamesListElement = document.getElementById("games-list");

const gameNameInput = document.getElementById("g-name");
const gameTypeInput = document.getElementById("type");
const gamePlayersInput = document.getElementById("players");

const editButton = document.getElementById("edit-game");
const addButton = document.getElementById("add-game");

let currentGameId;

const gameInfo = () => {
  const name = gameNameInput.value;
  const type = gameTypeInput.value;
  const players = gamePlayersInput.value;

  return { name, type, players };
};
const clearInput = () => {
  gameNameInput.value = "";
  gameTypeInput.value = "";
  gamePlayersInput.value = "";
};
const loadGames = async () => {
  const response = await fetch(baseUrl);
  const data = await response.json();

  gamesListElement.innerHTML = "";

  Object.values(data).forEach((game) => {
    const boardGameElement = document.createElement("div");
    boardGameElement.classList.add("board-game");

    const contentElement = document.createElement("div");
    contentElement.classList.add("content");

    const pNameElement = document.createElement("p");
    pNameElement.textContent = game.name;
    const pTypeElement = document.createElement("p");
    pTypeElement.textContent = game.type;
    const pPlayersElement = document.createElement("p");
    pPlayersElement.textContent = game.players;

    const divButtonContainer = document.createElement("div");
    divButtonContainer.classList.add("buttons-container");

    const changeButton = document.createElement("button");
    changeButton.classList.add("change-btn");
    changeButton.textContent = "Change";

    const deleteButton = document.createElement("button");
    deleteButton.classList.add("delete-btn");
    deleteButton.textContent = "Delete";

    divButtonContainer.appendChild(changeButton);
    divButtonContainer.appendChild(deleteButton);

    contentElement.appendChild(pNameElement);
    contentElement.appendChild(pTypeElement);
    contentElement.appendChild(pPlayersElement);
    contentElement.appendChild(divButtonContainer);

    boardGameElement.appendChild(contentElement);
    gamesListElement.appendChild(boardGameElement);

    editButton.disabled = true;

    changeButton.addEventListener("click", () => {
      currentGameId = game._id;

      gameNameInput.value = game.name;
      gameTypeInput.value = game.type;
      gamePlayersInput.value = game.players;

      editButton.disabled = false;
      addButton.disabled = true;
      boardGameElement.remove();
    });

    deleteButton.addEventListener("click", async () => {
      const respone = await fetch(`${baseUrl}/${game._id}`, {
        method: "DELETE",
      });

      if(!response.ok){
        return;
      }

      loadGames();
    });
  });
};
loadButton.addEventListener("click", loadGames);

addButton.addEventListener("click", async () => {
  const { name, type, players } = gameInfo();

  const response = await fetch(baseUrl, {
    method: "POST",
    headers: {
      "content-type": "aplication/json",
    },
    body: JSON.stringify({
      name,
      type,
      players,
    }),
  });
  if (!response.ok) {
    return;
  }
  loadGames();
  clearInput();
});

editButton.addEventListener("click", async () => {
  const { name, type, players } = gameInfo();

  const response = await fetch(`${baseUrl}/${currentGameId}`, {
    method: "PUT",
    headers: {
      "content-type": "aplication/json",
    },

    body: JSON.stringify({
      _id: currentGameId,
      name,
      type,
      players,
    }),
  });
  editButton.disabled = true;
  addButton.disabled = false;

  clearInput();
  loadGames();
});
