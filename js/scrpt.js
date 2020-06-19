const inputCheckbox = document.querySelectorAll('.checkbox');
const carousels= document.querySelectorAll('.carousel__img');
const carouselBtns = document.querySelectorAll('.carousel__box');
const carouselTracker = document.querySelector('.carousel__tracker');

const mobilesContainer = document.querySelector('.mobiles');

const filterMin = document.getElementById('price-min').value;
const filterMax = document.getElementById('price-max').value;

const cartBox = document.querySelector('.cart__box');
const quantityCartElements = document.querySelectorAll('.quantity-mobile');





const carouselImages = ['../img/carousel-1.jpg', '../img/carousel-2.jpg' , '../img/carousel-3.jpg'];

// Simualtion database
const mobileDB = [
        // Samsung
    {
        brand: 'Samsung',
        model: 'Galaxy S9+',
        price: 485,
        cpu: 'Octa-core 4x2.8GHz + 4x1.7GHz',
        ram: 6,
        space: 64,
        screen: '"6.2',
        camera: '12MP + 12MP / 8MP',
        img: ('img/mobiles/Samsung_Galaxy_S9.jpg')
    },
    {
        brand: 'Samsung',
        model: 'Galaxy A20e',
        price: 159,
        cpu: 'Octa-core 2x1.6GHz + 6x1.35GHz',
        ram: 3,
        space: 64,
        screen: '"5.8',
        camera: '13MP + 5MP / 8MP',
        img: ('img/mobiles/Samsung_Galaxy_A20e.jpg')
    },
    {
        brand: 'Samsung',
        model: 'Galaxy Note 10 Lite',
        price: 470,
        cpu: 'Octa-core 4x2.7GHz + 4x1.7GHz',
        ram: 6,
        space: 128,
        screen: '"6.2',
        camera: '12MP + 12MP + 12MP / 32MP',
        img: ('img/mobiles/Samsung_Galaxy_Note_10.jpg')
    },
    {
        brand: 'Samsung',
        model: 'Galaxy A10S',
        price: 152,
        cpu: 'Octa-core 4x2.73GHz + 2x2.31GHz + 2x1.95GHz',
        ram: 2,
        space: 32,
        screen: '"6.2',
        camera: '13MP + 2MP / 8MP',
        img: ('img/mobiles/Samsung_Galaxy_A10s.jpg')
    },
    {
        brand: 'Samsung',
        model: 'Galaxy S10+',
        price: 649,
        cpu: 'Octa-core 4x2.73GHz + 2x2.31GHz + 2x1.95GHz',
        ram: 8,
        space: 128,
        screen: '"6.4',
        camera: '12MP + 12MP + 16MP / 10MP + 8MP',
        img: ('img/mobiles/Samsung_Galaxy_S10_Plus_Prism.jpg')
    },
    // Apple
    {
        brand: 'Apple',
        model: 'Iphone 11',
        price: 755,
        cpu: 'A13 Bionic Hexa-core',
        ram: 4,
        space: 128,
        screen: '"6.1',
        camera: '12MP + 12MP / 12MP',
        img: ('img/mobiles/Apple_iPhone_11_Black_Front.jpg.jpg')
    },
    {
        brand: 'Apple',
        model: 'Iphone 8',
        price: 465,
        cpu: 'A11 Bionic Hexa-core',
        ram: 2,
        space: 64,
        screen: '"4.7',
        camera: '12MP / 7MP',
        img: ('img/mobiles/Apple_iPhone_8_Gold_Front.jpg.jpg')
    },
    {
        brand: 'Apple',
        model: 'Iphone XS',
        price: 615,
        cpu: 'A12 Bionic Hexa-core',
        ram: 4,
        space: 64,
        screen: '"5.8',
        camera: '12MP + 12MP / 7MP',
        img: ('img/mobiles/Apple_iPhone_XS-XS_Max_Grey_Front.jpg.jpg')
    },
    {
        brand: 'Apple',
        model: 'Iphone 11 Pro',
        price: 1235,
        cpu: 'A13 Bionic Hexa-core',
        ram: 4,
        space: 512,
        screen: '"5.8',
        camera: '12MP + 12MP + 12MP / 12MP',
        img: ('img/mobiles/Apple_iPhone_11_Pro-Max_Gold_Front.jpg.jpg')
    },

    // Xiaomi 
    {
        brand: 'Xiaomi',
        model: 'Mi 9T',
        price: 280,
        cpu: 'Octa-core 2x2.2GHz + 6x1.8GHz',
        ram: 6,
        space: 64,
        screen: '"6.39',
        camera: '48MP + 13MP + 18MP / 20MP',
        img: ('img/mobiles/Xiaomi_Mi_9T_Glacier_Blue_Fornt.jpg.jpg')
    },
    {
        brand: 'Xiaomi',
        model: 'Redmi Note 8 Pro',
        price: 227,
        cpu: 'Octa-core 2x2.05GHz + 6x2.0GHz',
        ram: 6,
        space: 64,
        screen: '"6.53',
        camera: '64MP + 8MP + 2MP + 2MP / 20MP',
        img: ('img/mobiles/Xiaomi_Redmi_Note_8_Pro_Deep_Sea_Blue_Front.jpg.jpg')
    },
    {
        brand: 'Xiaomi',
        model: 'Redmi Note 9 Pro',
        price: 257,
        cpu: 'Octa-core 2x2.3GHz + 6x1.8GHz',
        ram: 6,
        space: 64,
        screen: '"6.67',
        camera: '64MP + 8MP + 2MP + 2MP / 16MP',
        img: ('img/mobiles/Xiaomi_Redmi_Note_9_Pro_Grey_Front.jpg.jpg')
    },
    {
        brand: 'Xiaomi',
        model: 'Mi Note 10',
        price: 439,
        cpu: 'Octa-core 2x2.2GHz + 6x1.8GHz',
        ram: 6,
        space: 128,
        screen: '"6.47',
        camera: '108MP + 12MP + 5MP + 20MP + 2MP / 32MP',
        img: ('img/mobiles/Xiaomi_Mi_Note-Pro_10_Black_Front.jpg.jpg')
    },
    {
        brand: 'Xiaomi',
        model: 'Mi Mix 2',
        price: 230,
        cpu: 'Octa-core 4x2.45GHz + 4x1.9GHz',
        ram: 8,
        space: 128,
        screen: '"5.99',
        camera: '12MP / 5MP',
        img: 'img/mobiles/Xiaomi_Mi_Mix_2_White_Front.jpg.jpg'
    },

    // Huawei
    {
        brand: 'Huawei',
        model: 'P30 Pro',
        price: 850,
        cpu: 'Octa-core 2x2.6GHz + 2x1.92GHz + 4x1.8GHz ',
        ram: 8,
        space: 256,
        screen: '"6.47',
        camera: '40MP + 20MP + 8MP / 32MP',
        img: 'img/mobiles/Huawei_P30_Pro_Aurora_Blue_Front.jpg.jpg'
    },
    {
        brand: 'Huawei',
        model: 'P40 Lite',
        price: 239,
        cpu: 'Octa-core 2x2.27GHz + 6x1.88GHz',
        ram: 6,
        space: 128,
        screen: '"6.4',
        camera: '48MP + 8MP + 2x2MP / 32MP',
        img: 'img/mobiles/Huawei_P40_Lite_Black_Front.jpg.jpg'
    },
    {
        brand: 'Huawei',
        model: 'Y6',
        price: 123,
        cpu: 'Quad-core 2.0GHz',
        ram: 2,
        space: 32,
        screen: '"6.09',
        camera: '13MP / 8MP',
        img: 'img/mobiles/Huawei_Y6_(2019)_Black_Front.jpg.jpg'
    },
    {
        brand: 'Huawei',
        model: 'P30',
        price: 590,
        cpu: 'Octa-core 2x2.6GHz + 2x1.92GHz + 4x1.8GHz ',
        ram: 6,
        space: 128,
        screen: '"6.1',
        camera: '40MP + 16MP + 8MP / 32MP',
        img: 'img/mobiles/Huawei_P30_Black_Front.jpg.jpg'
    },
    {
        brand: 'Huawei',
        model: 'P40',
        price: 609,
        cpu: 'Octa-core 2x2.6GHz + 2x2.36GHz + 4x1.95GHz ',
        ram: 8,
        space: 128,
        screen: '"6.1',
        camera: '50MP + 16MP + 8MP / 32MP + 3D',
        img: 'img/mobiles/Huawei_P40_Gold_Front.jpg.jpg'
    },
]

