const menuButton = document.querySelectorAll(".menu-button");
const screenOverlay = document.querySelector(".screen-overlay");
const themeButton = document.querySelector(".theme-button i");

// Initialize dark mode based on local storage
if (localStorage.getItem("darkMode") === "enabled") {
    document.body.classList.add("dark-mode");
    themeButton.classList.replace("uil-moon", "uil-sun");
} else {
    themeButton.classList.replace("uil-sun", "uil-moon");
}   

// Toggle dark mode when theme button is clicked
themeButton.addEventListener("click", () => {
 const isDarkMode = document.body.classList.toggle("dark-mode");
 localStorage.setItem("darkMode", isDarkMode ? "enabled" : "disabled");
 themeButton.classList.toggle("uil-sun", isDarkMode);
 themeButton.classList.toggle("uil-moon", !isDarkMode);

});

// Toggle sidebar visiibility when menu button are clicked
menuButton.forEach(button => {
    button.addEventListener("click", () => {
        document.body.classList.toggle("sidebar-hidden");
    });
});

// Toggle sidebar visiibility when screen overlay are clicked

screenOverlay.addEventListener("click", () => {
    document.body.classList.toggle("sidebar-hidden");
});

// show sidebar on large screens by default 
if (window.innerWidth >= 768) {
    document.body.classList.remove("sidebar-hidden");
}