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
];
document.documentElement.style.setProperty('--wallpaper', `url(../images/backgrounds/${imagesRange[Math.floor(Math.random()*imagesRange.length)]})`);