const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const cpassword = document.getElementById('cpassword');

//Show input error message
function showError(input, message){
    const formControl = input.parentElement;
    formControl.className = 'form-control error';
    const small = formControl.querySelector('small');
    small.innerText = message;
}

//Show Success Outline
function showSuccess(input){
    const formControl = input.parentElement;
    formControl.className = 'form-control success';
}

//Check Valid Email
function isValidEmail(email){
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

form.addEventListener('submit', function(event){
    event.preventDefault();
    if(username.value === ''){
        showError(username, 'Username is required');
    } else  {
        showSuccess(username);
    }

    if(email.value === ''){
        showError(email, 'Email is required');
    } else if(!isValidEmail(email.value)){
        showError(email, 'Email is invalid');
    } else {
        showSuccess(email)
    }

    if(password.value === ''){
        showError(password, 'Password is required');
    } else {
        showSuccess(password);
    }

    if(cpassword.value === ''){
        showError(cpassword, 'Confirm your Password');
    } else {
        showSuccess(cpassword);
    }
});