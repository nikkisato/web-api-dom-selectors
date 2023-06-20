function eyDropper() {
  document.getElementById("start-button").addEventListener("click", async () => {
    const resultElement = document.getElementById("result");

    if (!window.EyeDropper) {
      resultElement.textContent = "Your browser does not support the EyeDropper API";
      return;
    }

    const eyeDropper = await new EyeDropper();

    eyeDropper
      .open()
      .then((result) => {
        resultElement.textContent = result.sRGBHex;
        resultElement.style.backgroundColor = result.sRGBHex;
      })
      .catch((e) => {
        resultElement.textContent = e;
      });
  });
}

//https://developer.mozilla.org/en-US/docs/Web/API/EyeDropper
