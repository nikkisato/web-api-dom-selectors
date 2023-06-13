function fetchStuff() {
  fetch(window.location.href)
    .then((res) => {
      console.log("res", res);
      return res.text();
    })
    .then((text) => {
      console.log("text", text);
      const parser = new DOMParser();
      console.log(parser);
      const fetchedDom = parser.parseFromString(text, "text/html");
      const heading = fetchedDom.body.querySelector("h1");

      const div = document.createElement("div");
      div.append(heading);
      div.classList.add("parser-borders");
      document.querySelector("body").appendChild(div);
    });
}

setTimeout(fetchStuff, 3000);

// UI and data layer
