const form = document.querySelector('.contact1-form');
const name = document.querySelector('input[name="nom"]');
const phone = document.querySelector('input[name="telephone"]');
const email = document.querySelector('input[name="email"]');
const subject = document.querySelector('input[name="sujet"]');
const message = document.querySelector('textarea[name="message"]');
const checkbox = document.querySelector('input[name="rgpd"]');

function showValidate(input) {
  const thisAlert = input.parentElement;
  thisAlert.classList.add('alert-validate');
}

function hideValidate(input) {
  const thisAlert = input.parentElement;
  thisAlert.classList.remove('alert-validate');
}

function validateForm() {
  const mailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  let check = true;

  if (name.value.trim() === '') {
    showValidate(name);
    check = false;
  }
  if (email.value.trim().match(mailRegex) == null) {
    showValidate(email);
    check = false;
  }
  if (phone.value.trim() === '') {
    showValidate(phone);
    check = false;
  }
  if (subject.value.trim() === '') {
    showValidate(subject);
    check = false;
  }
  if (message.value.trim() === '') {
    showValidate(message);
    check = false;
  }

  if (checkbox.checked === false) {
    showValidate(checkbox);
    check = false;
  }

  return check;
}

if (form) {
  const inputs = document.querySelectorAll('.input1');
  inputs.forEach(input => {
    input.addEventListener('blur', () => {
      hideValidate(input);
    });
  });
  const checkbox = document.querySelector('input[name="rgpd"]');
  checkbox.addEventListener('change', () => {
    if (checkbox.checked) {
      hideValidate(checkbox);
    }
  });

  form.addEventListener('submit', function(event) {
    const validated = validateForm();
    if (validated === false) {
      event.preventDefault();
    } else {
      form.submit();
    }
  });
}
