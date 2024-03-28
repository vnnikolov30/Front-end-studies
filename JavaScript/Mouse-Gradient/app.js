function attachGradientEvents() {
  const gradientElement = document.getElementById("gradient");
  const resultElement = document.getElementById("result");

  gradientElement.addEventListener("mousemove", (ev) => {
    const currentWidth = ev.offsetX;
    const elementWidth = ev.target.clientWidth;
    const progress = Math.floor((currentWidth / elementWidth) * 100);

    resultElement.textContent = `${progress}%`;
  });
}
