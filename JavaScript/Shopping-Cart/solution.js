function solve() {
  const addProductButton = document.querySelectorAll("button.add-product");
  const textAreaElement = document.querySelector("textarea");
  const checkoutButton = document.querySelector("button.checkout");
  let totalPrice = 0;
  let products = new Set();

  // GET ALL THE BUTTONS AND THE ASSOCIATED PRODUCTS
  const buttonsArray = Array.from(addProductButton);

   buttonsArray.forEach((button) => {
    const productElement = button.closest(".product");
    // const productElement = button.parentElement.parentElement;
    productElement.addEventListener("click", () => {
      // PRODUCT PRICE
      const productPrice = Number(
        productElement.querySelector(".product-line-price").textContent
      );
      totalPrice += productPrice;

      //PRODUCT NAME
      const productName =
        productElement.querySelector(".product-title").textContent;
      products.add(productName);

      //ADD TO TEXT AREA
      textAreaElement.textContent += `Added ${productName} for ${productPrice.toFixed(2)} to the cart.\n`;
    });
  });
  // CHECKOUT BUTTON FUNCTIONALITY

  checkoutButton.addEventListener("click", () => {
    buttonsArray.forEach(button => button.setAttribute("disabled", "disabled"));
    checkoutButton.setAttribute("disabled", "disabled");

    const list = Array.from(products).join(', ');
    textAreaElement.textContent += `You bought ${list} for ${totalPrice.toFixed(2)}.`;
  });
}
