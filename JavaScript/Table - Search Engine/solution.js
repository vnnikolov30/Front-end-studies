function solve() {
   document.querySelector("#searchBtn").addEventListener("click", onClick);
 
   function onClick() {
     const bodyElements = document.querySelectorAll(".container tbody tr");
     const searchElement = document.getElementById("searchField");

     for (const element of bodyElements) {
       element.classList.remove("select");
     }
 
     if (searchElement.value !== '') {
       for (const row of bodyElements) {
         if (row.textContent.toLowerCase().includes(searchElement.value.toLowerCase())) {
           row.classList.add("select");
         }
       }
     }

     searchElement.value = "";
   }
 }
 