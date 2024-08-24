
let nameInput  = document.getElementById('nom');
let emailInput = document.getElementById('email')
let passwordInput = document.getElementById('password')

let errorName = document.getElementById("errorName");
let errorEmail = document.getElementById('errorEmail');
let errorPassword = document.getElementById('errorPassword');
let emailcract = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
 let specialCharPattern = /[!@#$%^&*(),.?":{}|<>]/

let submitButton = document.getElementById('submit')


submitButton.addEventListener('click', (e) => {

     e.preventDefault();

     if(nameInput.value.length < 4) {
          
          errorName.textContent = `le champ ${nameInput.name} doit dépassser 4 caractères`;
          nameInput.style.borderLeft = "3px solid red";

     } else {

          nameInput.style.borderRight = "4px solid green";
     }

     if (!emailcract.test(emailInput.value)) {
          errorEmail.textContent = "Veuillez entrer une adresse e-mail valide.";
          isValid = false;
      } else {
          
          emailInput.style.borderRight = "4px solid green"
      }

     
      if (passwordInput.value.length < 6) {
          errorPassword.textContent = "Le mot de passe doit contenir au moins 6 caractères.";
          isValid = false;
      } else if (!specialCharPattern.test(passwordInput.value)) {
          errorPassword.textContent = "Le mot de passe doit contenir au moins un caractère spécial.";
          isValid = false;
      } else {

          passwordInput.style.borderRight = "4px solid green";

     }



})