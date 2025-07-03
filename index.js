// Accordion List
const questionsFaq = document.querySelectorAll(".faq-item h4");

function callBackQuestion() {
  this.nextElementSibling.classList.toggle("ativo");
  this.classList.toggle("ativo");
}

questionsFaq.forEach((question) => {
  question.addEventListener("click", callBackQuestion);
});

// Scroll suave
const linkDepoimentos = document.querySelector(".btn-outline");

function scrollToSection(event) {
  event.preventDefault();
  const href = event.currentTarget.getAttribute("href");
  const section = document.querySelector(href);
  section.scrollIntoView({
    behavior: "smooth",
    block: "start",
  });
}

linkDepoimentos.addEventListener("click", scrollToSection);

const linksInternos = document.querySelectorAll(".nav-menu a");

function ScrollLinks(event) {
  event.preventDefault();
  const href = event.currentTarget.getAttribute("href");
  const section = document.querySelector(href);
  section.scrollIntoView({
    behavior: "smooth",
    block: "start",
  });
}

linksInternos.forEach((link) => {
  link.addEventListener("click", ScrollLinks);
});
