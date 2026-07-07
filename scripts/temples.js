const menuButton=document.querySelector("#menu");
const navigation=document.querySelector("nav");

menuButton.textContent = "☰";

menuButton.addEventListener("click", ()=>{
navigation.classList.toggle("open");
menuButton.classList.toggle("open");

if (menuButton.classList.contains("open")){
    menuButton.textContent = "❌";
}
    else{
        menuButton.textContent="☰"
    }


})