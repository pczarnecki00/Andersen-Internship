document.getElementsByTagName('body')[0].addEventListener('click', function(event){
    //Prevent form submiting
    event.preventDefault();

    //Access to input value for other variavbles
    const input = document.querySelector('.input-container__input').value;

    //Adds and deletes classes with styles for completed todo's through nodes
    const toggleFunc = function (a) {
        a.parentNode.parentNode.childNodes[1].classList.toggle('span-complete');
        a.parentNode.parentNode.childNodes[3].childNodes[1].classList.toggle('btn-hovered');
    }
    
    //Deletes whole todo's li node 
    const deleteFunc = function (b) {
        b.parentNode.parentNode.remove();
    }

    //Adds todo's to the list as a li element with it's children and input's value
    const addItem = function () {
       
        const li = document.createElement('li');
        li.classList.add('todo-list__item');

        li.innerHTML = ` <span class="todo-list__span">${input}</span>
        <div class="todo-list__btn-panel">
            <button class="btn-panel__button btn-complete btn-small">&#10003</button>
            <button class="btn-panel__button btn-delete btn-small">&#10008</button>
        </div>`;

        document.querySelector('.todo-list').append(li);
    }

    const className = event.target.className;

    //Ternery  used in order to distinguish which function should be called based on event.target.className properties
    className.includes('input-container__button')  
        ? input.trim() && addItem()
        : className.includes('btn-complete') 
            ? toggleFunc(event.target) 
            : className.includes('btn-delete') 
                ? deleteFunc(event.target) 
                : '';

});

