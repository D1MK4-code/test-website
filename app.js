const hamburger = document.querySelector(".hamburger");
const navigationList = document.querySelector(".navigation-list");
const navigationListItem = document.querySelectorAll(".navigation-list li");


hamburger.addEventListener("click", () => {
    navigationList.classList.toggle("open");
    navigationListItem.forEach(link => {
        link.classList.toggle("fade");
    })
});