// Intersection Observer
// https:/wesbos.com/javascript/06-serious-practice-exercises/scroll-events-and-intersection-observer
// Listen for scroll position. Animate something when the user crosses a threshold

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

// again this guy helped again https://www.youtube.com/watch?v=2IbRtjez6ag

const cards = document.querySelectorAll(".card");

const observer2 = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      entry.target.classList.toggle("show", entry.isIntersecting);
      // could add more classes left or right to determine which way to animate
      if (entry.isIntersecting) observer2.unobserve(entry.target);
    });
  },
  {
    threshold: 1,
  }
);

cards.forEach((card) => {
  observer2.observe(card);
});
