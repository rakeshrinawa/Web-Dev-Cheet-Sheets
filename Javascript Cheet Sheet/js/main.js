// Grabbing all the HTML elements into JS
const myForm = document.querySelector('#my-form');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const msg = document.querySelector('.msg');
const userList = document.querySelector('#users');
ul = document.querySelector('.items');

// Adding click Event
myForm.addEventListener('submit', onSubmit);

function onSubmit(e) {
    e.preventDefault();
    if (nameInput.value === '' || emailInput === '') {
        msg.classList.add('error');
        msg.innerHTML = 'Please fill all the fields.';
        setTimeout(() => msg.remove(), 3000);
    } else {
        ul.remove();
        const li = document.createElement('li');
        li.appendChild(document.createTextNode(`${nameInput.value}: ${emailInput.value}`));
        userList.appendChild(li);
        // Clear fields
        nameInput.value = '';
        emailInput.value = ''
    }
}