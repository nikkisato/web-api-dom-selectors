// new CustomEvent(type, options)
// create a container div
const dogContainer = document.createElement("div");

// this one is using options and type
const dogFound = new CustomEvent("animalfound", {
  detail: {
    name: "Corgi",
  },
});

// add an appropriate event listener
dogContainer.addEventListener("animalfound", (event) => {
  dogContainer.innerText = event.detail.name;
});

document.querySelector("body").appendChild(dogContainer);

// dispatch the events
dogContainer.dispatchEvent(dogFound);

// Found another one
// const event = new CustomEvent("build", { detail: elem.dataset.time });

// function eventHandler(event) {
//   console.log(`The time is: ${event.detail}`);

//   const timeContainer = document.createElement("div");

//   timeContainer.innerHTML = `The time is: ${event.detail}`;
//   document.querySelector("body").appendChild(timeContainer);
// }

// eventHandler();
