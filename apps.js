const dropMenu = document.querySelector("#slide-ul");
const menuButton = document.querySelector("#menu-button");
const menu = document.querySelector("#menu");
dropMenu.style.marginTop = "-360px";
dropMenu.style.transition = "0.3s"


function openMenu(){
    dropMenu.style.marginTop = "20px";
}
 
function closeMenu(){
    dropMenu.style.marginTop = "-360px";
}

menuButton.addEventListener("click", () => {
        if(dropMenu.style.marginTop == "-360px"){
            openMenu()
        } else {
            closeMenu()
        }
    })