function addMobile(brand, model, price, cpu, ram, space, screen, camera, imgUrl) {
    let mobileContainer = document.querySelector('.mobiles');

    let mobile = document.createElement('div');
    mobile.classList.add('mobile');

    mobile.innerHTML = `
    <img src="${imgUrl}" alt="Mobile" class="mobile__img">
    <div class="mobile__brand">${brand} <span class="mobile__model">${model}</span></div>
    <div class="mobile__specs">
        <div class="mobile__price">
            ${price}&euro;
        </div>
        <div class="mobile__box">
            CPU: <span class="mobile__cpu">${cpu}</span>
        </div>
        <div class="mobile__box">
            RAM: <span class="mobile__ram">${ram}GB</span>
        </div>
        <div class="mobile__box">
            Internal Space: <span class="mobile__space">${space}GB</span>
        </div>
        <div class="mobile__box">
            Screen: <span class="mobile__screen">${screen}</span>
        </div>
        <div class="mobile__box">
            Camera: <span class="mobile__camera">${camera}</span>
        </div>
    </div>
    <div class="buttons">
        <a href="#" class="btn btn--main btn-more">More</a>
        <a href="#" class="btn btn--second btn-buy">Buy</a>
    </div>`;

    mobileContainer.appendChild(mobile);
}

