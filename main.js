var button = document.querySelector('.submit');
var advice = document.querySelector('.advice');
var email = document.querySelector("#email");
const icon = document.querySelector('.icon-error');

/* function validation using regEx */
function validation (emailUser) {
  const regexEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return regexEmail.test(emailUser);
};


/* show validation input */
function showValidate () {
    
  var emailValue = email.value;

  if(validation(emailValue)){
    advice.style.visibility = 'visible';
    advice.textContent = 'Email successfully sent';
    advice.style.color = 'gray';
  } else {
      advice.style.visibility = 'visible'; 
      icon.style.visibility = 'visible';
  }
}

button.addEventListener('click', showValidate);




