
let numReviews = Number(window.localStorage.getItem("reviewCount-ls")) || 0;

numReviews++;

localStorage.setItem("reviewCount-ls", numReviews)
const reviewSpan = document.querySelector("#review-count");
if (reviewSpan) {
  reviewSpan.textContent = numReviews;
}





