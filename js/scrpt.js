const inputs = document.querySelectorAll('input');
const carousels= document.querySelectorAll('.carousel__img');
const carouselBtns = document.querySelectorAll('.carousel__box');
const carouselTracker = document.querySelector('.carousel__tracker');


const carouselImages = ['../img/carousel-1.jpg', '../img/carousel-2.jpg' , '../img/carousel-3.jpg'];


//Remove width from carousel img
function removeOpacity () {
    carousels.forEach(el => {
        el.style.opacity = '0';
    })
} 

// Change carousel on click
carouselTracker.addEventListener('click', function(e) {
    if(e.target.classList.contains('carousel__box')){
        removeOpacity();
        
        let element = +(e.target.classList[1].slice(-1)) - 1;
        carousels[element].style.opacity = "1";
    }
    e.preventDefault();
})









function isTrue(){
    inputs.forEach(el => {
        if(el.checked === true) {
            console.log(el.name);
        }
    });
}

// document.querySelector('.btn__filter').addEventListener('click', isTrue);

// Year current
document.getElementById('year').innerText = new Date().getFullYear();