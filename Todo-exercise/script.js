//Function to update liItem collections and add EventListener to buttons
function listeners() {
    liItem = document.getElementsByClassName('todo-list__item');
    for (let item of liItem) {

        item.childNodes[1].childNodes[0].addEventListener('click', () => {
            item.childNodes[1].childNodes[0].classList.toggle('btn-hovered')
            item.childNodes[0].classList.toggle('span-complete');
        });

        item.childNodes[1].childNodes[1].addEventListener('click', () => {
            document.querySelector('.todo-list').removeChild(item)
        })
    }
}

// Adds input.value as and li element with children and its attributes
document.querySelector('.input-container__button').addEventListener('click', () => {
    if (document.querySelector('.input-container__input').value !== '') {
        let li = document.createElement('li');
        li.classList.add('todo-list__item');

        let liSpan = document.createElement('span');
        liSpan.classList.add('todo-list__span');
        liSpan.innerHTML = document.querySelector('.input-container__input').value;

        let btnPanel = document.createElement('div');
        btnPanel.classList.add('todo-list__btn-panel');

        let btnComplete = document.createElement('button');
        btnComplete.classList.add('btn-panel__button', 'btn-complete', 'btn-small');
        btnComplete.innerHTML = "&#10003"

        let btnDelete = document.createElement('button');
        btnDelete.classList.add('btn-panel__button', 'btn-delete', 'btn-small');
        btnDelete.innerHTML = "&#10008"

        li.append(liSpan);
        li.append(btnPanel);
        btnPanel.append(btnComplete);
        btnPanel.append(btnDelete);

        document.querySelector('.todo-list').append(li);
        listeners();
    }

});

