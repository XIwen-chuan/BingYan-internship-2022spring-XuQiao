const form = document.getElementById('form')
const username = document.getElementById('username')
const password = document.getElementById('password')

var flag = 0;

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
    let isRequired = false;
    var itemIsRequired = new Array();
    inputArr.forEach(function(input) {
        if (input.value.trim() === '') {
            showError(input, `${getFieldName(input)} is required`);
        } else {
            showSuccess(input);
            isRequired = true
        }
    });
    return isRequired;
}


function checkLength(input, min, max) {
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
    }
}



function getFieldName(input) {
    return input.id.charAt(0).toUpperCase() + input.id.slice(1);
}


form.addEventListener('submit', function(e) {
    e.preventDefault();

    if (checkRequired([username])) {
        checkLength(username, 3, 15);
    }
    if (checkRequired([password])) {
        checkLength(password, 6, 25);
    }

});