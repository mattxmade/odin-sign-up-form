const _password = document.querySelector('input[name=password]');
const _validate = document.querySelector('input[name=confirm]');
const singupForm = document.getElementById('signup');

const passwordContainer = document.querySelector('.password-cont')
const strengthMessage = document.querySelector('.strength-message');

const messageContainer = document.querySelector('.confirm-cont');
const errorMessg = document.querySelector('.error-message');

const infoBox = document.getElementById('modal');
const close = document.querySelector('.js-close-modal');

let modalOpen = false;

const inputHelper = document.querySelector('.js-info');
inputHelper.addEventListener('click', () => {
  infoBox.showModal();
  modalOpen = true;
});

close.addEventListener('click', () => {
  infoBox.close();
  modalOpen = false
});

_password.addEventListener('change', (e) => {

  strengthMessage.classList.add('alert-message-visible');

  if (e.target.value.length === 0) {
    strengthMessage.classList.remove('alert-message-visible');
  }

  else if (e.target.value.length > 0 && e.target.value.length <= 8) {
    strengthMessage.textContent = '* Password is too short';
    strengthMessage.style.color = 'red';
    passwordContainer.appendChild(strengthMessage);
  }
  else if (e.target.value.length > 8 && e.target.value.length <= 12) {

    strengthMessage.textContent = '* Password is weak';
    strengthMessage.style.color = 'black';
    passwordContainer.appendChild(strengthMessage);
  }

  else if (e.target.value.length > 12 && e.target.value.length <= 16) {

    strengthMessage.textContent = '* Password is strong';
    strengthMessage.style.color = 'darkgreen';
    passwordContainer.appendChild(strengthMessage);
  }

  else {
    strengthMessage.textContent = '* Password is very strong';
    strengthMessage.style.color = 'darkgreen';
    passwordContainer.appendChild(strengthMessage);    
  }  
  
});

singupForm.addEventListener('submit', (e) => {
  e.preventDefault();

  if (_password.value === _validate.value) {
    console.log('passwords match');

    if (_password.value.length < 8) {

      errorMessg.textContent = '* Password is too short';
      messageContainer.appendChild(errorMessg);

      _validate.classList.add('error');
      errorMessg.classList.add('alert-message-visible');  
    }
    else {
      _validate.classList.remove('error');
      errorMessg.classList.remove('alert-message-visible');   
    }

  } 
  
  else {
    console.log('passwords do not match');
    errorMessg.textContent = '* Passwords do not match';
    messageContainer.appendChild(errorMessg);

    _validate.classList.add('error');
    errorMessg.classList.add('alert-message-visible');
  }

  
});