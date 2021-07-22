const toggleTodoComplete = function (elem) {
    document.querySelectorAll('.todo-list__text').forEach(item => elem.dataset.id == item.dataset.id && elem.querySelector('.todo-list__text').classList.toggle('text--complete'), elem.querySelector('.btn--complete').classList.toggle('btn--hovered'));

}

const deleteTodo = function (elem) {
    document.querySelectorAll('.todo-list__text').forEach(item => elem.dataset.id == item.dataset.id && elem.remove());
}

const btnsAddEventHandler = (elem) => {
    elem.querySelector('.btn--complete').addEventListener('click', function () {
        toggleTodoComplete(elem);
    });

    elem.querySelector('.btn--delete').addEventListener('click', function () {
        deleteTodo(elem);
    });

}

document.querySelector('.todo-form__button').addEventListener('click', function (event) {
    event.preventDefault();

    const toDoInput = document.querySelector('.todo-form__input').value.trim();

    const addTodo = function () {
        const elementId = Date.now();
        const li = document.createElement('li');

        li.setAttribute('data-id', elementId)
        li.classList.add('todo-list__item');

        li.innerHTML = ` <span data-id="${elementId}" class="todo-list__text">${toDoInput}</span>
        <div class="todo-list__btn-panel">
            <button name="addButton" data-id="${elementId} " class="button btn--complete btn--small">&#10003</button>
            <button data-id="${elementId} "class="button btn--delete btn--small">&#10008</button>
        </div>`;
        btnsAddEventHandler(li);

        document.querySelector('.todo-list').append(li);
    }


    toDoInput && addTodo();

})

