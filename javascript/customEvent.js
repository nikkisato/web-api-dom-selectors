// new CustomEvent(type, options)

const dogFound = new CustomEvent("animalfound", {
  detail: {
    name: "dog",
  },
});

// add an appropriate event listener
obj.addEventListener("animalfound", (e) => console.log(e.detail.name));

// dispatch the events
obj.dispatchEvent(dogFound);

const event = new CustomEvent("build", { detail: elem.dataset.time });

function eventHandler(e) {
  console.log(`The time is: ${e.detail}`);

  const timeContainer = document.createElement("div");

  timeContainer.innerHTML = `The time is: ${e.detail}`;
  document.querySelector("body").appendChild(timeContainer);
}

eventHandler();
