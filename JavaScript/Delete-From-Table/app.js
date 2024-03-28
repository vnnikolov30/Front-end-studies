function deleteByEmail() {
  const emailFieldElement = document.querySelector('input[type="text"]');
  const trElements = document.querySelectorAll(
    "#customers tbody tr td:last-child"
  );
  const resElement = document.getElementById("result");

  const searchTerm = emailFieldElement.value.trim();

  const searchedTrElement = Array.from(trElements).find((trElement) =>
    trElement.textContent.includes(searchTerm)
  );

  if (searchedTrElement) {
    searchedTrElement.parentElement.remove();
    resElement.textContent = "Deleted.";
  } else {
    resElement.textContent = "Not found.";
  }
}
