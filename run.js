sitename = `MySaves`;
function appjsrun() {}
function appjsdes() {}
apphtml = `<div id="inmain"></div>`;
appcss = `/* app */`;
applightcss = `/* app light */`;
appdarkcss = `/* app dark */`;
webhtml = `<nav id="navbarExample" class="navbar navbar-expand-lg fixed-top navbar-light" aria-label="Main navigation"> <div class="container"> <a class="navbar-brand logo-image" href="index.html"><img src="images/logo.svg" alt="alternative"></a> <button class="navbar-toggler p-0 border-0" type="button" id="navbarSideCollapse" aria-label="Toggle navigation"> <span class="navbar-toggler-icon"></span> </button> <div class="navbar-collapse offcanvas-collapse" id="navbarsExampleDefault"> <ul class="navbar-nav ms-auto navbar-nav-scroll"> <li class="nav-item"> <a class="nav-link active" aria-current="page" onclick="ps('/home')">Home</a> </li> <li class="nav-item"> <a class="nav-link" onclick="ps('/meow')">Signin</a> </li> <li class="nav-item"> <a class="nav-link" href="#projects">Projects</a> </li> <li class="nav-item"> <a class="nav-link" href="#pricing">Pricing</a> </li> <li class="nav-item dropdown"> <a class="nav-link dropdown-toggle" href="#" id="dropdown01" data-bs-toggle="dropdown" aria-expanded="false">Drop</a> <ul class="dropdown-menu" aria-labelledby="dropdown01"> <li><a class="dropdown-item" href="article.html">Article Details</a></li> <li> <div class="dropdown-divider"></div> </li> <li><a class="dropdown-item" href="terms.html">Terms Conditions</a></li> <li> <div class="dropdown-divider"></div> </li> <li><a class="dropdown-item" href="privacy.html">Privacy Policy</a></li> </ul> </li> </ul> <span class="nav-item"> <a class="btn-solid-sm" href="#contact">Get quote</a> </span> </div> </div> </nav> <div id="inmain"></div> <section class="bg-200 pt-9 pb-0"> <div class="container"> <div class="row"> <div class="col-12 col-lg-4 mb-3"><a href="#"><img class="d-inline-block align-middle" src="assets/img/icons/logo.png" alt="" width="30" /><span class="d-inline-block text-1000 fs-1 ms-2 fw-medium lh-base">Lasles<span class="fw-bold">VPN</span></span></a> <p class="my-3"> <span class="fw-medium">LaslesVPN </span>is a private virtual network that<br />has unique features and has high security. </p> <ul class="list-unstyled list-inline"> <li class="list-inline-item"><a class="text-decoration-none" href="#!"> <svg class="bi bi-facebook" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#F53838" viewBox="0 0 16 16"> <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z"> </path> </svg></a></li> <li class="list-inline-item"><a href="#!"> <svg class="bi bi-twitter" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#F53838" viewBox="0 0 16 16"> <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z"> </path> </svg></a></li> <li class="list-inline-item"><a href="#!"> <svg class="bi bi-instagram" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#F53838" viewBox="0 0 16 16"> <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z"> </path> </svg></a></li> </ul> <p class="text-400 my-3">&copy; 2020 Your Company</p> </div> <div class="col-6 col-sm-4 col-lg-3 mb-3"> <h5 class="lh-lg">product </h5> <ul class="list-unstyled mb-md-4 mb-lg-0"> <li class="lh-lg"><a class="text-900 text-decoration-none" href="#!">Download</a></li> <li class="lh-lg"><a class="text-900 text-decoration-none" href="#!">Pricing</a></li> <li class="lh-lg"><a class="text-900 text-decoration-none" href="#!">Locations</a></li> <li class="lh-lg"><a class="text-900 text-decoration-none" href="#!">Server</a></li> <li class="lh-lg"><a class="text-900 text-decoration-none" href="#!">Countries</a></li> <li class="lh-lg"><a class="text-900 text-decoration-none" href="#!">Blog</a></li> </ul> </div> <div class="col-6 col-sm-4 col-lg-3 mb-3"> <h5 class="lh-lg">Engage</h5> <ul class="list-unstyled mb-md-4 mb-lg-0"> <li class="lh-lg"><a class="text-900 text-decoration-none" href="#!">LaslesVPN ?</a></li> <li class="lh-lg"><a class="text-900 text-decoration-none" href="#!">FAQ</a></li> <li class="lh-lg"><a class="text-900 text-decoration-none" href="#!">Tutorials</a></li> <li class="lh-lg"><a class="text-900 text-decoration-none" href="#!">About Us</a></li> <li class="lh-lg"><a class="text-900 text-decoration-none" href="#!">Privacy Policy </a></li> <li class="lh-lg"><a class="text-900 text-decoration-none" href="#!">Terms of Service</a></li> </ul> </div> <div class="col-12 col-sm-4 col-lg-2 mb-3 ps-xxl-7 ps-xl-5"> <h5 class="lh-lg">Earn Money </h5> <ul class="list-unstyled mb-md-4 mb-lg-0"> <li class="lh-lg"><a class="text-900 text-decoration-none" href="#!">Affiliate</a></li> <li class="lh-lg"><a class="text-900 text-decoration-none" href="#!">Become Partner</a></li> </ul> </div> <hr class="opacity-25" /> </div> </div> </section>`;
function webjsrun() {
    elementshead = document.querySelectorAll(".nav-link:not(.dropdown-toggle)");
    dropdownCheck = document.querySelector(".dropdown");
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
    dropdownCheck = document.querySelector(".dropdown");
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
webcss = `/* web *//* header */.dropdown-item,.dropdown-toggle,.navbar-brand { white-space: nowrap}.navbar-toggler-icon,img { vertical-align: middle}ul { padding-left: 2rem; margin-top: 0; margin-bottom: 1rem}ul ul { margin-bottom: 0}button { border-radius: 0; margin: 0; font-family: inherit; font-size: inherit; line-height: inherit; text-transform: none}button:focus:not(:focus-visible) { outline: 0}::-moz-focus-inner { padding: 0; border-style: none}.container { width: 100%; padding-right: var(--bs-gutter-x, .75rem); padding-left: var(--bs-gutter-x, .75rem); margin-right: auto; margin-left: auto}@media (min-width:576px) { .container { max-width: 540px }}@media (min-width:768px) { .container { max-width: 720px }}@media (min-width:992px) { .container { max-width: 960px }}@media (min-width:1400px) { .container { max-width: 1320px }}/*! CSS Used from: https://applecat.rf.gd/theme/css/styles.css */body { width: 100%; height: 100%; color: #5e6576; font: 400 1rem/1.625rem "Open Sans", sans-serif}@media (min-width:992px) { .navbar { padding-top: 1.75rem; background-color: #fff; box-shadow: none; transition: .2s } .offcanvas-collapse { position: static; top: auto; bottom: auto; left: auto; width: auto; padding-right: 0; padding-left: 0; background-color: transparent; overflow-y: visible; visibility: visible } .navbar .navbar-nav { margin-top: 0; margin-bottom: 0 } .navbar .nav-item .nav-link { padding-right: .75rem; padding-left: .75rem } .navbar .dropdown-menu { padding-top: .75rem; padding-bottom: .75rem; box-shadow: 0 3px 3px 1px rgba(0, 0, 0, .08) } .navbar .dropdown-divider { width: 90% } .navbar .nav-item .btn-solid-sm { margin-top: 0; margin-left: 1rem } .navbar-expand-lg { flex-wrap: nowrap; justify-content: flex-start } .navbar-expand-lg .navbar-nav { flex-direction: row } .navbar-expand-lg .navbar-nav .dropdown-menu { position: absolute } .navbar-expand-lg .navbar-nav .nav-link { padding-right: .5rem; padding-left: .5rem } .navbar-expand-lg .navbar-nav-scroll { overflow: visible } .navbar-expand-lg .navbar-collapse { display: flex !important; flex-basis: auto } .navbar-expand-lg .navbar-toggler { display: none }}/*! CSS Used keyframes */*,::after,::before { box-sizing: border-box}.dropdown { position: relative}.dropdown-toggle::after { display: inline-block; margin-left: .255em; vertical-align: .255em; content: ""; border-top: .3em solid; border-right: .3em solid transparent; border-bottom: 0; border-left: .3em solid transparent}.dropdown-toggle:empty::after { margin-left: 0}.dropdown-menu { position: absolute; z-index: 1000; display: none; min-width: 10rem; padding: .5rem 0; margin: 0; font-size: 1rem; color: #212529; text-align: left; list-style: none; background-color: #fff; background-clip: padding-box; border: 1px solid rgba(0, 0, 0, .15); border-radius: .25rem}.dropdown-item,.nav-link { display: block; text-decoration: none}.dropdown-divider { height: 0; margin: .5rem 0; overflow: hidden; border-top: 1px solid rgba(0, 0, 0, .15)}.dropdown-item { width: 100%; padding: .25rem 1rem; clear: both; font-weight: 400; color: #212529; text-align: inherit; background-color: transparent; border: 0}.dropdown-item:focus,.dropdown-item:hover { color: #1e2125; background-color: #e9ecef}.dropdown-item:active { color: #fff; text-decoration: none; background-color: #0d6efd}.dropdown-item:disabled { color: #adb5bd; pointer-events: none; background-color: transparent}.nav-link { padding: .5rem 1rem; color: #0d6efd; transition: color .15s ease-in-out, background-color .15s ease-in-out, border-color .15s ease-in-out}.nav-link:focus,.nav-link:hover { color: #0a58ca}.navbar { position: relative; display: flex; flex-wrap: wrap; align-items: center; justify-content: space-between; padding-top: .5rem; padding-bottom: .5rem}.navbar>.container { display: flex; flex-wrap: inherit; align-items: center; justify-content: space-between}.navbar-brand { padding-top: .3125rem; padding-bottom: .3125rem; margin-right: 1rem; font-size: 1.25rem; text-decoration: none}.navbar-nav { display: flex; flex-direction: column; padding-left: 0; margin-bottom: 0; list-style: none}.navbar-nav .nav-link { padding-right: 0; padding-left: 0}.navbar-nav .dropdown-menu { position: static}.navbar-collapse { flex-basis: 100%; flex-grow: 1; align-items: center}.navbar-toggler { padding: .25rem .75rem; font-size: 1.25rem; line-height: 1; background-color: transparent; border: 1px solid transparent; border-radius: .25rem; transition: box-shadow .15s ease-in-out}@media (prefers-reduced-motion:reduce) { .nav-link, .navbar-toggler { transition: none }}.btn-solid-sm,.navbar .nav-item .nav-link { transition: .2s}.navbar-toggler:hover { text-decoration: none}.navbar-toggler:focus { text-decoration: none; outline: 0; box-shadow: 0 0 0 .25rem}.navbar-toggler-icon { display: inline-block; width: 1.5em; height: 1.5em; background-repeat: no-repeat; background-position: center; background-size: 100%}.navbar-nav-scroll { max-height: var(--bs-scroll-height, 75vh); overflow-y: auto}.navbar-light .navbar-brand,.navbar-light .navbar-brand:focus,.navbar-light .navbar-brand:hover,.navbar-light .navbar-nav .nav-link.active { color: rgba(0, 0, 0, .9)}.navbar-light .navbar-nav .nav-link { color: rgba(0, 0, 0, .55)}.navbar-light .navbar-nav .nav-link:focus,.navbar-light .navbar-nav .nav-link:hover { color: rgba(0, 0, 0, .7)}.navbar-light .navbar-toggler { color: rgba(0, 0, 0, .55); border-color: rgba(0, 0, 0, .1)}.navbar-light .navbar-toggler-icon { background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 30 30'%3e%3cpath stroke='rgba%280, 0, 0, 0.55%29' stroke-linecap='round' stroke-miterlimit='10' stroke-width='2' d='M4 7h22M4 15h22M4 23h22'/%3e%3c/svg%3e")}.fixed-top { position: fixed; top: 0; right: 0; left: 0; z-index: 1030}.border-0 { border: 0 !important}.ms-auto { margin-left: auto !important}.p-0 { padding: 0 !important}/*! CSS Used from: https://applecat.rf.gd/theme/css/styles.css */a,a:hover { color: #5e6576; text-decoration: underline}.btn-solid-sm { display: inline-block; padding: 1rem 1.5rem; border: 1px solid #ff5574; border-radius: 30px; background-color: #ff5574; color: #fff; font-weight: 600; font-size: .875rem; line-height: 0; text-decoration: none}.navbar,.navbar .dropdown-item { font-weight: 600; font-size: .875rem; line-height: .875rem}.btn-solid-sm:hover { background-color: transparent; color: #ff5574; text-decoration: none}.navbar { background-color: #fff; box-shadow: 0 1px 6px 0 rgba(0, 0, 0, .05)}.navbar .navbar-brand { padding-top: .25rem; padding-bottom: .25rem}.navbar .dropdown-item,.navbar .nav-item .nav-link { padding-top: .625rem; padding-bottom: .625rem; color: #5e6576; text-decoration: none}.navbar .logo-image img { width: 133px; height: 30px}.offcanvas-collapse { position: fixed; top: 3.25rem; bottom: 0; left: 100%; width: 100%; padding-right: 1rem; padding-left: 1rem; overflow-y: auto; visibility: hidden; background-color: #fff; transition: transform .3s ease-in-out, visibility .3s ease-in-out, -webkit-transform .3s ease-in-out}.offcanvas-collapse.open { visibility: visible; -webkit-transform: translateX(-100%); transform: translateX(-100%)}.navbar .navbar-nav { margin-top: .75rem; margin-bottom: .5rem}.navbar .nav-item .nav-link.active,.navbar .nav-item .nav-link:hover { color: #6168ff}.navbar .dropdown .dropdown-menu { animation: .2s fadeDropdown}.navbar .dropdown-menu { margin-top: .25rem; margin-bottom: .25rem; border: none; background-color: #fff}.navbar .dropdown-item:hover { background-color: #fff; color: #6168ff}.navbar .dropdown-divider { width: 100%; height: 1px; margin: .5rem auto; border: none; background-color: #d1d1d1}.navbar .navbar-toggler { padding: 0; border: none; font-size: 1.25rem}.navbar .btn-solid-sm { border-color: #6168ff; background-color: #6168ff}.navbar .btn-solid-sm:hover { background-color: transparent; color: #6168ff}@media (min-width:992px) { .navbar { padding-top: 1.75rem; background-color: #fff; box-shadow: none; transition: .2s } .offcanvas-collapse { position: static; top: auto; bottom: auto; left: auto; width: auto; padding-right: 0; padding-left: 0; background-color: transparent; overflow-y: visible; visibility: visible } .offcanvas-collapse.open { -webkit-transform: none; transform: none } .navbar .navbar-nav { margin-top: 0; margin-bottom: 0 } .navbar .nav-item .nav-link { padding-right: .75rem; padding-left: .75rem } .navbar .dropdown-menu { padding-top: .75rem; padding-bottom: .75rem; box-shadow: 0 3px 3px 1px rgba(0, 0, 0, .08) } .navbar .dropdown-divider { width: 90% } .navbar .nav-item .btn-solid-sm { margin-top: 0; margin-left: 1rem }}@media (min-width:1200px) { .container { max-width: 1140px }}@keyframes fadeDropdown { 0% { opacity: 0 } 100% { opacity: 1 }}.dropdown-menu.show { display: block}/* header end *//* footer */*,*::before,*::after { -webkit-box-sizing: border-box; box-sizing: border-box;}body { margin: 0; font-family: "Rubik", -apple-system, BlinkMacSystemFont, "Segoe UI", "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"; font-size: 1rem; font-weight: 400; line-height: 1.5; color: #4d5769; background-color: #fff; -webkit-text-size-adjust: 100%; -webkit-tap-highlight-color: rgba(0, 0, 0, 0);}hr { margin: 1rem 0; color: #bec3d0; background-color: currentColor; border: 0; opacity: 1;}hr:not([size]) { height: 1px;}h5 { margin-top: 0; margin-bottom: 0.5rem; font-family: "Rubik", "Poppins", -apple-system, BlinkMacSystemFont, "Segoe UI", "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"; font-weight: 500; line-height: 1.2; color: #0B132A;}h5 { font-size: 1.2rem;}p { margin-top: 0; margin-bottom: 1rem;}ul { padding-left: 2rem;}ul { margin-top: 0; margin-bottom: 1rem;}a { color: #387BF5; text-decoration: none;}a:hover { color: #2d62c4; text-decoration: underline;}img,svg { vertical-align: middle;}::-moz-focus-inner { padding: 0; border-style: none;}.list-unstyled { padding-left: 0; list-style: none;}.list-inline { padding-left: 0; list-style: none;}.list-inline-item { display: inline-block;}.list-inline-item:not(:last-child) { margin-right: 0.5rem;}.container { width: 100%; padding-right: var(--bs-gutter-x, 1rem); padding-left: var(--bs-gutter-x, 1rem); margin-right: auto; margin-left: auto;}@media (min-width: 576px) { .container { max-width: 540px; }}@media (min-width: 768px) { .container { max-width: 720px; }}@media (min-width: 992px) { .container { max-width: 960px; }}@media (min-width: 1200px) { .container { max-width: 1140px; }}@media (min-width: 1540px) { .container { max-width: 1480px; }}.row { --bs-gutter-x: 2rem; --bs-gutter-y: 0; display: -webkit-box; display: -ms-flexbox; display: flex; -ms-flex-wrap: wrap; flex-wrap: wrap; margin-top: calc(var(--bs-gutter-y) * -1); margin-right: calc(var(--bs-gutter-x) / -2); margin-left: calc(var(--bs-gutter-x) / -2);}.row>* { -ms-flex-negative: 0; flex-shrink: 0; width: 100%; max-width: 100%; padding-right: calc(var(--bs-gutter-x) / 2); padding-left: calc(var(--bs-gutter-x) / 2); margin-top: var(--bs-gutter-y);}.col-6 { -webkit-box-flex: 0; -ms-flex: 0 0 auto; flex: 0 0 auto; width: 50%;}.col-12 { -webkit-box-flex: 0; -ms-flex: 0 0 auto; flex: 0 0 auto; width: 100%;}@media (min-width: 576px) { .col-sm-4 { -webkit-box-flex: 0; -ms-flex: 0 0 auto; flex: 0 0 auto; width: 33.33333%; }}@media (min-width: 992px) { .col-lg-2 { -webkit-box-flex: 0; -ms-flex: 0 0 auto; flex: 0 0 auto; width: 16.66667%; } .col-lg-3 { -webkit-box-flex: 0; -ms-flex: 0 0 auto; flex: 0 0 auto; width: 25%; } .col-lg-4 { -webkit-box-flex: 0; -ms-flex: 0 0 auto; flex: 0 0 auto; width: 33.33333%; }}.align-middle { vertical-align: middle !important;}.d-inline-block { display: inline-block !important;}.my-3 { margin-top: 1rem !important; margin-bottom: 1rem !important;}.mb-3 { margin-bottom: 1rem !important;}.ms-2 { margin-left: 0.5rem !important;}.pt-9 { padding-top: 10rem !important;}.pb-0 { padding-bottom: 0 !important;}.fs-1 { font-size: 1.2rem !important;}.fw-medium { font-weight: 500 !important;}.fw-bold { font-weight: 700 !important;}.lh-base { line-height: 1.5 !important;}.lh-lg { line-height: 2 !important;}.bg-200 { background-color: #F8F8F8 !important;}.text-decoration-none { text-decoration: none !important;}.opacity-25 { opacity: 0.25 !important;}.text-400 { color: #7a839e !important;}.text-900 { color: #4F5665 !important;}.text-1000 { color: #0B132A !important;}@media (min-width: 768px) { .mb-md-4 { margin-bottom: 1.8rem !important; }}@media (min-width: 992px) { .mb-lg-0 { margin-bottom: 0 !important; }}@media (min-width: 1200px) { .ps-xl-5 { padding-left: 3rem !important; }}@media (min-width: 1540px) { .ps-xxl-7 { padding-left: 5rem !important; }}::-webkit-input-placeholder { opacity: 1; color: #7a839e !important;}::-moz-placeholder { opacity: 1; color: #7a839e !important;}:-ms-input-placeholder { opacity: 1; color: #7a839e !important;}::-ms-input-placeholder { opacity: 1; color: #7a839e !important;}::placeholder { opacity: 1; color: #7a839e !important;}body { -webkit-font-smoothing: antialiased; -moz-osx-font-smoothing: grayscale; position: relative;}section { position: relative; padding-top: 4rem; padding-bottom: 4rem; top: 100px;}@media (min-width: 992px) { section { padding-top: 7.5rem; padding-bottom: 7.5rem; }}.container { position: relative;}/* footer end *//* main */#inmain{ position: relative; top: 75px;}/* main end */`;
weblightcss = `/* web light */`;
webdarkcss = `/* web dark */`;
acchtml = `<div class="card"><div id="inmain"></div></div>`;
function accjsrun() {}
function accjsdes() {}
function showorhidepswd() {
    console.log("clicked");
    let pt = gebi("pswd").getAttribute("type") === "password" ? "text" : "password";
    gebi("pswd").setAttribute("type", pt);
    gebi("pswdeye").classList.toggle("eye");
    gebi("pswdeye").classList.toggle("eye-close");
}
function respondeacc(a, b) {
    let xhr1 = new XMLHttpRequest();
    xhr1.open("POST", "/acc/respondacc");
    xhr1.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    xhr1.send(a);
    xhr1.onload = function () {
        if (xhr1.status === 200) {
            let res = JSON.parse(xhr1.responseText);
            if (res.statcode == 1) {
                if (b == "ca") {
                    let c = gebi("accform").innerHTML;
                    gebi("accform").innerHTML = gebi("accext").innerHTML;
                    gebi("accext").innerHTML = c;
                    gebi("regemail").innerHTML = res.email;
                } else if (b == "va") {
                    ps("/login");
                }
            } else {
                cl(res);
            }
        }
    };
}
function createacc() {
    respondeacc("email=" + gebi("email").value + "&username=" + gebi("username").value + "&pswd=" + gebi("pswd").value + "&forthe=ca", "ca");
}
function getacc() {
    if (gebi("remme").checked) {
        rmv = "y";
    } else {
        rmv = "n";
    }
    respondeacc("acc=" + gebi("eouf").value + "&pswd=" + gebi("pswd").value + "&rm=" + rmv + "&forthe=ga", "ga");
}
function recacc() {
    respondeacc("email=" + gebi("email").value + "&forthe=fa", "fa");
}
function verifuacc() {
    respondeacc("email=" + gebi("regemail").innerHTML + "&otp=" + gebi("otp").value + "&forthe=va", "va");
}
acccss = `body { background-color: var(--background-color-main);}.social-login img { width: 24px;}a { text-decoration: none; color: var(--a-color);}.card { font-family: sans-serif; width: 300px; margin-left: auto; margin-right: auto; margin-top: 3em; margin-bottom: 3em; border-radius: 10px; background-color: var(--card-color); padding: 1.8rem; box-shadow: 2px 5px 20px rgba(0, 0, 0, 0.1);}.title { text-align: center; font-weight: bold; margin: 0;}.subtitle { text-align: center; font-weight: bold;}.btn-text { margin: 0;}.social-login { display: flex; justify-content: center; gap: 5px;}.google-btn { background: var(--social-login-color); border: solid 2px var(--social-login-border-color); color: var(--social-login-text-color); border-radius: 8px; font-weight: bold; display: flex; padding: 10px 10px; flex: auto; align-items: center; gap: 5px; justify-content: center;}.or { text-align: center; font-weight: bold; border-bottom: 2px solid var(--or-border-color); line-height: 0.1em; margin: 25px 0;}.or span { color: var(--or-color); background: var(--or-background); padding: 0 10px;}.email-login { display: flex; flex-direction: column;}.email-login label { color: rgb(170 166 166);}input[type="text"],input[type="password"] { padding: 15px 20px; margin-top: 8px; margin-bottom: 15px; border: 1px solid #ccc; border-radius: 8px; box-sizing: border-box;}.cta-btn { background-color: rgb(69, 69, 185); color: white; padding: 18px 20px; margin-top: 10px; margin-bottom: 20px; width: 100%; border-radius: 10px; border: none;}.forget-pass { text-align: center; display: block;}.input-field { width: 100%; padding: 10px; text-align: center;}.icon-pass { padding: 10px; min-width: 40px;}.eye::after { content: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M15 12c0 1.654-1.346 3-3 3s-3-1.346-3-3 1.346-3 3-3 3 1.346 3 3zm9-.449s-4.252 8.449-11.985 8.449c-7.18 0-12.015-8.449-12.015-8.449s4.446-7.551 12.015-7.551c7.694 0 11.985 7.551 11.985 7.551zm-7 .449c0-2.757-2.243-5-5-5s-5 2.243-5 5 2.243 5 5 5 5-2.243 5-5z"/></svg>');}.eye-close::after{ content: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" height="48" width="48"><path d="m31.45 27.05-2.2-2.2q1.3-3.55-1.35-5.9-2.65-2.35-5.75-1.2l-2.2-2.2q.85-.55 1.9-.8 1.05-.25 2.15-.25 3.55 0 6.025 2.475Q32.5 19.45 32.5 23q0 1.1-.275 2.175-.275 1.075-.775 1.875Zm6.45 6.45-2-2q2.45-1.8 4.275-4.025Q42 25.25 42.85 23q-2.5-5.55-7.5-8.775Q30.35 11 24.5 11q-2.1 0-4.3.4-2.2.4-3.45.95L14.45 10q1.75-.8 4.475-1.4Q21.65 8 24.25 8q7.15 0 13.075 4.075Q43.25 16.15 46 23q-1.3 3.2-3.35 5.85-2.05 2.65-4.75 4.65Zm2.9 11.3-8.4-8.25q-1.75.7-3.95 1.075T24 38q-7.3 0-13.25-4.075T2 23q1-2.6 2.775-5.075T9.1 13.2L2.8 6.9l2.1-2.15L42.75 42.6ZM11.15 15.3q-1.85 1.35-3.575 3.55Q5.85 21.05 5.1 23q2.55 5.55 7.675 8.775Q17.9 35 24.4 35q1.65 0 3.25-.2t2.4-.6l-3.2-3.2q-.55.25-1.35.375T24 31.5q-3.5 0-6-2.45T15.5 23q0-.75.125-1.5T16 20.15Zm15.25 7.1Zm-5.8 2.9Z"/></svg>');}.remeber-field { display: flex; align-items: center; justify-content: space-between; transform: scale(2); margin-right: 11px;}`;
acclightcss = `/* acc light */ :root{ --background-color-main: rgb(228, 229, 247); --card-color: #fff; --social-login-color: #fff; --social-login-border-color: rgb(245 239 239); --social-login-text-color: #000; --or-color: #000; --or-background: #fff; --or-border-color: rgb(245 239 239); --a-color: rgb(0, 0, 255);}`;
accdarkcss = `/* acc dark */ :root{ --background-color-main: rgb(26, 37, 38); --card-color: rgba(100, 87, 87, 0.107); --social-login-color: rgb(26, 37, 38); --social-login-border-color: rgb(245 239 239); --social-login-text-color: #fff; --or-color: #fff; --or-background: rgb(26, 37, 38); --or-border-color: rgb(245 239 239); --a-color: rgb(15, 189, 15);}`;
function cl(a) {
    console.log(a);
}
function gebi(a) {
    return document.getElementById(a);
}
function gesbcn(a) {
    return document.getElementsByClassName(a);
}
function setls(a, b) {
    localStorage.setItem(a, b);
}
function getls(a) {
    return localStorage.getItem(a);
}
function removels(a) {
    localStorage.removeItem(a);
}
function clearls() {
    localStorage.clear();
}
function httpscheck() {
    if (window.location.protocol == "http:") {
        window.location.href = window.location.href.replace("http:", "https:");
    }
}
async function ipform() {
    let ip = await fetch("/api/get/ip")
        .then((response) => response.json())
        .then((data) => data.ip);
    if (getls("ip") == null || getls("ip") == undefined || getls("ip").trim() == "" || getls("ip") != ip) {
        let ipdata = await fetch(
            "https://ipwho.is/" +
                ip +
                "?fields=ip,message,success,type,continent,continent_code,country,country_code,region,region_code,city,latitude,longitude,postal,calling_code,calling_code,capital,borders,flag,connection.isp,connection.domain,timezone"
        )
            .then((response) => response.json())
            .then((data) => data);
        setls("ip", ip);
        setCookie("ip", "ip");
        forcookieip = encodeURI(JSON.stringify(ipdata));
        setCookie("ipdata", forcookieip, 1);
        for (const property in ipdata) {
            if (typeof ipdata[property] == "object") {
                for (const property2 in ipdata[property]) {
                    setls(property + "_" + property2, ipdata[property][property2]);
                }
            } else {
                setls(property, ipdata[property]);
            }
        }
    }
}
function requestsAreComplete(requests) {
    return requests.every(function (request) {
        return request.readyState == 4;
    });
}
function unsuccessfulRequests(requests) {
    var unsuccessful = requests.filter(function (request) {
        return request.status != 200;
    });
    return unsuccessful.length ? unsuccessful : null;
}
function onRequestsComplete(requests, callback) {
    function sharedCallback() {
        if (requestsAreComplete(requests)) {
            callback(requests, unsuccessfulRequests(requests));
        }
    }
    requests.forEach(function (request) {
        request.onreadystatechange = sharedCallback;
    });
}
function setCookie(cname, cvalue, exdays) {
    const d = new Date();
    d.setTime(d.getTime() + exdays * 24 * 60 * 60 * 1000);
    let expires = "expires=" + d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}
function getCookie(cname) {
    let name = cname + "=";
    let ca = document.cookie.split(";");
    for (let i = 0; i < ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) == " ") {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}
function checkCookie(cname) {
    let va = getCookie(cname);
    if (va != "" && va != undefined) {
        return true;
    } else {
        return false;
    }
}
function deleteCookie() {
    var allCookies = document.cookie.split(";");
    for (var i = 0; i < allCookies.length; i++) {
        document.cookie = allCookies[i] + "=;expires=" + new Date(0).toUTCString();
    }
}
function switchtheme(a) {
    if (a == "a") {
        setCookie("theme_mode", "a", 365);
    } else if (a == "d") {
        setCookie("theme_mode", "d", 365);
    } else if (a == "l") {
        setCookie("theme_mode", "l", 365);
    } else if (a == "s") {
        if (getCookie("theme_mode") == "a") {
            setCookie("theme_mode", "d", 365);
        } else if (getCookie("theme_mode") == "d") {
            setCookie("theme_mode", "l", 365);
        } else if (getCookie("theme_mode") == "l") {
            setCookie("theme_mode", "a", 365);
        }
    } else {
        cl("Error: Invalid theme mode");
    }
    changetheme();
}
function theme() {
    if (checkCookie("theme_mode") == true) {
        if (getCookie("theme_mode") == "a") {
            setCookie("theme", "a", 365);
        } else if (getCookie("theme_mode") == "d") {
            setCookie("theme", "d", 365);
        } else if (getCookie("theme_mode") == "l") {
            setCookie("theme", "l", 365);
        }
    } else {
        if (typeof prefered_theme_mode != "undefined") {
            if (prefered_theme_mode == "a" && prefered_theme_mode == "d" && prefered_theme_mode == "l") {
                switchtheme(prefered_theme_mode);
            } else {
                switchtheme("a");
            }
        } else {
            switchtheme("a");
        }
        theme();
    }
}
function changetheme() {
    "a" == getCookie("theme")
        ? "web" == gebi("themec").content
            ? (gebi("stylesheet").innerHTML = "@media(prefers-color-scheme:dark){" + webdarkcss + "}@media(prefers-color-scheme:light){" + weblightcss + "}" + webcss)
            : "app" == gebi("themec").content
            ? (gebi("stylesheet").innerHTML = "@media(prefers-color-scheme:dark){" + appdarkcss + "}@media(prefers-color-scheme:light){" + applightcss + "}" + appcss)
            : "acc" == gebi("themec").content && (gebi("stylesheet").innerHTML = "@media(prefers-color-scheme:dark){" + accdarkcss + "}@media(prefers-color-scheme:light){" + acclightcss + "}" + acccss)
        : "d" == getCookie("theme")
        ? "web" == gebi("themec").content
            ? (gebi("stylesheet").innerHTML = webcss + webdarkcss)
            : "app" == gebi("themec").content
            ? (gebi("stylesheet").innerHTML = appcss + appdarkcss)
            : "acc" == gebi("themec").content && (gebi("stylesheet").innerHTML = acccss + accdarkcss)
        : "l" == getCookie("theme") &&
          ("web" == gebi("themec").content
              ? (gebi("stylesheet").innerHTML = webcss + weblightcss)
              : "app" == gebi("themec").content
              ? (gebi("stylesheet").innerHTML = appcss + applightcss)
              : "acc" == gebi("themec").content && (gebi("stylesheet").innerHTML = acccss + acclightcss)),
        "web" == gebi("themec").content
            ? ((gebi("main").innerHTML = webhtml), webjsrun())
            : "app" == gebi("themec").content
            ? ((gebi("main").innerHTML = apphtml), appjsrun())
            : "acc" == gebi("themec").content && ((gebi("main").innerHTML = acchtml), accjsrun());
}
function destroypretheme() {
    "web" == gebi("themec").content ? webjsdes() : "app" == gebi("themec").content ? appjsdes() : "acc" == gebi("themec").content && accjsdes();
}
function loadurldata(){
    var urldata = [];
    urldata["url"] = window.location.href;
    urldata["urlp"] = window.location.protocol;
    urldata["urlh"] = window.location.host;
    urldata["urlpn"] = window.location.pathname;
    urldata["urlpna"] = window.location.pathname.split("/");
    urldata["urlpna"].shift();
    urldata["urlse"] = window.location.search;
    var urlsef = new URLSearchParams(urldata["urlse"]);
    var urlsea = [];
    for (const [key, value] of urlsef) {
        urlsea[key] = value;
    }
    urldata["urlsea"] = urlsea;
    return urldata;
}
function presetup() {
    window.onpopstate = function () {
        route();
    };
    const metape = document.createElement("meta");
    metape.id = "themec";
    metape.name = "themec";
    metape.content = "unset";
    const cssel = document.createElement("style");
    cssel.id = "stylesheet";
    document.head.appendChild(metape);
    document.head.appendChild(cssel);
}
function tools() {
    toolsp = "";
    gebi("tools").innerHTML = toolsp;
}
function getprehtml(a) {
    const xhr1 = new XMLHttpRequest();
    const xhr2 = new XMLHttpRequest();
    xhr1.open("GET", "/api/prepage/meta/" + a);
    xhr2.open("GET", "/api/prepage/html/" + a);
    xhr1.send();
    xhr2.send();
    onRequestsComplete([xhr1, xhr2], function (requests, unsuccessful) {
        if (unsuccessful) {
            cl("Error: " + unsuccessful[0].status + " " + unsuccessful[0].statusText);
        } else {
            metapp = JSON.parse(requests[0].responseText);
            gebi("headkeywords").content = metapp.keywords;
            gebi("headdescription").content = metapp.desc;
            gebi("headauthor").content = metapp.author;
            gebi("headtitle").innerHTML = metapp.title + " - " + sitename;
            gebi("inmain").innerHTML = requests[1].responseText;
        }
    });
}
function ps(a, b = sitename) {
    let stateObj = { id: "100" };
    window.history.pushState(stateObj, b, a);
    route();
}
function getapphtml(a) {
    const xhr1 = new XMLHttpRequest();
    const xhr2 = new XMLHttpRequest();
    cl(a);
    xhr1.open("GET", "/api/app/meta/" + a);
    xhr2.open("GET", "/api/app/html/" + a);
    xhr1.send();
    xhr2.send();
    onRequestsComplete([xhr1, xhr2], function (requests, unsuccessful) {
        if (unsuccessful) {
            cl("Error: " + unsuccessful[0].status + " " + unsuccessful[0].statusText);
        } else {
            metapp = JSON.parse(requests[0].responseText);
            gebi("headkeywords").content = metapp.keywords;
            gebi("headdescription").content = metapp.desc;
            gebi("headauthor").content = metapp.author;
            gebi("headtitle").innerHTML = metapp.title + " - " + sitename;
            gebi("main").innerHTML = requests[1].responseText;
        }
    });
}
function getdashhtml(a) {
    const xhr1 = new XMLHttpRequest();
    const xhr2 = new XMLHttpRequest();
    cl(a);
    xhr1.open("GET", "/api/dash/meta/" + a);
    xhr2.open("GET", "/api/dash/html/" + a);
    xhr1.send();
    xhr2.send();
    onRequestsComplete([xhr1, xhr2], function (requests, unsuccessful) {
        if (unsuccessful) {
            cl("Error: " + unsuccessful[0].status + " " + unsuccessful[0].statusText);
        } else {
            metapp = JSON.parse(requests[0].responseText);
            gebi("headkeywords").content = metapp.keywords;
            gebi("headdescription").content = metapp.desc;
            gebi("headauthor").content = metapp.author;
            gebi("headtitle").innerHTML = metapp.title + " - " + sitename;
            gebi("main").innerHTML = requests[1].responseText;
        }
    });
}
async function getshortlink(a) {
    p = await fetch("/api/shortlink/" + a).then((response) => response.json());
    if (p.status == "success") {
        window.location.href = p.url;
    } else {
        nf();
    }
}
function route() {
    const udata = loadurldata();
    console.table(udata);
    if (udata.urlpna[0] == "signup" || udata.urlpna[0] == "signin" || udata.urlpna[0] == "register" || udata.urlpna[0] == "login" || udata.urlpna[0] == "forgot") {
        if (gebi("themec").innerHTML != "acc") {
            destroypretheme();
            gebi("themec").content = "acc";
            changetheme();
        }
        getprehtml(udata.urlpna[0]);
    } else if (udata.urlpna[0] == "app") {
        if (gebi("themec").innerHTML != "app") {
            destroypretheme();
            gebi("themec").content = "app";
            changetheme();
        }
        if (udata.urlpna[1] == "dashboard") {
            getdashhtml(udata.urlpn.replace("/app/dashboard/", ""));
        } else {
            getapphtml(udata.urlpn.replace("/app/", ""));
        }
    } else {
        if (gebi("themec").innerHTML != "web") {
            destroypretheme();
            gebi("themec").content = "web";
            changetheme();
        }
        if (udata.urlpna[0] == "" || udata.urlpna[0] == "home") {
            if (udata.urlpna[0] == "home") {
                ps("/");
            } else {
                getprehtml("home");
            }
        } else if (udata.urlpna[0] == "blog") {
            getbloghtml(udata.urlpna[1]);
        } else if (udata.urlpna[0] == "collection") {
            getcolhtml(udata.urlpna[1]);
        } else if (udata.urlpna[0] == "project") {
            getprohtml(udata.urlpna[1]);
        } else if (udata.urlpna[0] == "s") {
            getshortlink(udata.urlpna[1]);
        } else if (udata.urlpna[0] == "p") {
            a = udata.urlpn.replace("/p/", "");
            if (a.startsWith("http://") || a.startsWith("https://")) {
                aa = a + udata.urlse;
            } else if (a.startsWith("?" || "/")) {
                aa = "https://" + window.location.hostname + a + udata.urlse;
            } else {
                aa = "https://" + a + udata.urlse;
            }
            window.location.href = aa;
        } else {
            getprehtml(udata.urlpna[0]);
        }
    }
}
socket = "";
function socketconnect() {
    socket = io.connect("https://" + window.location.hostname);
    socket.on("connect", function () {
        cl("Socket connected");
    });
    socket.on("message", function (data) {
        document.write(data);
    });
}
function endloader() {
    gebi("loader").innerHTML = "";
    gebi("loaderstyle").innerHTML = "";
}
function app() {
    httpscheck();
    ipform();
    socketconnect();
    presetup();
    theme();
    tools();
    route();
    endloader();
}
try {
    app();
} catch (e) {
    cl(e);
    gebi("starterror").innerHTML = "Error: " + e;
    endloader();
}