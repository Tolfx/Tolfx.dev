const avatar = document.getElementById("avatar");
let clicked = false;
avatar.addEventListener("click", () => {
    // console.log(clicked)
    const n = Math.floor(Math.random() * 100);
    // 20% to get this
    if(!clicked && n <= 20)
        document.getElementById("avatar").src = `resources/images/avatars/Tolfx__.jpg`;

    // 80% to get this
    if(!clicked && n >= 20)
        document.getElementById("avatar").src = `resources/images/avatars/Tolfx___.jpg`;
    if(clicked)
        document.getElementById("avatar").src = `resources/images/avatars/Tolfx_.jpg`;
        
    clicked = !clicked;
});

// VanillaTilt.init(document.querySelector("#avatar"), {
//     max: 25,
//     speed: 500
// });