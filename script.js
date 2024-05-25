document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector("form");
  const firstNameInput = document.getElementById("firstname");
  const lastNameInput = document.getElementById("lastname");
  const emailInput = document.getElementById("formEmail");
  const radioInputs = document.querySelectorAll('input[name="selectbox"]');
  const messageInput = document.getElementById("message");
  const termsCheckbox = document.getElementById("check");
  const General=document.getElementById("General");
  const Request=document.getElementById("Request");

  const showError = (input) => {
    input.nextElementSibling.style.opacity = 1;
  };

  const hideError = (input) => {
    input.nextElementSibling.style.opacity = 0;
  };

  const validateInput = (input) => {
    if (input.value.trim() === "") {
      showError(input);
    } else {
      hideError(input);
    }
  };

  const validateRadio = () => {
    let isChecked = false;
    radioInputs.forEach((radio) => {
      if (radio.checked) {
        isChecked = true;
      }
    });
    const radioError = document.querySelector(".Mainoptions .error");
    if (!isChecked) {
      radioError.style.opacity = 1;
    } else {
      radioError.style.opacity = 0;
    }
    return isChecked;
  };

  const validateTerms = () => {
    const termsError = document.querySelector(".term .error");
    if (!termsCheckbox.checked) {
      termsError.style.opacity = 1;
      return false;
    } else {
      termsError.style.opacity = 0;
      return true;
    }
  };

  firstNameInput.addEventListener("input", () => validateInput(firstNameInput));
  lastNameInput.addEventListener("input", () => validateInput(lastNameInput));
  emailInput.addEventListener("input", () => validateInput(emailInput));
  messageInput.addEventListener("input", () => validateInput(messageInput));
  termsCheckbox.addEventListener("change", validateTerms);

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    validateInput(firstNameInput);
    validateInput(lastNameInput);
    validateInput(emailInput);
    validateInput(messageInput);
    const isRadioValid = validateRadio();
    const isTermsValid = validateTerms();

    if (
      firstNameInput.value.trim() &&
      lastNameInput.value.trim() &&
      emailInput.value.trim() &&
      messageInput.value.trim() &&
      isRadioValid &&
      isTermsValid
    ) {
      alert("Form Submitted");
      if(alert){
        window.location.reload();}
    }
  });
});
