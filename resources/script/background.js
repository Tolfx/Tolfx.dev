let queryString = window.location.search;
let urlParams = new URLSearchParams(queryString);
let page_type = urlParams.get('bg');
const imagesRange = [
    "1.jpg",
    "2.jpg",
    "3.jpg",
    "4.jpg",
    "5.jpg",
    "6.jpg",
    "7.jpg",
    "8.jpg",
    "9.jpg",
    "10.gif",
    "11.jpg",
    "12.jpg",
    "13.jpg",
    "14.png",
    "15.gif",
    "16.jpg",
    "17.gif",
];

const bg = page_type ? page_type : imagesRange[Math.floor(Math.random()*imagesRange.length)]
document.documentElement.style.setProperty('--wallpaper', `url(../images/backgrounds/${bg})`);