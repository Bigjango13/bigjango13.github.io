function toggleNightMode(button) {
    document.getElementById('toplevel').classList.toggle('nightmode');
    if (document.getElementById('toplevel').classList.contains("nightmode")) {
        localStorage.setItem("color-mode", "dark");
    } else {
        localStorage.setItem("color-mode", "light");
    }
}