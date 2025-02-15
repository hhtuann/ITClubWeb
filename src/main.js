const faqItems = document.querySelectorAll(".faq-item");

faqItems.forEach((item) => {
  const question = item.querySelector(".faq-question");
  const answer = item.querySelector(".faq-answer");

  question.addEventListener("click", () => {
    answer.classList.toggle("open");
    const arrow = question.querySelector(".arrow");
    arrow.textContent = answer.classList.contains("open") ? "▲" : "▼";
  });
});

const sidebar = document.querySelector(".sidebar");
const menuButton = document.querySelector(".menu-button");
const overlay = document.querySelector(".overlay");

menuButton.addEventListener("click", function (event) {
  event.stopPropagation();
  sidebar.classList.toggle("open");
  overlay.classList.toggle("active");
});

document.addEventListener("click", function (event) {
  if (!sidebar.contains(event.target) && sidebar.classList.contains("open")) {
    sidebar.classList.toggle("open");
    overlay.classList.toggle("active");
  }
});