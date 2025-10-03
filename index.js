const newsLetterInput = document.querySelector(".newsletter-input");
const footerForm = document.querySelector(".newsletter-form");
const footerSubmit = document.querySelector(".footer-submit-btn");
const footerErrorMessage = document.querySelector(".footer-error-text");

footerForm.addEventListener("submit", (e) => {
  e.preventDefault();

  footerValidateInputs();

  let footerErrorCheck = footerErrorMessage.textContent;

  if (footerErrorCheck === "") { // checking for no errors
    footerSubmit.textContent = "SUBSCRIBED";
    footerSubmit.style.backgroundColor = "Black";
  }
});

// Sets Error of an input
const setError = (element, message) => {
  const inputControl = element.parentElement;
  const errorDisplay = inputControl.querySelector(".footer-error-text");
  errorDisplay.textContent = message;
};

// Sets success of an input
const setSuccess = (element) => {
  const inputControl = element.parentElement;
  const errorDisplay = inputControl.querySelector(".footer-error-text");
  errorDisplay.textContent = "";
};

// Validates email format
const isValidEmail = (email) => {
  const regex =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return regex.test(String(email).toLowerCase());
};

// Validate input
const footerValidateInputs = () => {
  const emailValue = newsLetterInput.value.trim();

  if (emailValue === "") {
    setError(newsLetterInput, "Email is required");
  } else if (!isValidEmail(emailValue)) {
    setError(newsLetterInput, "Provide a valid email");
  } else {
    setSuccess(newsLetterInput);
  }
};
