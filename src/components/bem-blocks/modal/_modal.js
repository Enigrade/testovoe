const modalBtns = document.querySelectorAll('.modal-btn');
modalBtns.forEach((el) => {
   el.addEventListener('click', () => openModal(el.getAttribute('data-target')));
});

function openModal(id) {
    document.querySelector(`#${id}`).classList.add('modal--active');
    document.querySelector(`#${id} .modal__close`).addEventListener('click', (el) => {
        el.currentTarget.closest('.modal').classList.remove('modal--active');
    });
}
