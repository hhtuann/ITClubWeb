const faqItems = document.querySelectorAll(".faq-item");

faqItems.forEach((item) => {
  const question = item.querySelector(".faq-question");
  const answer = item.querySelector(".faq-answer");
  let isHidden = (answer.style.maxHeight === "0");
  question.addEventListener("click", (e) => {
    const arrow = question.querySelector(".arrow");
    if(isHidden) {
      answer.style.maxHeight = "1000px"
      arrow.textContent = "▲";
      isHidden = false;
    }
    else {
      answer.style.maxHeight = "0"
      arrow.textContent = "▼";
      isHidden = true;
    }
  });
});