function importDbMobToUI(){
    mobileDB.forEach(el => {
        [brand, model, price, cpu, ram, space, screen, camera, imgUrl] = Object.values(el);

        addMobile(brand, model, price, cpu, ram, space, screen, camera, imgUrl);
    })
}



//Remove opacity from carousel img
function removeOpacity () {
    carousels.forEach(el => {
        el.style.opacity = '0';
    })
} 

// LIsteners
// Change carousel on click
carouselTracker.addEventListener('click', function(e) {
    if(e.target.classList.contains('carousel__box')){
        removeOpacity();
        
        let element = +(e.target.classList[1].slice(-1)) - 1;
        carousels[element].style.opacity = "1";
    }
    e.preventDefault();
})

// Add All mobile from database to UI
document.getElementById('show-all').addEventListener('click', importDbMobToUI);

// Filter mobile and display to UI
document.getElementById('filter').addEventListener('click', function() {
    clearAllPhones();
    const checkedNames = filterDatabase();

    // Loop through checked filter
    checkedNames.forEach(elNames => {
        // Loop through database array
        mobileDB.forEach(elDb => {
            if(elNames.toLowerCase() === elDb.brand.toLowerCase()) {
                [brand, model, price, cpu, ram, space, screen, camera, imgUrl] = Object.values(elDb);
                addMobile(brand, model, price, cpu, ram, space, screen, camera, imgUrl);
            } 
        })
    })
    e.preventDefault();
});


function filterDatabase(){
    let tempArr = [];

    inputCheckbox.forEach(el => {
        if(el.checked === true) {
            tempArr.push(el.name);
        }
    });
    return tempArr;
}

