const inputEmail = document.getElementById('form-mail');
const buttonSubmit = document.querySelector('.form-submit');

buttonSubmit.addEventListener('click', (e) => {
    e.preventDefault();
    const msgError = document.querySelector('.mail-error');
    inputEmail.style.border = '1px solid #a80505';
    if(inputEmail.value === ''){
        msgError.innerHTML = 'Campos vacios';
        msgError.style.display = 'block';
    }else {
        msgError.innerHTML = 'Check your email please';
        msgError.style.display = 'block';
    }
    setTimeout(() => {
        inputEmail.style.border = 'none';
        msgError.style.display = 'none';
        inputEmail.value = '';
    }, 2000);
});

AOS.init();