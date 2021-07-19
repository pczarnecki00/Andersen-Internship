// let data = document.getElementsByClassName('section-item');
// data[data.length -1].style.minWidth = '100%';

for (let item of document.getElementsByClassName('item')) {

    item.addEventListener('click', () => {
        
        for (let x of document.getElementsByClassName('item')) {
            if (x.classList.contains('active')) {
                x.classList.remove('active')
            }
        }

        item.classList.add('active');
    })

}