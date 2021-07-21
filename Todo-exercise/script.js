const toggleFunc = function (a) {
    let span = a.parentNode.parentNode;
    span.childNodes[0].classList.toggle('span-complete');
    span.childNodes[1].childNodes[0].classList.toggle('btn-hovered')
}

const deleteFunc = function (b) {
    b.parentNode.parentNode.remove();
}

const addItem = function () {
    let li = document.createElement('li');
    li.classList.add('todo-list__item');

    let liSpan = document.createElement('span');
    liSpan.classList.add('todo-list__span');
    liSpan.innerHTML = document.querySelector('.input-container__input').value;

    let btnPanel = document.createElement('div');
    btnPanel.classList.add('todo-list__btn-panel');

    let btnComplete = document.createElement('button');
    btnComplete.classList.add('btn-panel__button', 'btn-complete', 'btn-small');
    btnComplete.innerHTML = "&#10003";
    btnComplete.setAttribute('onClick', "toggleFunc(this)")

    let btnDelete = document.createElement('button');
    btnDelete.classList.add('btn-panel__button', 'btn-delete', 'btn-small');
    btnDelete.innerHTML = "&#10008";
    btnDelete.setAttribute('onClick', 'deleteFunc(this)')

    li.append(liSpan);
    li.append(btnPanel);
    btnPanel.append(btnComplete);
    btnPanel.append(btnDelete);

    document.querySelector('.todo-list').append(li);
}

document.querySelector('.input-container__button').addEventListener('click', function () {
    let input = document.querySelector('.input-container__input').value;

    input.trim() && addItem();
}
);

