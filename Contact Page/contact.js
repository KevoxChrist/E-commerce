const contactInformation = document.querySelectorAll(".contact-input");
const form = document.getElementById("contact-form");
const errorMessage = document.querySelectorAll(".error-text");
const submit = document.getElementById("sub-btn")

//Footer Newsletter Validation
const newsLetterInput = document.querySelector(".newsletter-input");
const footerForm = document.querySelector(".newsletter-form");
const footerSubmit = document.querySelector(".footer-submit-btn");
const footerErrorMessage = document.querySelector(".footer-error-text");

//Event listener for form
form.addEventListener("submit", (e) => {
  e.preventDefault();

   validateInputs();



  let errorCheck = ""

  for (let errorMsg of errorMessage){ //Making sure that there are no error messages

    errorCheck += errorMsg.textContent;
  }


  if(errorCheck === ""){ //If there are no error messages, then submit
    submit.textContent = "Submitted!"
    submit.style.backgroundColor = "green";
  }

});

//Sets Error of an input
const setError = (element, message) => {
  const inputControl = element.parentElement;
  const errorDisplay = inputControl.querySelector(".error-text");

  errorDisplay.textContent = message;
  // inputControl.classlist.add('error-text');
  // inputControl.classlist.remove('success-text');
};

//Sets success of an input
const setSuccess = (element) => {
  const inputControl = element.parentElement;
  const errorDisplay = inputControl.querySelector(".error-text");

  errorDisplay.textContent = "";
};
//validates email
const isValidEmail = (email) => {
  const regex =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return regex.test(String(email).toLowerCase());
};
//Validate Input
const validateInputs = () => {
  const firstName = contactInformation[0].value.replace(/[^A-Za-z]/g, '').trim(); //This regex removes anything that is not a alphabetical letter which is good since we only want the user's name.
  const lastName = contactInformation[1].value.replace(/[^A-Za-z]/g, '').trim();
  const emailValue = contactInformation[2].value.trim();
  const commentValue = contactInformation[3].value.trim(); //I used query selector so i'm calling them by index


  //First Name
  if (firstName === "") {
    setError(contactInformation[0], "First name is required");
  } else if (firstName.length < 2) {
    setError(contactInformation[0], "Name must be at least 2 characters");
  } else if (firstName.length > 20) {
    setError(contactInformation[0], "Name exceeds character limit of 20");
  } else {
    setSuccess(contactInformation[0]);
    console.log(firstName);
  }

  //Last name
  if (lastName === "") {
    setError(contactInformation[1], "Last name is required");
  } else if (lastName.length < 2) {
    setError(contactInformation[1], "Name must be at least 2 characters");
  } else if (lastName.length > 20) {
    setError(contactInformation[1], "Name exceeds character limit of 20");
  } else {
    setSuccess(contactInformation[1]);
  }

  //Email
  if (emailValue === "") {
    setError(contactInformation[2], "Email is required");
  } else if (!isValidEmail(emailValue)) {
    setError(contactInformation[2], "Provide a valid email");
  } else {
    setSuccess(contactInformation[2]);
  }


  //Comment
  if(commentValue === ""){
    setError(contactInformation[3], "Enter a comment")
  }
  else if (commentValue.length > 150) {
    setError(contactInformation[3], "Exceeds character limit of 150");
  } else if(commentValue.length < 10){
     setError(contactInformation[3], "Comment must be more than 10 characters");
  }
  
  else {
    setSuccess(contactInformation[3]);
  }
    
};



// Validate NewsLetter input
const footerValidateInputs = () => {
  const emailValue = newsLetterInput.value.trim();

  if (emailValue === "") {
    setFooterError(newsLetterInput, "Email is required");
  } else if (!isValidEmail(emailValue)) {
    setFooterError(newsLetterInput, "Provide a valid email");
  } else {
    setFooterSuccess(newsLetterInput);
  }
};

// Sets Error of an input
const setFooterError = (element, message) => {
  const inputControl = element.parentElement;
  const errorDisplay = inputControl.querySelector(".footer-error-text");
  errorDisplay.textContent = message;
};

// Sets success of an input
const setFooterSuccess = (element) => {
  const inputControl = element.parentElement;
  const errorDisplay = inputControl.querySelector(".footer-error-text");
  errorDisplay.textContent = "";
};


//NewsLetter input event listener
footerForm.addEventListener("submit", (e) => {
  e.preventDefault();

  footerValidateInputs();

  let footerErrorCheck = footerErrorMessage.textContent;

  if (footerErrorCheck === "") { // checking for no errors
    footerSubmit.textContent = "SUBSCRIBED";
    footerSubmit.style.backgroundColor = "Black";
  }
});






