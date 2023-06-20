// Intersection Observer
// https:/wesbos.com/javascript/06-serious-practice-exercises/scroll-events-and-intersection-observer
// Listen for scroll position. Animate something when the user crosses a threshold

// Creating a div element
const bodyElement2 = document.querySelector("body");
const div2Element = document.createElement("div");
div2Element.classList.add("container", "conditions");

for (let i = 0; i < 100; i++) {
  const text = `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`;

  div2Element.append(text);
}

// appending div to body
document.querySelector("body").appendChild(div2Element);

//creating accept button
const button2Element = document.createElement("button");
button2Element.innerText = "Click to Accept";
button2Element.classList.add("conditions-button", "accept");
button2Element.disabled = true;
div2Element.appendChild(button2Element);

// querySelecting for observer
const conditionSection = document.querySelector(".conditions");
const watch = document.querySelector(".watch");
const button = document.querySelector(".accept");

// Creating a div element
function obCallback(payload) {
  console.log(payload[0].intersectionRatio);
  if (payload[0].intersectionRatio === 1) {
    button.disabled = false;
    console.log("REMOVING DISABLED");
    ob.unobserve(conditionSection.lastElementChild);
  } else {
    button.disabled = true;
  }
}

const ob = new IntersectionObserver(obCallback, {
  root: conditionSection,
  threshold: 1,
});

ob.observe(conditionSection.lastElementChild);

// vinoshopper as we scroll animate left and animate right
// things appear
//https://www.freecodecamp.org/news/scroll-animations-with-javascript-intersection-observer-api/
