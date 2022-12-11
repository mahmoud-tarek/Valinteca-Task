import FormValidator from './modules/FormValidator.mod.js';
import DOM from './modules/DOM.mod.js';

const registerForm = document.getElementById('registerForm');
const apiUrl = 'https://goldblv.com/api/hiring/tasks/register';

registerForm.addEventListener('submit', async (event) => {
    event.preventDefault();

    // Remove All Errors
    document.querySelectorAll('.error').forEach((error) => error.remove());

    const errors = [];
    // Request Body
    const body = {};

    FormValidator.FEILDS.forEach((feild) => {
        let isValid = false;
        const value = registerForm[feild.name].value;

        if (Reflect.has(feild, 'method')) {
            isValid = feild.method({
                form: registerForm,
                value
            });
        } else {
            isValid = FormValidator.isValid({
                name: feild.name,
                value
            });
        }

        if (isValid) {
            body[feild.name] = value;
        } else {
            errors.push(feild);
        }
    });

    if (errors.length > 0) {
        // Form has Errors
        errors.forEach((error) => DOM.displayError(error, registerForm[error.name]));

    } else {
        // Form has no Errors

        // add body type
        body.type = 'application/json';

        // Send Data to API
        const response = await fetch(apiUrl, {
            method: 'POST',
            mode: 'no-cors',
            body
        });

        console.log(response);

        // Bad Response from API
        // if (response?.ok) {
        localStorage.setItem('email', body.email);
        location = 'success.html';
        // } else {
        // Display API Errors
        // }

    }
});
