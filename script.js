const form = document.getElementById("form");
const nameInput = document.getElementById("username");
const emailInput = document.getElementById("email");
const nameError = document.getElementById("nameError");
const emailError = document.getElementById("emailError");
const passwordInput = document.getElementById("password");
const confirmPasswordInput = document.getElementById("password2");
const passwordError = document.getElementById("passwordError");
const confirmPasswordError = document.getElementById("confirmPasswordError");


form.addEventListener("submit", function(event){
    event.preventDefault();

    if (nameInput.value === "") {
        nameError.style.display = "block";
    } else {
        nameError.style.display = "none";
    }

    if (!isValidEmail(emailInput.value)) {
        emailError.style.display = "block";
      } else {
        emailError.style.display = "none";
      }

      if (!isValidPassword(passwordInput.value)) {
        passwordError.style.display = "block";
      } else {
        passwordError.style.display = "none";
      }
    
      if (passwordInput.value !== confirmPasswordInput.value) {
        confirmPasswordError.style.display = "block";
      } else {
        confirmPasswordError.style.display = "none";
      }
    
    
      if (nameInput.value !== "" && isValidEmail(emailInput.value) && isValidPassword(passwordInput.value) && passwordInput.value === confirmPasswordInput.value) {
        
        const userData = {
            userName: nameInput.value,
            userEmail: emailInput.value,
            userPassword : passwordInput.value
        };

        localStorage.setItem("userData", JSON.stringify(userData));
        alert("Form submitted successfully!");

        form.reset();
      }
    
});

function isValidEmail(email) {
    // Basic email validation regex
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
  }

  function isValidPassword(password) {
    const minLength = 8;
    const hasLetter = /[a-zA-Z]/.test(password);
    const hasNumber = /\d/.test(password);
    
    return password.length >= minLength && hasLetter && hasNumber;
  }