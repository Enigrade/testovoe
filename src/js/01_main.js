document.querySelectorAll('.form__select').forEach((el) => {
    new NiceSelect(el, {placeholder: el.getAttribute('title')}).clear();
});
