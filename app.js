const menuDisplay = document.querySelector(".menu-display")
const menuOpen = document.querySelector(".menu-display")
const menuClose = document.querySelector(".menu-close")

menuDisplay.addEventListener("click", () => {
    menuOpen.classList.add("active")
    document.querySelector(".list-items").classList.add("active")
    document.querySelector(".menu-close").classList.add("active")
    document.querySelector(".backdrop").classList.add("active")
})

menuClose.addEventListener("click", () => {
    menuOpen.classList.remove("active")
    document.querySelector(".list-items").classList.remove("active")
    document.querySelector(".menu-close").classList.remove("active")
    document.querySelector(".backdrop").classList.remove("active")
})