// AUto slide carousel
let slideIndex = 0;

function carousel() {
    for (let i = 0; i < carousels.length; i++) {
        carousels[i].style.opacity = "0";
    }
    slideIndex++;
    if (slideIndex === carousels.length) {slideIndex = 0}
    carousels[slideIndex].style.opacity = "1";
    setTimeout(carousel, 8000); // Change image every 2 seconds
}


// Hide and show cart
// hide
document.querySelector('.cart__close i').addEventListener('click', function() {
    document.querySelector('.cart').style.transform = 'translateX(50rem)';
})
// Show
document.querySelector('.navigation__cart i').addEventListener('click', function() {
    document.querySelector('.cart').style.transform = 'translateX(0)';
})

// remove all items from main-section
function clearAllPhones(){
    const mobiles = document.querySelector('.mobiles');
    while (mobiles.hasChildNodes()) {  
        mobiles.removeChild(mobiles.firstChild);
      }
}

// Add item to cart
mobilesContainer.addEventListener('click', addToCart);

// add createrd element to cart on EL
function addToCart(e) {
    const parent = e.target.parentElement.parentElement;
    const model = parent.querySelector('.mobile__model').innerText;
    const price = parent.querySelector('.mobile__price').innerText;
    const element = createElementCart(model, price);
    const brandNamesInCartDivs = [...document.querySelectorAll('.cart__controll .cart__model')];

    // Loop through brandNamesInCartDivs and use only innertext for comparation
    let brandNamesInCart = brandNamesInCartDivs.map(el => {
        return el.innerText;
    })

    // if don't match class and its not alredy in cart
    if(!(e.target.classList.contains('btn-buy')) || brandNamesInCart.indexOf(model) !== -1){
        e.preventDefault();
        return;
    }

        cartBox.appendChild(element);

    e.preventDefault();
    updateTotalPrice();
}

// Create element for cart
function createElementCart(model, price) {
    let cartControll = document.createElement('div');
    cartControll.classList.add('cart__controll');
    cartControll.innerHTML = `
        <div class="cart__model">
            ${model}
        </div>
        <div class="cart__price">
            ${price}
        </div>
        <input type="number" name="quantity id="quantity min="1" class="number-input quantity-mobile" value="1">
        <div class="cart__delete">
            <i class="fas fa-window-close"></i>
        </div>
    `
    return cartControll;
}

// Remove Item from cart
document.querySelector('.cart__box').addEventListener('click', removeItem);

function removeItem(e){
    if(e.target.parentElement.classList.contains('cart__delete')){
        e.target.parentElement.parentElement.remove();
    }

    updateTotalPrice();
}

// Remove all items from cart 
document.querySelector('.btn-discard').addEventListener('click', function() {
    while (cartBox.hasChildNodes()) {  
        cartBox.removeChild(cartBox.firstChild);
      }
      updateTotalPrice();
});

// Update of total price
function updateTotalPrice() {
    const cartTotal = document.querySelector('.cart__total__price');
    let total = 0;
    const cartControll = document.querySelectorAll('.cart__box .cart__controll');

    cartControll.forEach(el => {
        let elPrice = el.querySelector('.cart__price').innerText;
        let elQuantity = el.querySelector('.quantity-mobile').value;

        elPrice = parseInt(elPrice.slice(0, -1));
        total += elPrice * parseInt(elQuantity);
    })
    cartTotal.innerHTML = `${total}&euro;`;
}

// Update cart total on changing quantity
quantityCartElements.forEach(el => {
    el.addEventListener('change', updateTotalPrice);
})




carousel();
importDbMobToUI();


// Year current
document.getElementById('year').innerText = new Date().getFullYear();


// ******************************************************
function isTrue(){
    inputs.forEach(el => {
        if(el.checked === true) {
            // console.log(el.name);
        }
    });
}

// document.querySelector('.btn__filter').addEventListener('click', isTrue);

