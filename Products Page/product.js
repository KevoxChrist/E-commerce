// Fetch products from JSON file and render them
async function loadProducts() {
    try {
        const response = await fetch('./product.json'); //fetching the json data
        const products = await response.json(); //Now we turn that data into a JavaScript object we can manipulate
        renderProducts(products);
    } catch (error) {
        console.error('Error loading products:', error); //Catching errors incase a product doesn't load
    }
}

function renderProducts(products) {
    const categories = { //Giving each category it's corresponding html element so later we can insert camera gear data (child elements)
        'Cine': document.getElementById('cine-products'),
        'Spherical': document.getElementById('spherical-products'),
        'Anamorphic': document.getElementById('anamorphic-products'),
        'Zoom': document.getElementById('zoom-products'),
        'Specialty': document.getElementById('specialty-products')
    };

    products.forEach(product => { // Taking each object and iterating through to insert it into it's category container
        const productCard = document.createElement('div');
        productCard.className = 'product-card';
        

        //Product card insertion and order
        productCard.innerHTML = ` 
            <a class="card" href="/">
                <img class="image-card" src="${product.img}" alt="${product.name}">
            </a>
            <div class="description-info">
                <h2 class="product-name">${product.name}</h2>
                <h3 class="product-price">$${product.price}</h3>
                <p class="product-description">${product.description}</p>
            </div>
        `;
        
        const container = categories[product.type];
        if (container) {
            container.appendChild(productCard); //Appending the product card to it's corresponding container :)
        }
    });
}

document.addEventListener('DOMContentLoaded', loadProducts);


//Footer Newsletter Validation
const newsLetterInput = document.querySelector(".newsletter-input");
const footerForm = document.querySelector(".newsletter-form");
const footerSubmit = document.querySelector(".footer-submit-btn");
const footerErrorMessage = document.querySelector(".footer-error-text");


//NewsLetter input event listener
footerForm.addEventListener("submit", (e) => {
  e.preventDefault();

  footerValidateInputs();

  let footerErrorCheck = footerErrorMessage.textContent;

  if (footerErrorCheck === "") { // checking for no error messages
    footerSubmit.textContent = "SUBSCRIBED";
    footerSubmit.style.backgroundColor = "Black";
  }
});


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



//validates email
const isValidEmail = (email) => {
  const regex =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return regex.test(String(email).toLowerCase());
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




