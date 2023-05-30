const images = document.querySelectorAll('#products img');
images.forEach(image => {
    image.addEventListener('click', function() {
        images.forEach(img => img.classList.remove('selected'));
        this.classList.add('selected');
    });
});
const productItems = document.querySelectorAll('#products > div');
productItems.forEach(item => {
    item.addEventListener('mouseenter', () => {
        item.style.backgroundColor = 'lightgray';
    });
    item.addEventListener('mouseleave', () => {
        item.style.backgroundColor = 'transparent';
    });
    item.addEventListener('click', () => {
        if (item.classList.contains('selected')) {
            item.classList.remove('selected');
        } else {
            item.classList.add('selected');
        }
    });
});
const buttons = document.querySelectorAll('#but > div');
productItems.forEach(item => {
    item.addEventListener('mouseenter', () => {
        item.style.backgroundColor = 'white';
    });
    item.addEventListener('mouseleave', () => {
        item.style.backgroundColor = 'darkorange';
    });
    item.addEventListener('click', () => {
        if (item.classList.contains('selected')) {
            item.classList.remove('selected');
        } else {
            item.classList.add('selected');
        }
    });
});