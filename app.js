// Image slide show
let i = 0; //starting point
let images = [];
let time = 2500;

// image list
images[0] = 'banks.jpg'
images[1] = 'bickford.jpg'
images[2] = 'cbc.jpg'
images[3] = 'images/img15.jpg'
images[4] = 'images/img16.jpg'
images[5] = 'images/img17.jpg'
images[6] = 'images/img18.jpg'
images[7] = 'images/img19.jpg'
images[8] = 'images/img20.jpg'
images[9] = 'images/img21.jpg'
images[10] = 'images/img22.jpg'

// change img

function changeImg() {
    document.slide.src = images[i];

    if (i < images.length - 1) {
        i++;
    } else {
        i = 0;
    }
    setTimeout('changeImg()', time)
}

window.onload = changeImg;

// Clickable images
function imagefun() {
    let Image_Id = document.getElementById('getImage');
    if (Image_Id.src.match("images/img2.jpg")) {
        Image_Id.src = "images/img3.jpg";
    } else {
        Image_Id.src = "images/img2.jpg";
    }
}

// #2
function imagefun2() {
    let Image_Id = document.getElementById('getImage2');
    if (Image_Id.src.match("images/img4.jpg")) {
        Image_Id.src = "images/img5.jpg";
    } else {
        Image_Id.src = "images/img4.jpg";
    }
}

// #3
function imagefun3() {
    let Image_Id = document.getElementById('getImage3');
    if (Image_Id.src.match("images/img8.jpg")) {
        Image_Id.src = "images/img7.jpg";
    } else {
        Image_Id.src = "images/img8.jpg";
    }
}

// Page loading animations

const logo = document.querySelector('#logo');
const home = document.querySelector('.home');
const view_map = document.querySelector('.view-map');
const view_images = document.querySelector('.view-images');
const submit_spot = document.querySelector('.submit-spot');
const slider = document.querySelector('.slider');
const main = document.querySelector('.main');
const slide_show = document.querySelector('.slideshow')
const contact_container = document.querySelector('.contact-container')


const tl = new TimelineMax();

tl.fromTo(main, 1, { height: "0%" }, { height: "95%", ease: Power2.easeInOut })
    .fromTo(main, 1.2, { width: "100%" }, { width: "90%", ease: Power2.easeInOut })
    .fromTo(slider, 1.2, { y: "-100%" }, { y: "0%", ease: Power2.easeInOut }, "-= 1.2")
    .fromTo(logo, 0.5, { opacity: 0, x: 30 }, { opacity: 1, x: 0 }, "-=0.5")
    .fromTo(home, 0.2, { opacity: 0, x: 30 }, { opacity: 1, x: 0 })
    .fromTo(view_map, 0.2, { opacity: 0, x: 30 }, { opacity: 1, x: 0 })
    .fromTo(view_images, 0.2, { opacity: 0, x: 30 }, { opacity: 1, x: 0 })
    .fromTo(submit_spot, 0.2, { opacity: 0, x: 30 }, { opacity: 1, x: 0 })
    .fromTo(slide_show, 0.2, { opacity: 0, x: 30 }, { opacity: 1, x: 0 });