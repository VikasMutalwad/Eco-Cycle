const contactForm = document.querySelector("#contact-form");

if (contactForm) {
  const formStatus = document.querySelector("#form-status");

  contactForm.addEventListener("submit", (event) => {
    event.preventDefault();
    formStatus.textContent =
      "Thanks for reaching out. This demo form is ready to be connected to a messaging service.";
    contactForm.reset();
  });
}
