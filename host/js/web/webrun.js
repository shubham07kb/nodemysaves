function webjsrun() {
    elementshead = document.querySelectorAll(".nav-link:not(.dropdown-toggle)");
    dropdownCheck = document.querySelector('.dropdown');
    for (let i = 0; i < elementshead.length; i++) {
        elementshead[i].addEventListener("click", toogleopen);
    }
    document.querySelector(".navbar-toggler").addEventListener("click", () => {
        document.querySelector(".offcanvas-collapse").classList.toggle("open");
    });
    if (dropdownCheck !== null) {
        document.querySelector(".dropdown").addEventListener("mouseleave", toggleDropdown);
        document.querySelector(".dropdown").addEventListener("mouseover", toggleDropdown);

        document.querySelector(".dropdown").addEventListener("click", (e) => dropdownhandler(e));
    }
}
function webjsdes() {
    elementshead = document.querySelectorAll(".nav-link:not(.dropdown-toggle)");
    dropdownCheck = document.querySelector('.dropdown');
    for (let i = 0; i < elementshead.length; i++) {
        elementshead[i].removeEventListener("click", toogleopen);
    }
    if (dropdownCheck !== null) {
        document.querySelector(".dropdown").removeEventListener("mouseleave", toggleDropdown);
        document.querySelector(".dropdown").removeEventListener("mouseover", toggleDropdown);

        document.querySelector(".dropdown").removeEventListener("click", (e) => dropdownhandler(e));
    }
    document.querySelector(".navbar-toggler").removeEventListener("click", () => {
        document.querySelector(".offcanvas-collapse").classList.toggle("open");
    });
}
function toggleDropdown(e) {
    const _d = e.target.closest(".dropdown");
    let _m = document.querySelector(".dropdown-menu", _d);

    setTimeout(
        function () {
            const shouldOpen = _d.matches(":hover");
            _m.classList.toggle("show", shouldOpen);
            _d.classList.toggle("show", shouldOpen);

            _d.setAttribute("aria-expanded", shouldOpen);
        },
        e.type === "mouseleave" ? 300 : 0
    );
}
function toogleopen() {
    document.querySelector(".offcanvas-collapse").classList.toggle("open");
}
function dropdownhandler(e) {
    const _d = e.target.closest(".dropdown");
    let _m = document.querySelector(".dropdown-menu", _d);
    if (_d.classList.contains("show")) {
        _m.classList.remove("show");
        _d.classList.remove("show");
    } else {
        _m.classList.add("show");
        _d.classList.add("show");
    }
}