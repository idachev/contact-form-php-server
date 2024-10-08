document.querySelector('.form').addEventListener('submit', function (event) {
  event.preventDefault();

  const name = document.getElementById('form-name').value.trim();
  const email = document.getElementById('form-email').value.trim();
  const message = document.getElementById('form-text').value.trim();
  const redirect_url = document.getElementById(
      'form-redirect_url').value.trim();

  let isValid = true;

  const MIN_NAME_LENGTH = 2;
  const MAX_NAME_LENGTH = 200;
  const MIN_MESSAGE_LENGTH = 50;
  const MAX_MESSAGE_LENGTH = 8000;

  const emailRegex = /^(([^<>()[\].,;:\s@"]+(.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+.)+[^<>()[\].,;:\s@"]{2,})$/i;

  document.querySelectorAll('.error-message').forEach(el => el.remove());

  const contentLanguageMeta = document.querySelector(
      'meta[http-equiv="Content-Language"]');

  const lang = contentLanguageMeta ? contentLanguageMeta.getAttribute('content')
      : 'en';

  if (name === '' || name.length < MIN_NAME_LENGTH || name.length
      > MAX_NAME_LENGTH) {
    isValid = false;
    showError('form-name',
        lang === 'bg' ? 'Името неможе да е по кратко от '
            + MIN_NAME_LENGTH + ' символа или по-дълго от '
            + MAX_NAME_LENGTH + ' символа'
            : 'Name cannot be shorter than ' + MIN_NAME_LENGTH
            + ' or longer than ' + MAX_NAME_LENGTH + ' characters');
  }

  if (!emailRegex.test(email)) {
    isValid = false;
    showError('form-email',
        lang === 'bg' ? 'Невалиден email адрес' : 'Invalid email address');
  }

  if (message === '' || message.length < MIN_MESSAGE_LENGTH || message.length
      > MAX_MESSAGE_LENGTH) {
    isValid = false;
    showError('form-text', lang === 'bg'
        ? 'Съобщението не може да е по кратко от '
        + MIN_MESSAGE_LENGTH + ' символа или по-дълго от '
        + MAX_MESSAGE_LENGTH + ' символа'
        : 'Message cannot be shorter than ' + MIN_MESSAGE_LENGTH
        + ' characters or longer than ' + MAX_MESSAGE_LENGTH + ' characters');
  }

  console.log('isValid', isValid);
  if (isValid) {

    showLoader();

    fetch(event.target.action, {
      method: 'POST',
      body: new FormData(event.target),
      headers: {
        'Accept': 'application/json'
      }
    })
    .then(response => response.json())
    .then(data => {
      console.log('data', data);

      hideLoader();

      if (data.error !== '') {
        showError('form-submit-holder', data.error);
      } else {
        window.location.href = redirect_url;
      }
    })
    .catch(error => {
      hideLoader();

      showError('form-submit-holder',
          'An error occurred while sending the form: ' + error);
    });
  }
});

function showLoader() {
  document.getElementById('contact-form-loader').style.display = 'grid';
}

function hideLoader() {
  document.getElementById('contact-form-loader').style.display = 'none';
}

function showError(inputId, message) {
  const inputElement = document.getElementById(inputId);
  const errorElement = document.createElement('div');

  errorElement.className = 'error-message';
  errorElement.textContent = message;
  inputElement.parentNode.appendChild(errorElement);
}
