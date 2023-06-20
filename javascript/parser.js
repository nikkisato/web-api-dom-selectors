function fetchStuff() {
  fetch(window.location.href)
    .then((res) => {
      return res.text();
    })
    .then((text) => {
      const data = getData(text);
      updateUI(data);
    });
}

function getData(text) {
  const parser = new DOMParser();
  const fetchedDom = parser.parseFromString(text, "text/html");
  // ask Chris about this return? is there a better way to do this?
  return (heading = fetchedDom.body.querySelector("h1"));
}

function updateUI(heading) {
  const div = document.createElement("div");
  div.append(heading);
  div.classList.add("parser-borders");
  document.querySelector("body").appendChild(div);
}

setTimeout(fetchStuff, 3000);
