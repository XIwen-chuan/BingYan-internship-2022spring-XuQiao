const form = document.getElementById('form')
const username = document.getElementById('username')
const password = document.getElementById('password')
const password2 = document.getElementById('password2')
const submBtn = document.getElementsByTagName('button')

let flag01, flag02, flag03;

function showError(input, message) {
    const formControl = input.parentElement;
    formControl.className = 'form-control error';
    const small = formControl.querySelector('small');
    small.innerText = message;
}

function showSuccess(input) {
    const formControl = input.parentElement;
    formControl.className = 'form-control success';
}

function checkRequired(inputArr) {
    let result = false;
    var itemIsRequired = new Array();
    inputArr.forEach(function(input) {
        if (input.value.trim() === '') {
            showError(input, `${getFieldName(input)} is required`);
        } else {
            showSuccess(input);
            isRequired = true
        }
    });
    return result;
}

function checkLength(input, min, max) {
    let result = false;
    if (input.value.length < min) {
        showError(
            input,
            `${getFieldName(input)} must be at least ${min} characters`
        );
    } else if (input.value.length > max) {
        showError(
            input,
            `${getFieldName(input)} must be less than ${max} characters`
        );
    } else {
        showSuccess(input);
        result = true
    }
    return result;
}

function checkPasswordsMatch(input1, input2) {
    let result = false;
    if (input1.value !== input2.value) {
        showError(input2, 'Passwords do not match');
    } else { result = true; }
    return result;
}

function getFieldName(input) {
    return input.id.charAt(0).toUpperCase() + input.id.slice(1);
}

submBtn.addEventListener('click', function(e) {

    if (checkRequired([username])) {
        flag01 = checkLength(username, 3, 15);
    }
    if (checkRequired([password])) {
        flag02 = checkLength(password, 6, 25);
    }
    if (checkRequired([password2])) {
        flag03 = checkPasswordsMatch(password, password2);
    }

    if (flag01 && flag02 && flag03) {} else { e.preventDefault() }

});