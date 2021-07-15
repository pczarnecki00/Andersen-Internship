for (let item of document.getElementsByClassName('li-item')) {

    item.addEventListener('click', () => {
        
        for (let x of document.getElementsByClassName('li-item')) {
            if (x.classList.contains('active')) {
                x.classList.remove('active')
            }
        }

        item.classList.add('active');
    })
}