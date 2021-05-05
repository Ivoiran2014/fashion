let productIndex = 0;

const productInfos = document.querySelectorAll('.product-info');

setTimeout(() => {
    productInfos[productIndex].classList.add('active');
},200);


// SLIDING
let isSliding = false;

slide = () => {
    if(isSliding) return;

    isSliding = true;

    let currentProduct = document.querySelector('.product-info.active');
    currentProduct.classList.remove('active');

    productIndex = productIndex + 1 > productInfos.length - 1 ? 0 : productIndex + 1;
    productInfos[productIndex].classList.add('active');

    // IMAGE SLIDE

    let listItems = document.querySelectorAll('.slide');
    let slider = document.querySelector('.slider');
    let reverseItems =  Array.from(listItems).slice().reverse();

    left = reverseItems[0].offsetLeft + 'px';
    height = reverseItems[0].offsetHeight + 'px';
    width = reverseItems[0].offsetWidth + 'px';
    zIndex = reverseItems[0].style.zIndex;

    reverseItems.forEach((el,index) => {

        if(index < listItems.length - 1){
            el.style.left = reverseItems[index + 1].offsetLeft + 'px';
            el.style.height = reverseItems[index + 1].offsetHeight + 'px';
            el.style.width = reverseItems[index + 1].offsetWidth + 'px';
            el.style.zIndex = reverseItems[index + 1].style.zIndex;
            el.style.transform = 'unset';
            el.style.opacity = 1;
        }

        if(index === listItems.length - 1){
            el.style.transform = 'scale(1.5)';
            el.style.opacity = '0';

            let clone = el.cloneNode(true);

            setTimeout(() => {

                el.remove();

                clone.style.transform = '0';
                clone.style.left = left;
                clone.style.height = height;
                clone.style.width = width;
                clone.style.zIndex = '0';
                clone.style.opacity = '0';
                clone.style.animation = 'unset';

                slider.appendChild(clone);

                isSliding = false;
            },1000);
        }
    })
}

const slideControl = document.querySelector('.slide-control');
slideControl.onclick = () => {
    slide();
}; 

// MENU
const menu = document.querySelector('.menu');

menu.addEventListener('click', () => {
    
    const navOverlay = document.querySelector('.nav-overlay');
    navOverlay.classList.toggle('active');

    const hamburger = document.querySelector('.hamburger');
    hamburger.classList.toggle('active');
});