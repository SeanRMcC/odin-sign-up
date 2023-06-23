const themeButton = document.querySelector("#theme");
const root = document.documentElement;
const buttonImg = document.querySelector("#theme-image");

themeButton.addEventListener("click", () => {
    if(root.className === "light"){
        root.className = "dark";
        buttonImg.src = "./assets/moon.svg";
    }else{
        root.className = "light";
        buttonImg.src = "./assets/sun.svg";
    }
});