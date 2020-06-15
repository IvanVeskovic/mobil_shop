const inputs = document.querySelectorAll('input');
const carousels= document.querySelectorAll('.carousel__img');
const carouselBtns = document.querySelectorAll('.carousel__box');
const carouselTracker = document.querySelector('.carousel__tracker');


const carouselImages = ['../img/carousel-1.jpg', '../img/carousel-2.jpg' , '../img/carousel-3.jpg'];


//Remove width from carousel img
function removeWidth () {
    carousels.forEach(el => {
        el.style.width = '0';
    })
} 

// Change carousel on click
carouselTracker.addEventListener('click', function(e) {
    if(e.target.classList.contains('carousel__box')){
        removeWidth();
        
        let element = +(e.target.classList[1].slice(-1)) - 1;
        carousels[element].style.width = "100%";
    }
    e.preventDefault();
})


// function start() {

//     setTimeout(function() {
//         console.log('Hello My Infinite Loop Execution');

//       // Again
//       start();

//       // Every 3 sec
//     }, 3000);
// }

// // Begins
// start();


autoScrollCarousel();










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