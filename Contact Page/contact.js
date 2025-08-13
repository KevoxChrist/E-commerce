const contactInformation = document.querySelectorAll(".contact-input");
const form = document.getElementById("contact-form");
const errorMessage = document.querySelectorAll("#error-text");

console.log(contactInformation[1]);


//event listener for form
form.addEventListener("submit", (e) => {
  e.preventDefault();

  validateInputs();

  errorMessage.forEach(error, () => {
    if (!error.value === "") {
    } else {
      console.log("Submitted");
    }
  });
});

//sets error
const setError = (element, message) => {
  const inputControl = element.parentElement;
  const errorDisplay = inputControl.querySelector("#error-text");

  errorDisplay.textContent = message;
  // inputControl.classlist.add('error-text');
  // inputControl.classlist.remove('success-text');
};

setSuccess = (element) => {
  const inputControl = element.parentElement;
  const errorDisplay = inputControl.querySelector("#error-text");

  errorDisplay.textContent = "";
};
//validates email
const isValidEmail = (email) => {
  const regex =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return regex.test(String(email).toLowerCase());
};

const validateInputs = () => {
  const firstName = contactInformation[0].value.trim();
  const lastName = contactInformation[1].value.trim();
  const emailValue = contactInformation[2].value.trim();
  const commentValue = contactInformation[3].value.trim(); //haha I used query selector so i'm calling them by index

  //First Name
  if (firstName === "") {
    setError(contactInformation[0], "First name is required");
  } else if (firstName.length < 2) {
    setError(contactInformation[0], "Name must be at least 2 characters");
  } else if (firstName.length > 20) {
    setError(contactInformation[0], "Name exceeds character limit of 20");
  } else {
    setSuccess(contactInformation[0]);
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

  if (commentValue.length > 150) {
    setError(contactInformation[3], "Exceeds character limit of 150");
  } else {
    setSuccess(contactInformation[3]);
  }
};

//Every input validation
// contactInformation.forEach(input =>{
//     input.addEventListener("blur", ()=>{

//         const inputVal = [];
//         let errorText = null;

//         //IF THERE IS A VALID ENTRY PUT THE INPUT VALUE INSIDE A ARRAY
//         if(input.value !== ""){
//             //console.log("False: No Entry")
//             inputVal.push(input.value.trim());
//         }
//         else { // error message for no entry
//              console.log("False: No Entry");
//                 errorText = document.createElement('h5')
//                 errorText.textContent = 'Input must be more than 1 character'
//                 const contact = document.querySelector(".contact-section")
//                 contact.append(errorText);
//         }

//         //console.log(inputVal)

//         for(let value of inputVal){

//              if(value === ""){

//              }
//              else{

//                  console.log("True: Valid String")
//                 console.log(inputVal)
//             }

//          }

//     })
// })
