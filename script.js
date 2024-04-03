let btn1 = document.getElementById("mybtn");
let btn2 = document.getElementById("mybtn2");
let code =  document.querySelector(".code");
let rgb1 = "#fff";
let rgb2 = "#000";

const hexcolors = () => {
    let hexValue = "0123456789abcdef";
    let colors = "#";
    for (let index = 0; index < 6; index++) {
        colors = colors + hexValue[Math.floor(Math.random() * 16)]
    }

    return colors;
}

const handleButton = () => {
    rgb1 = hexcolors();
    console.log(rgb1)
    btn1.innerHTML = rgb1
    document.body.style.backgroundImage = `linear-gradient(to right, ${rgb1} ,${rgb2})`;

    code.innerHTML = `background-color :linear-gradient(to right, ${rgb1} , ${rgb2});`
}

const handleButton2 = () => {
    rgb2 = hexcolors();
    console.log(rgb2)
    btn2.innerHTML = rgb2;
    document.body.style.backgroundImage = `linear-gradient(to right, ${rgb1} ,${rgb2})`;
    code.innerHTML = `background-color :linear-gradient(to right, ${rgb1} , ${rgb2});`
}

btn1.addEventListener("click", handleButton);
btn2.addEventListener("click", handleButton2);

code.addEventListener("click", () => {
    navigator.clipboard.writeText(code.innerHTML)
})