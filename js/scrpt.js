const inputs = document.querySelectorAll('input');

function isTrue(){
    inputs.forEach(el => {
        if(el.checked === true) {
            console.log(el.name);
        }
    });
}

document.querySelector('.btn__filter').addEventListener('click', isTrue);