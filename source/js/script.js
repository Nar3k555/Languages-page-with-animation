const cards = document.querySelectorAll(".testimonial-card");
const dots = document.querySelectorAll(".dot");
const thumbs = document.querySelectorAll(".thumbnail");

let currentIndex = 0;

function showSlide(index) {
  cards.forEach((card) => {
    card.classList.remove("active", "prev", "next");
  });

  dots.forEach((dot) => {
    dot.classList.remove("active");
  });

  thumbs.forEach((thumb) => {
    thumb.classList.remove("active");
  });

  cards[index].classList.add("active");

  dots[index].classList.add("active");

  thumbs[index].classList.add("active");

  currentIndex = index;
}

function nextSlide() {
  let next = currentIndex + 1;

  if (next >= cards.length) {
    next = 0;
  }

  showSlide(next);
}

setInterval(nextSlide, 4000);

thumbs.forEach((thumb, index) => {
  thumb.addEventListener("click", () => {
    showSlide(index);
  });
});

dots.forEach((dot, index) => {
  dot.addEventListener("click", () => {
    showSlide(index);
  });
});
