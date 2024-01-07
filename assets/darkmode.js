
function onLoad() {
    var mode = localStorage.getItem("darkMode");

    if (mode == 1) {
        jtd.setTheme('custom_dark');
        toggleDarkMode.innerHTML = "Return to the Light";
        toggleDarkMode.classList.add('dm-dark-btn');
        toggleDarkMode.classList.remove('dm-btn');
    }
}