const backToTopButton = document.querySelector(".backToTop");
const firstSlide = document.querySelector("#slide1");

const goToTop = (e) => {
  e.preventDefault();
  firstSlide.scrollIntoView({ behavior: "smooth" });
};

backToTopButton.addEventListener("click", goToTop);
