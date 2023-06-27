//On Click change the background color of the divElement
const buttonElement = document.querySelector("button");
buttonElement.addEventListener("click", changeBackgroundColor);

function changeBackgroundColor() {
  const containerBody = document.querySelector(".container");
  containerBody.style.background = randColor();
}

//hoisting
//generates a random hex color string
//https:/www.educative.io/answers/how-to-generate-a-random-color-in-javascript
function randColor() {
  return (
    "#" +
    Math.floor(Math.random() * 16777215)
      .toString(16)
      .padStart(6, "0")
      .toUpperCase()
  );
}

// possible look at the container object instead of section HOMEWORK
const sectionObject = document.getElementById("section");
const printColor = document.getElementById("printColor");

let count = 0;

const mutation = new MutationObserver((entries) => {
  if (count > 10) {
    mutation.disconnect();
    return;
  }

  for (let entry of entries) {
    if (entry.target.classList.contains("container")) {
      count++;
      printColor.innerText = entry.target.style.background;
    }
  }
});

mutation.observe(sectionObject, { attributes: true, childList: true, subtree: true });

// I've run into a problem When do i know when to stop observing????
// its a usecase, if we want to keep using the mutation observer don't disconnect
// after we successfully after one time usecase (for example changing the background color
// unmounting in react
// mutation.disconnect();

// need to use mutation observer API
// listen to mutation on the body
// print out the background color on the page
// https://developer.mozilla.org/en-US/docs/Web/API/MutationObserver

// This video helped https://www.youtube.com/watch?v=Mi4EF9K87aM
