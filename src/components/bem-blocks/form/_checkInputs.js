const inputs = document.querySelectorAll('.form__input');
inputs.forEach((el) => {
    el.addEventListener('keyup', () => checkInput(el));
});
function checkInput (el) {
    el.value.length > 0 ? el.classList.add('form__input--not-empty') : el.classList.remove('form__input--not-empty');
}
