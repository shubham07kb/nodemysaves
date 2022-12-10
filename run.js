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
const { Cookie } = require("express-session");
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
!(function (t, e) {
    "object" == typeof exports && "undefined" != typeof module ? (module.exports = e()) : "function" == typeof define && define.amd ? define(e) : ((t = "undefined" != typeof globalThis ? globalThis : t || self).io = e());
})(this, function () {
    "use strict";
    function t(e) {
        return (
            (t =
                "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                    ? function (t) {
                          return typeof t;
                      }
                    : function (t) {
                          return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
                      }),
            t(e)
        );
    }
    function e(t, e) {
        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
    }
    function n(t, e) {
        for (var n = 0; n < e.length; n++) {
            var r = e[n];
            (r.enumerable = r.enumerable || !1), (r.configurable = !0), "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r);
        }
    }
    function r(t, e, r) {
        return e && n(t.prototype, e), r && n(t, r), Object.defineProperty(t, "prototype", { writable: !1 }), t;
    }
    function i() {
        return (
            (i = Object.assign
                ? Object.assign.bind()
                : function (t) {
                      for (var e = 1; e < arguments.length; e++) {
                          var n = arguments[e];
                          for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r]);
                      }
                      return t;
                  }),
            i.apply(this, arguments)
        );
    }
    function o(t, e) {
        if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
        (t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } })), Object.defineProperty(t, "prototype", { writable: !1 }), e && a(t, e);
    }
    function s(t) {
        return (
            (s = Object.setPrototypeOf
                ? Object.getPrototypeOf.bind()
                : function (t) {
                      return t.__proto__ || Object.getPrototypeOf(t);
                  }),
            s(t)
        );
    }
    function a(t, e) {
        return (
            (a = Object.setPrototypeOf
                ? Object.setPrototypeOf.bind()
                : function (t, e) {
                      return (t.__proto__ = e), t;
                  }),
            a(t, e)
        );
    }
    function c() {
        if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
        if (Reflect.construct.sham) return !1;
        if ("function" == typeof Proxy) return !0;
        try {
            return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})), !0;
        } catch (t) {
            return !1;
        }
    }
    function u(t, e, n) {
        return (
            (u = c()
                ? Reflect.construct.bind()
                : function (t, e, n) {
                      var r = [null];
                      r.push.apply(r, e);
                      var i = new (Function.bind.apply(t, r))();
                      return n && a(i, n.prototype), i;
                  }),
            u.apply(null, arguments)
        );
    }
    function h(t) {
        var e = "function" == typeof Map ? new Map() : void 0;
        return (
            (h = function (t) {
                if (null === t || ((n = t), -1 === Function.toString.call(n).indexOf("[native code]"))) return t;
                var n;
                if ("function" != typeof t) throw new TypeError("Super expression must either be null or a function");
                if (void 0 !== e) {
                    if (e.has(t)) return e.get(t);
                    e.set(t, r);
                }
                function r() {
                    return u(t, arguments, s(this).constructor);
                }
                return (r.prototype = Object.create(t.prototype, { constructor: { value: r, enumerable: !1, writable: !0, configurable: !0 } })), a(r, t);
            }),
            h(t)
        );
    }
    function f(t) {
        if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return t;
    }
    function l(t, e) {
        if (e && ("object" == typeof e || "function" == typeof e)) return e;
        if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined");
        return f(t);
    }
    function p(t) {
        var e = c();
        return function () {
            var n,
                r = s(t);
            if (e) {
                var i = s(this).constructor;
                n = Reflect.construct(r, arguments, i);
            } else n = r.apply(this, arguments);
            return l(this, n);
        };
    }
    function d(t, e) {
        for (; !Object.prototype.hasOwnProperty.call(t, e) && null !== (t = s(t)); );
        return t;
    }
    function y() {
        return (
            (y =
                "undefined" != typeof Reflect && Reflect.get
                    ? Reflect.get.bind()
                    : function (t, e, n) {
                          var r = d(t, e);
                          if (r) {
                              var i = Object.getOwnPropertyDescriptor(r, e);
                              return i.get ? i.get.call(arguments.length < 3 ? t : n) : i.value;
                          }
                      }),
            y.apply(this, arguments)
        );
    }
    function v(t, e) {
        (null == e || e > t.length) && (e = t.length);
        for (var n = 0, r = new Array(e); n < e; n++) r[n] = t[n];
        return r;
    }
    function g(t, e) {
        var n = ("undefined" != typeof Symbol && t[Symbol.iterator]) || t["@@iterator"];
        if (!n) {
            if (
                Array.isArray(t) ||
                (n = (function (t, e) {
                    if (t) {
                        if ("string" == typeof t) return v(t, e);
                        var n = Object.prototype.toString.call(t).slice(8, -1);
                        return "Object" === n && t.constructor && (n = t.constructor.name), "Map" === n || "Set" === n ? Array.from(t) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? v(t, e) : void 0;
                    }
                })(t)) ||
                (e && t && "number" == typeof t.length)
            ) {
                n && (t = n);
                var r = 0,
                    i = function () {};
                return {
                    s: i,
                    n: function () {
                        return r >= t.length ? { done: !0 } : { done: !1, value: t[r++] };
                    },
                    e: function (t) {
                        throw t;
                    },
                    f: i,
                };
            }
            throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
        }
        var o,
            s = !0,
            a = !1;
        return {
            s: function () {
                n = n.call(t);
            },
            n: function () {
                var t = n.next();
                return (s = t.done), t;
            },
            e: function (t) {
                (a = !0), (o = t);
            },
            f: function () {
                try {
                    s || null == n.return || n.return();
                } finally {
                    if (a) throw o;
                }
            },
        };
    }
    var m = Object.create(null);
    (m.open = "0"), (m.close = "1"), (m.ping = "2"), (m.pong = "3"), (m.message = "4"), (m.upgrade = "5"), (m.noop = "6");
    var b = Object.create(null);
    Object.keys(m).forEach(function (t) {
        b[m[t]] = t;
    });
    for (
        var k = { type: "error", data: "parser error" },
            w = "function" == typeof Blob || ("undefined" != typeof Blob && "[object BlobConstructor]" === Object.prototype.toString.call(Blob)),
            _ = "function" == typeof ArrayBuffer,
            E = function (t, e, n) {
                var r,
                    i = t.type,
                    o = t.data;
                return w && o instanceof Blob
                    ? e
                        ? n(o)
                        : O(o, n)
                    : _ && (o instanceof ArrayBuffer || ((r = o), "function" == typeof ArrayBuffer.isView ? ArrayBuffer.isView(r) : r && r.buffer instanceof ArrayBuffer))
                    ? e
                        ? n(o)
                        : O(new Blob([o]), n)
                    : n(m[i] + (o || ""));
            },
            O = function (t, e) {
                var n = new FileReader();
                return (
                    (n.onload = function () {
                        var t = n.result.split(",")[1];
                        e("b" + t);
                    }),
                    n.readAsDataURL(t)
                );
            },
            A = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",
            R = "undefined" == typeof Uint8Array ? [] : new Uint8Array(256),
            T = 0;
        T < A.length;
        T++
    )
        R[A.charCodeAt(T)] = T;
    var C = "function" == typeof ArrayBuffer,
        B = function (t, e) {
            if ("string" != typeof t) return { type: "message", data: N(t, e) };
            var n = t.charAt(0);
            return "b" === n ? { type: "message", data: S(t.substring(1), e) } : b[n] ? (t.length > 1 ? { type: b[n], data: t.substring(1) } : { type: b[n] }) : k;
        },
        S = function (t, e) {
            if (C) {
                var n = (function (t) {
                    var e,
                        n,
                        r,
                        i,
                        o,
                        s = 0.75 * t.length,
                        a = t.length,
                        c = 0;
                    "=" === t[t.length - 1] && (s--, "=" === t[t.length - 2] && s--);
                    var u = new ArrayBuffer(s),
                        h = new Uint8Array(u);
                    for (e = 0; e < a; e += 4)
                        (n = R[t.charCodeAt(e)]),
                            (r = R[t.charCodeAt(e + 1)]),
                            (i = R[t.charCodeAt(e + 2)]),
                            (o = R[t.charCodeAt(e + 3)]),
                            (h[c++] = (n << 2) | (r >> 4)),
                            (h[c++] = ((15 & r) << 4) | (i >> 2)),
                            (h[c++] = ((3 & i) << 6) | (63 & o));
                    return u;
                })(t);
                return N(n, e);
            }
            return { base64: !0, data: t };
        },
        N = function (t, e) {
            return "blob" === e && t instanceof ArrayBuffer ? new Blob([t]) : t;
        },
        x = String.fromCharCode(30);
    function L(t) {
        if (t)
            return (function (t) {
                for (var e in L.prototype) t[e] = L.prototype[e];
                return t;
            })(t);
    }
    (L.prototype.on = L.prototype.addEventListener = function (t, e) {
        return (this._callbacks = this._callbacks || {}), (this._callbacks["$" + t] = this._callbacks["$" + t] || []).push(e), this;
    }),
        (L.prototype.once = function (t, e) {
            function n() {
                this.off(t, n), e.apply(this, arguments);
            }
            return (n.fn = e), this.on(t, n), this;
        }),
        (L.prototype.off = L.prototype.removeListener = L.prototype.removeAllListeners = L.prototype.removeEventListener = function (t, e) {
            if (((this._callbacks = this._callbacks || {}), 0 == arguments.length)) return (this._callbacks = {}), this;
            var n,
                r = this._callbacks["$" + t];
            if (!r) return this;
            if (1 == arguments.length) return delete this._callbacks["$" + t], this;
            for (var i = 0; i < r.length; i++)
                if ((n = r[i]) === e || n.fn === e) {
                    r.splice(i, 1);
                    break;
                }
            return 0 === r.length && delete this._callbacks["$" + t], this;
        }),
        (L.prototype.emit = function (t) {
            this._callbacks = this._callbacks || {};
            for (var e = new Array(arguments.length - 1), n = this._callbacks["$" + t], r = 1; r < arguments.length; r++) e[r - 1] = arguments[r];
            if (n) {
                r = 0;
                for (var i = (n = n.slice(0)).length; r < i; ++r) n[r].apply(this, e);
            }
            return this;
        }),
        (L.prototype.emitReserved = L.prototype.emit),
        (L.prototype.listeners = function (t) {
            return (this._callbacks = this._callbacks || {}), this._callbacks["$" + t] || [];
        }),
        (L.prototype.hasListeners = function (t) {
            return !!this.listeners(t).length;
        });
    var P = "undefined" != typeof self ? self : "undefined" != typeof window ? window : Function("return this")();
    function j(t) {
        for (var e = arguments.length, n = new Array(e > 1 ? e - 1 : 0), r = 1; r < e; r++) n[r - 1] = arguments[r];
        return n.reduce(function (e, n) {
            return t.hasOwnProperty(n) && (e[n] = t[n]), e;
        }, {});
    }
    var q = setTimeout,
        I = clearTimeout;
    function D(t, e) {
        e.useNativeTimers ? ((t.setTimeoutFn = q.bind(P)), (t.clearTimeoutFn = I.bind(P))) : ((t.setTimeoutFn = setTimeout.bind(P)), (t.clearTimeoutFn = clearTimeout.bind(P)));
    }
    var F,
        M = (function (t) {
            o(i, t);
            var n = p(i);
            function i(t, r, o) {
                var s;
                return e(this, i), ((s = n.call(this, t)).description = r), (s.context = o), (s.type = "TransportError"), s;
            }
            return r(i);
        })(h(Error)),
        U = (function (t) {
            o(i, t);
            var n = p(i);
            function i(t) {
                var r;
                return e(this, i), ((r = n.call(this)).writable = !1), D(f(r), t), (r.opts = t), (r.query = t.query), (r.readyState = ""), (r.socket = t.socket), r;
            }
            return (
                r(i, [
                    {
                        key: "onError",
                        value: function (t, e, n) {
                            return y(s(i.prototype), "emitReserved", this).call(this, "error", new M(t, e, n)), this;
                        },
                    },
                    {
                        key: "open",
                        value: function () {
                            return ("closed" !== this.readyState && "" !== this.readyState) || ((this.readyState = "opening"), this.doOpen()), this;
                        },
                    },
                    {
                        key: "close",
                        value: function () {
                            return ("opening" !== this.readyState && "open" !== this.readyState) || (this.doClose(), this.onClose()), this;
                        },
                    },
                    {
                        key: "send",
                        value: function (t) {
                            "open" === this.readyState && this.write(t);
                        },
                    },
                    {
                        key: "onOpen",
                        value: function () {
                            (this.readyState = "open"), (this.writable = !0), y(s(i.prototype), "emitReserved", this).call(this, "open");
                        },
                    },
                    {
                        key: "onData",
                        value: function (t) {
                            var e = B(t, this.socket.binaryType);
                            this.onPacket(e);
                        },
                    },
                    {
                        key: "onPacket",
                        value: function (t) {
                            y(s(i.prototype), "emitReserved", this).call(this, "packet", t);
                        },
                    },
                    {
                        key: "onClose",
                        value: function (t) {
                            (this.readyState = "closed"), y(s(i.prototype), "emitReserved", this).call(this, "close", t);
                        },
                    },
                ]),
                i
            );
        })(L),
        V = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-_".split(""),
        H = {},
        K = 0,
        Y = 0;
    function z(t) {
        var e = "";
        do {
            (e = V[t % 64] + e), (t = Math.floor(t / 64));
        } while (t > 0);
        return e;
    }
    function W() {
        var t = z(+new Date());
        return t !== F ? ((K = 0), (F = t)) : t + "." + z(K++);
    }
    for (; Y < 64; Y++) H[V[Y]] = Y;
    function $(t) {
        var e = "";
        for (var n in t) t.hasOwnProperty(n) && (e.length && (e += "&"), (e += encodeURIComponent(n) + "=" + encodeURIComponent(t[n])));
        return e;
    }
    function J(t) {
        for (var e = {}, n = t.split("&"), r = 0, i = n.length; r < i; r++) {
            var o = n[r].split("=");
            e[decodeURIComponent(o[0])] = decodeURIComponent(o[1]);
        }
        return e;
    }
    var X = !1;
    try {
        X = "undefined" != typeof XMLHttpRequest && "withCredentials" in new XMLHttpRequest();
    } catch (t) {}
    var G = X;
    function Q(t) {
        var e = t.xdomain;
        try {
            if ("undefined" != typeof XMLHttpRequest && (!e || G)) return new XMLHttpRequest();
        } catch (t) {}
        if (!e)
            try {
                return new P[["Active"].concat("Object").join("X")]("Microsoft.XMLHTTP");
            } catch (t) {}
    }
    function Z() {}
    var tt = null != new Q({ xdomain: !1 }).responseType,
        et = (function (t) {
            o(s, t);
            var n = p(s);
            function s(t) {
                var r;
                if ((e(this, s), ((r = n.call(this, t)).polling = !1), "undefined" != typeof location)) {
                    var i = "https:" === location.protocol,
                        o = location.port;
                    o || (o = i ? "443" : "80"), (r.xd = ("undefined" != typeof location && t.hostname !== location.hostname) || o !== t.port), (r.xs = t.secure !== i);
                }
                var a = t && t.forceBase64;
                return (r.supportsBinary = tt && !a), r;
            }
            return (
                r(s, [
                    {
                        key: "name",
                        get: function () {
                            return "polling";
                        },
                    },
                    {
                        key: "doOpen",
                        value: function () {
                            this.poll();
                        },
                    },
                    {
                        key: "pause",
                        value: function (t) {
                            var e = this;
                            this.readyState = "pausing";
                            var n = function () {
                                (e.readyState = "paused"), t();
                            };
                            if (this.polling || !this.writable) {
                                var r = 0;
                                this.polling &&
                                    (r++,
                                    this.once("pollComplete", function () {
                                        --r || n();
                                    })),
                                    this.writable ||
                                        (r++,
                                        this.once("drain", function () {
                                            --r || n();
                                        }));
                            } else n();
                        },
                    },
                    {
                        key: "poll",
                        value: function () {
                            (this.polling = !0), this.doPoll(), this.emitReserved("poll");
                        },
                    },
                    {
                        key: "onData",
                        value: function (t) {
                            var e = this;
                            (function (t, e) {
                                for (var n = t.split(x), r = [], i = 0; i < n.length; i++) {
                                    var o = B(n[i], e);
                                    if ((r.push(o), "error" === o.type)) break;
                                }
                                return r;
                            })(t, this.socket.binaryType).forEach(function (t) {
                                if (("opening" === e.readyState && "open" === t.type && e.onOpen(), "close" === t.type)) return e.onClose({ description: "transport closed by the server" }), !1;
                                e.onPacket(t);
                            }),
                                "closed" !== this.readyState && ((this.polling = !1), this.emitReserved("pollComplete"), "open" === this.readyState && this.poll());
                        },
                    },
                    {
                        key: "doClose",
                        value: function () {
                            var t = this,
                                e = function () {
                                    t.write([{ type: "close" }]);
                                };
                            "open" === this.readyState ? e() : this.once("open", e);
                        },
                    },
                    {
                        key: "write",
                        value: function (t) {
                            var e = this;
                            (this.writable = !1),
                                (function (t, e) {
                                    var n = t.length,
                                        r = new Array(n),
                                        i = 0;
                                    t.forEach(function (t, o) {
                                        E(t, !1, function (t) {
                                            (r[o] = t), ++i === n && e(r.join(x));
                                        });
                                    });
                                })(t, function (t) {
                                    e.doWrite(t, function () {
                                        (e.writable = !0), e.emitReserved("drain");
                                    });
                                });
                        },
                    },
                    {
                        key: "uri",
                        value: function () {
                            var t = this.query || {},
                                e = this.opts.secure ? "https" : "http",
                                n = "";
                            !1 !== this.opts.timestampRequests && (t[this.opts.timestampParam] = W()),
                                this.supportsBinary || t.sid || (t.b64 = 1),
                                this.opts.port && (("https" === e && 443 !== Number(this.opts.port)) || ("http" === e && 80 !== Number(this.opts.port))) && (n = ":" + this.opts.port);
                            var r = $(t);
                            return e + "://" + (-1 !== this.opts.hostname.indexOf(":") ? "[" + this.opts.hostname + "]" : this.opts.hostname) + n + this.opts.path + (r.length ? "?" + r : "");
                        },
                    },
                    {
                        key: "request",
                        value: function () {
                            var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                            return i(t, { xd: this.xd, xs: this.xs }, this.opts), new nt(this.uri(), t);
                        },
                    },
                    {
                        key: "doWrite",
                        value: function (t, e) {
                            var n = this,
                                r = this.request({ method: "POST", data: t });
                            r.on("success", e),
                                r.on("error", function (t, e) {
                                    n.onError("xhr post error", t, e);
                                });
                        },
                    },
                    {
                        key: "doPoll",
                        value: function () {
                            var t = this,
                                e = this.request();
                            e.on("data", this.onData.bind(this)),
                                e.on("error", function (e, n) {
                                    t.onError("xhr poll error", e, n);
                                }),
                                (this.pollXhr = e);
                        },
                    },
                ]),
                s
            );
        })(U),
        nt = (function (t) {
            o(i, t);
            var n = p(i);
            function i(t, r) {
                var o;
                return e(this, i), D(f((o = n.call(this))), r), (o.opts = r), (o.method = r.method || "GET"), (o.uri = t), (o.async = !1 !== r.async), (o.data = void 0 !== r.data ? r.data : null), o.create(), o;
            }
            return (
                r(i, [
                    {
                        key: "create",
                        value: function () {
                            var t = this,
                                e = j(this.opts, "agent", "pfx", "key", "passphrase", "cert", "ca", "ciphers", "rejectUnauthorized", "autoUnref");
                            (e.xdomain = !!this.opts.xd), (e.xscheme = !!this.opts.xs);
                            var n = (this.xhr = new Q(e));
                            try {
                                n.open(this.method, this.uri, this.async);
                                try {
                                    if (this.opts.extraHeaders)
                                        for (var r in (n.setDisableHeaderCheck && n.setDisableHeaderCheck(!0), this.opts.extraHeaders)) this.opts.extraHeaders.hasOwnProperty(r) && n.setRequestHeader(r, this.opts.extraHeaders[r]);
                                } catch (t) {}
                                if ("POST" === this.method)
                                    try {
                                        n.setRequestHeader("Content-type", "text/plain;charset=UTF-8");
                                    } catch (t) {}
                                try {
                                    n.setRequestHeader("Accept", "*/*");
                                } catch (t) {}
                                "withCredentials" in n && (n.withCredentials = this.opts.withCredentials),
                                    this.opts.requestTimeout && (n.timeout = this.opts.requestTimeout),
                                    (n.onreadystatechange = function () {
                                        4 === n.readyState &&
                                            (200 === n.status || 1223 === n.status
                                                ? t.onLoad()
                                                : t.setTimeoutFn(function () {
                                                      t.onError("number" == typeof n.status ? n.status : 0);
                                                  }, 0));
                                    }),
                                    n.send(this.data);
                            } catch (e) {
                                return void this.setTimeoutFn(function () {
                                    t.onError(e);
                                }, 0);
                            }
                            "undefined" != typeof document && ((this.index = i.requestsCount++), (i.requests[this.index] = this));
                        },
                    },
                    {
                        key: "onError",
                        value: function (t) {
                            this.emitReserved("error", t, this.xhr), this.cleanup(!0);
                        },
                    },
                    {
                        key: "cleanup",
                        value: function (t) {
                            if (void 0 !== this.xhr && null !== this.xhr) {
                                if (((this.xhr.onreadystatechange = Z), t))
                                    try {
                                        this.xhr.abort();
                                    } catch (t) {}
                                "undefined" != typeof document && delete i.requests[this.index], (this.xhr = null);
                            }
                        },
                    },
                    {
                        key: "onLoad",
                        value: function () {
                            var t = this.xhr.responseText;
                            null !== t && (this.emitReserved("data", t), this.emitReserved("success"), this.cleanup());
                        },
                    },
                    {
                        key: "abort",
                        value: function () {
                            this.cleanup();
                        },
                    },
                ]),
                i
            );
        })(L);
    if (((nt.requestsCount = 0), (nt.requests = {}), "undefined" != typeof document))
        if ("function" == typeof attachEvent) attachEvent("onunload", rt);
        else if ("function" == typeof addEventListener) {
            addEventListener("onpagehide" in P ? "pagehide" : "unload", rt, !1);
        }
    function rt() {
        for (var t in nt.requests) nt.requests.hasOwnProperty(t) && nt.requests[t].abort();
    }
    var it =
            "function" == typeof Promise && "function" == typeof Promise.resolve
                ? function (t) {
                      return Promise.resolve().then(t);
                  }
                : function (t, e) {
                      return e(t, 0);
                  },
        ot = P.WebSocket || P.MozWebSocket,
        st = "undefined" != typeof navigator && "string" == typeof navigator.product && "reactnative" === navigator.product.toLowerCase(),
        at = (function (t) {
            o(i, t);
            var n = p(i);
            function i(t) {
                var r;
                return e(this, i), ((r = n.call(this, t)).supportsBinary = !t.forceBase64), r;
            }
            return (
                r(i, [
                    {
                        key: "name",
                        get: function () {
                            return "websocket";
                        },
                    },
                    {
                        key: "doOpen",
                        value: function () {
                            if (this.check()) {
                                var t = this.uri(),
                                    e = this.opts.protocols,
                                    n = st
                                        ? {}
                                        : j(
                                              this.opts,
                                              "agent",
                                              "perMessageDeflate",
                                              "pfx",
                                              "key",
                                              "passphrase",
                                              "cert",
                                              "ca",
                                              "ciphers",
                                              "rejectUnauthorized",
                                              "localAddress",
                                              "protocolVersion",
                                              "origin",
                                              "maxPayload",
                                              "family",
                                              "checkServerIdentity"
                                          );
                                this.opts.extraHeaders && (n.headers = this.opts.extraHeaders);
                                try {
                                    this.ws = st ? new ot(t, e, n) : e ? new ot(t, e) : new ot(t);
                                } catch (t) {
                                    return this.emitReserved("error", t);
                                }
                                (this.ws.binaryType = this.socket.binaryType || "arraybuffer"), this.addEventListeners();
                            }
                        },
                    },
                    {
                        key: "addEventListeners",
                        value: function () {
                            var t = this;
                            (this.ws.onopen = function () {
                                t.opts.autoUnref && t.ws._socket.unref(), t.onOpen();
                            }),
                                (this.ws.onclose = function (e) {
                                    return t.onClose({ description: "websocket connection closed", context: e });
                                }),
                                (this.ws.onmessage = function (e) {
                                    return t.onData(e.data);
                                }),
                                (this.ws.onerror = function (e) {
                                    return t.onError("websocket error", e);
                                });
                        },
                    },
                    {
                        key: "write",
                        value: function (t) {
                            var e = this;
                            this.writable = !1;
                            for (
                                var n = function (n) {
                                        var r = t[n],
                                            i = n === t.length - 1;
                                        E(r, e.supportsBinary, function (t) {
                                            try {
                                                e.ws.send(t);
                                            } catch (t) {}
                                            i &&
                                                it(function () {
                                                    (e.writable = !0), e.emitReserved("drain");
                                                }, e.setTimeoutFn);
                                        });
                                    },
                                    r = 0;
                                r < t.length;
                                r++
                            )
                                n(r);
                        },
                    },
                    {
                        key: "doClose",
                        value: function () {
                            void 0 !== this.ws && (this.ws.close(), (this.ws = null));
                        },
                    },
                    {
                        key: "uri",
                        value: function () {
                            var t = this.query || {},
                                e = this.opts.secure ? "wss" : "ws",
                                n = "";
                            this.opts.port && (("wss" === e && 443 !== Number(this.opts.port)) || ("ws" === e && 80 !== Number(this.opts.port))) && (n = ":" + this.opts.port),
                                this.opts.timestampRequests && (t[this.opts.timestampParam] = W()),
                                this.supportsBinary || (t.b64 = 1);
                            var r = $(t);
                            return e + "://" + (-1 !== this.opts.hostname.indexOf(":") ? "[" + this.opts.hostname + "]" : this.opts.hostname) + n + this.opts.path + (r.length ? "?" + r : "");
                        },
                    },
                    {
                        key: "check",
                        value: function () {
                            return !!ot;
                        },
                    },
                ]),
                i
            );
        })(U),
        ct = { websocket: at, polling: et },
        ut = /^(?:(?![^:@]+:[^:@\/]*@)(http|https|ws|wss):\/\/)?((?:(([^:@]*)(?::([^:@]*))?)?@)?((?:[a-f0-9]{0,4}:){2,7}[a-f0-9]{0,4}|[^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/,
        ht = ["source", "protocol", "authority", "userInfo", "user", "password", "host", "port", "relative", "path", "directory", "file", "query", "anchor"];
    function ft(t) {
        var e = t,
            n = t.indexOf("["),
            r = t.indexOf("]");
        -1 != n && -1 != r && (t = t.substring(0, n) + t.substring(n, r).replace(/:/g, ";") + t.substring(r, t.length));
        for (var i, o, s = ut.exec(t || ""), a = {}, c = 14; c--; ) a[ht[c]] = s[c] || "";
        return (
            -1 != n && -1 != r && ((a.source = e), (a.host = a.host.substring(1, a.host.length - 1).replace(/;/g, ":")), (a.authority = a.authority.replace("[", "").replace("]", "").replace(/;/g, ":")), (a.ipv6uri = !0)),
            (a.pathNames = (function (t, e) {
                var n = /\/{2,9}/g,
                    r = e.replace(n, "/").split("/");
                ("/" != e.slice(0, 1) && 0 !== e.length) || r.splice(0, 1);
                "/" == e.slice(-1) && r.splice(r.length - 1, 1);
                return r;
            })(0, a.path)),
            (a.queryKey =
                ((i = a.query),
                (o = {}),
                i.replace(/(?:^|&)([^&=]*)=?([^&]*)/g, function (t, e, n) {
                    e && (o[e] = n);
                }),
                o)),
            a
        );
    }
    var lt = (function (n) {
        o(a, n);
        var s = p(a);
        function a(n) {
            var r,
                o = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
            return (
                e(this, a),
                (r = s.call(this)),
                n && "object" === t(n) && ((o = n), (n = null)),
                n ? ((n = ft(n)), (o.hostname = n.host), (o.secure = "https" === n.protocol || "wss" === n.protocol), (o.port = n.port), n.query && (o.query = n.query)) : o.host && (o.hostname = ft(o.host).host),
                D(f(r), o),
                (r.secure = null != o.secure ? o.secure : "undefined" != typeof location && "https:" === location.protocol),
                o.hostname && !o.port && (o.port = r.secure ? "443" : "80"),
                (r.hostname = o.hostname || ("undefined" != typeof location ? location.hostname : "localhost")),
                (r.port = o.port || ("undefined" != typeof location && location.port ? location.port : r.secure ? "443" : "80")),
                (r.transports = o.transports || ["polling", "websocket"]),
                (r.readyState = ""),
                (r.writeBuffer = []),
                (r.prevBufferLen = 0),
                (r.opts = i(
                    {
                        path: "/engine.io",
                        agent: !1,
                        withCredentials: !1,
                        upgrade: !0,
                        timestampParam: "t",
                        rememberUpgrade: !1,
                        rejectUnauthorized: !0,
                        perMessageDeflate: { threshold: 1024 },
                        transportOptions: {},
                        closeOnBeforeunload: !0,
                    },
                    o
                )),
                (r.opts.path = r.opts.path.replace(/\/$/, "") + "/"),
                "string" == typeof r.opts.query && (r.opts.query = J(r.opts.query)),
                (r.id = null),
                (r.upgrades = null),
                (r.pingInterval = null),
                (r.pingTimeout = null),
                (r.pingTimeoutTimer = null),
                "function" == typeof addEventListener &&
                    (r.opts.closeOnBeforeunload &&
                        ((r.beforeunloadEventListener = function () {
                            r.transport && (r.transport.removeAllListeners(), r.transport.close());
                        }),
                        addEventListener("beforeunload", r.beforeunloadEventListener, !1)),
                    "localhost" !== r.hostname &&
                        ((r.offlineEventListener = function () {
                            r.onClose("transport close", { description: "network connection lost" });
                        }),
                        addEventListener("offline", r.offlineEventListener, !1))),
                r.open(),
                r
            );
        }
        return (
            r(a, [
                {
                    key: "createTransport",
                    value: function (t) {
                        var e = i({}, this.opts.query);
                        (e.EIO = 4), (e.transport = t), this.id && (e.sid = this.id);
                        var n = i({}, this.opts.transportOptions[t], this.opts, { query: e, socket: this, hostname: this.hostname, secure: this.secure, port: this.port });
                        return new ct[t](n);
                    },
                },
                {
                    key: "open",
                    value: function () {
                        var t,
                            e = this;
                        if (this.opts.rememberUpgrade && a.priorWebsocketSuccess && -1 !== this.transports.indexOf("websocket")) t = "websocket";
                        else {
                            if (0 === this.transports.length)
                                return void this.setTimeoutFn(function () {
                                    e.emitReserved("error", "No transports available");
                                }, 0);
                            t = this.transports[0];
                        }
                        this.readyState = "opening";
                        try {
                            t = this.createTransport(t);
                        } catch (t) {
                            return this.transports.shift(), void this.open();
                        }
                        t.open(), this.setTransport(t);
                    },
                },
                {
                    key: "setTransport",
                    value: function (t) {
                        var e = this;
                        this.transport && this.transport.removeAllListeners(),
                            (this.transport = t),
                            t
                                .on("drain", this.onDrain.bind(this))
                                .on("packet", this.onPacket.bind(this))
                                .on("error", this.onError.bind(this))
                                .on("close", function (t) {
                                    return e.onClose("transport close", t);
                                });
                    },
                },
                {
                    key: "probe",
                    value: function (t) {
                        var e = this,
                            n = this.createTransport(t),
                            r = !1;
                        a.priorWebsocketSuccess = !1;
                        var i = function () {
                            r ||
                                (n.send([{ type: "ping", data: "probe" }]),
                                n.once("packet", function (t) {
                                    if (!r)
                                        if ("pong" === t.type && "probe" === t.data) {
                                            if (((e.upgrading = !0), e.emitReserved("upgrading", n), !n)) return;
                                            (a.priorWebsocketSuccess = "websocket" === n.name),
                                                e.transport.pause(function () {
                                                    r || ("closed" !== e.readyState && (f(), e.setTransport(n), n.send([{ type: "upgrade" }]), e.emitReserved("upgrade", n), (n = null), (e.upgrading = !1), e.flush()));
                                                });
                                        } else {
                                            var i = new Error("probe error");
                                            (i.transport = n.name), e.emitReserved("upgradeError", i);
                                        }
                                }));
                        };
                        function o() {
                            r || ((r = !0), f(), n.close(), (n = null));
                        }
                        var s = function (t) {
                            var r = new Error("probe error: " + t);
                            (r.transport = n.name), o(), e.emitReserved("upgradeError", r);
                        };
                        function c() {
                            s("transport closed");
                        }
                        function u() {
                            s("socket closed");
                        }
                        function h(t) {
                            n && t.name !== n.name && o();
                        }
                        var f = function () {
                            n.removeListener("open", i), n.removeListener("error", s), n.removeListener("close", c), e.off("close", u), e.off("upgrading", h);
                        };
                        n.once("open", i), n.once("error", s), n.once("close", c), this.once("close", u), this.once("upgrading", h), n.open();
                    },
                },
                {
                    key: "onOpen",
                    value: function () {
                        if (((this.readyState = "open"), (a.priorWebsocketSuccess = "websocket" === this.transport.name), this.emitReserved("open"), this.flush(), "open" === this.readyState && this.opts.upgrade && this.transport.pause))
                            for (var t = 0, e = this.upgrades.length; t < e; t++) this.probe(this.upgrades[t]);
                    },
                },
                {
                    key: "onPacket",
                    value: function (t) {
                        if ("opening" === this.readyState || "open" === this.readyState || "closing" === this.readyState)
                            switch ((this.emitReserved("packet", t), this.emitReserved("heartbeat"), t.type)) {
                                case "open":
                                    this.onHandshake(JSON.parse(t.data));
                                    break;
                                case "ping":
                                    this.resetPingTimeout(), this.sendPacket("pong"), this.emitReserved("ping"), this.emitReserved("pong");
                                    break;
                                case "error":
                                    var e = new Error("server error");
                                    (e.code = t.data), this.onError(e);
                                    break;
                                case "message":
                                    this.emitReserved("data", t.data), this.emitReserved("message", t.data);
                            }
                    },
                },
                {
                    key: "onHandshake",
                    value: function (t) {
                        this.emitReserved("handshake", t),
                            (this.id = t.sid),
                            (this.transport.query.sid = t.sid),
                            (this.upgrades = this.filterUpgrades(t.upgrades)),
                            (this.pingInterval = t.pingInterval),
                            (this.pingTimeout = t.pingTimeout),
                            (this.maxPayload = t.maxPayload),
                            this.onOpen(),
                            "closed" !== this.readyState && this.resetPingTimeout();
                    },
                },
                {
                    key: "resetPingTimeout",
                    value: function () {
                        var t = this;
                        this.clearTimeoutFn(this.pingTimeoutTimer),
                            (this.pingTimeoutTimer = this.setTimeoutFn(function () {
                                t.onClose("ping timeout");
                            }, this.pingInterval + this.pingTimeout)),
                            this.opts.autoUnref && this.pingTimeoutTimer.unref();
                    },
                },
                {
                    key: "onDrain",
                    value: function () {
                        this.writeBuffer.splice(0, this.prevBufferLen), (this.prevBufferLen = 0), 0 === this.writeBuffer.length ? this.emitReserved("drain") : this.flush();
                    },
                },
                {
                    key: "flush",
                    value: function () {
                        if ("closed" !== this.readyState && this.transport.writable && !this.upgrading && this.writeBuffer.length) {
                            var t = this.getWritablePackets();
                            this.transport.send(t), (this.prevBufferLen = t.length), this.emitReserved("flush");
                        }
                    },
                },
                {
                    key: "getWritablePackets",
                    value: function () {
                        if (!(this.maxPayload && "polling" === this.transport.name && this.writeBuffer.length > 1)) return this.writeBuffer;
                        for (var t, e = 1, n = 0; n < this.writeBuffer.length; n++) {
                            var r = this.writeBuffer[n].data;
                            if (
                                (r &&
                                    (e +=
                                        "string" == typeof (t = r)
                                            ? (function (t) {
                                                  for (var e = 0, n = 0, r = 0, i = t.length; r < i; r++) (e = t.charCodeAt(r)) < 128 ? (n += 1) : e < 2048 ? (n += 2) : e < 55296 || e >= 57344 ? (n += 3) : (r++, (n += 4));
                                                  return n;
                                              })(t)
                                            : Math.ceil(1.33 * (t.byteLength || t.size))),
                                n > 0 && e > this.maxPayload)
                            )
                                return this.writeBuffer.slice(0, n);
                            e += 2;
                        }
                        return this.writeBuffer;
                    },
                },
                {
                    key: "write",
                    value: function (t, e, n) {
                        return this.sendPacket("message", t, e, n), this;
                    },
                },
                {
                    key: "send",
                    value: function (t, e, n) {
                        return this.sendPacket("message", t, e, n), this;
                    },
                },
                {
                    key: "sendPacket",
                    value: function (t, e, n, r) {
                        if (("function" == typeof e && ((r = e), (e = void 0)), "function" == typeof n && ((r = n), (n = null)), "closing" !== this.readyState && "closed" !== this.readyState)) {
                            (n = n || {}).compress = !1 !== n.compress;
                            var i = { type: t, data: e, options: n };
                            this.emitReserved("packetCreate", i), this.writeBuffer.push(i), r && this.once("flush", r), this.flush();
                        }
                    },
                },
                {
                    key: "close",
                    value: function () {
                        var t = this,
                            e = function () {
                                t.onClose("forced close"), t.transport.close();
                            },
                            n = function n() {
                                t.off("upgrade", n), t.off("upgradeError", n), e();
                            },
                            r = function () {
                                t.once("upgrade", n), t.once("upgradeError", n);
                            };
                        return (
                            ("opening" !== this.readyState && "open" !== this.readyState) ||
                                ((this.readyState = "closing"),
                                this.writeBuffer.length
                                    ? this.once("drain", function () {
                                          t.upgrading ? r() : e();
                                      })
                                    : this.upgrading
                                    ? r()
                                    : e()),
                            this
                        );
                    },
                },
                {
                    key: "onError",
                    value: function (t) {
                        (a.priorWebsocketSuccess = !1), this.emitReserved("error", t), this.onClose("transport error", t);
                    },
                },
                {
                    key: "onClose",
                    value: function (t, e) {
                        ("opening" !== this.readyState && "open" !== this.readyState && "closing" !== this.readyState) ||
                            (this.clearTimeoutFn(this.pingTimeoutTimer),
                            this.transport.removeAllListeners("close"),
                            this.transport.close(),
                            this.transport.removeAllListeners(),
                            "function" == typeof removeEventListener && (removeEventListener("beforeunload", this.beforeunloadEventListener, !1), removeEventListener("offline", this.offlineEventListener, !1)),
                            (this.readyState = "closed"),
                            (this.id = null),
                            this.emitReserved("close", t, e),
                            (this.writeBuffer = []),
                            (this.prevBufferLen = 0));
                    },
                },
                {
                    key: "filterUpgrades",
                    value: function (t) {
                        for (var e = [], n = 0, r = t.length; n < r; n++) ~this.transports.indexOf(t[n]) && e.push(t[n]);
                        return e;
                    },
                },
            ]),
            a
        );
    })(L);
    (lt.protocol = 4), lt.protocol;
    var pt = "function" == typeof ArrayBuffer,
        dt = Object.prototype.toString,
        yt = "function" == typeof Blob || ("undefined" != typeof Blob && "[object BlobConstructor]" === dt.call(Blob)),
        vt = "function" == typeof File || ("undefined" != typeof File && "[object FileConstructor]" === dt.call(File));
    function gt(t) {
        return (
            (pt &&
                (t instanceof ArrayBuffer ||
                    (function (t) {
                        return "function" == typeof ArrayBuffer.isView ? ArrayBuffer.isView(t) : t.buffer instanceof ArrayBuffer;
                    })(t))) ||
            (yt && t instanceof Blob) ||
            (vt && t instanceof File)
        );
    }
    function mt(e, n) {
        if (!e || "object" !== t(e)) return !1;
        if (Array.isArray(e)) {
            for (var r = 0, i = e.length; r < i; r++) if (mt(e[r])) return !0;
            return !1;
        }
        if (gt(e)) return !0;
        if (e.toJSON && "function" == typeof e.toJSON && 1 === arguments.length) return mt(e.toJSON(), !0);
        for (var o in e) if (Object.prototype.hasOwnProperty.call(e, o) && mt(e[o])) return !0;
        return !1;
    }
    function bt(t) {
        var e = [],
            n = t.data,
            r = t;
        return (r.data = kt(n, e)), (r.attachments = e.length), { packet: r, buffers: e };
    }
    function kt(e, n) {
        if (!e) return e;
        if (gt(e)) {
            var r = { _placeholder: !0, num: n.length };
            return n.push(e), r;
        }
        if (Array.isArray(e)) {
            for (var i = new Array(e.length), o = 0; o < e.length; o++) i[o] = kt(e[o], n);
            return i;
        }
        if ("object" === t(e) && !(e instanceof Date)) {
            var s = {};
            for (var a in e) Object.prototype.hasOwnProperty.call(e, a) && (s[a] = kt(e[a], n));
            return s;
        }
        return e;
    }
    function wt(t, e) {
        return (t.data = _t(t.data, e)), (t.attachments = void 0), t;
    }
    function _t(e, n) {
        if (!e) return e;
        if (e && !0 === e._placeholder) {
            if ("number" == typeof e.num && e.num >= 0 && e.num < n.length) return n[e.num];
            throw new Error("illegal attachments");
        }
        if (Array.isArray(e)) for (var r = 0; r < e.length; r++) e[r] = _t(e[r], n);
        else if ("object" === t(e)) for (var i in e) Object.prototype.hasOwnProperty.call(e, i) && (e[i] = _t(e[i], n));
        return e;
    }
    var Et;
    !(function (t) {
        (t[(t.CONNECT = 0)] = "CONNECT"),
            (t[(t.DISCONNECT = 1)] = "DISCONNECT"),
            (t[(t.EVENT = 2)] = "EVENT"),
            (t[(t.ACK = 3)] = "ACK"),
            (t[(t.CONNECT_ERROR = 4)] = "CONNECT_ERROR"),
            (t[(t.BINARY_EVENT = 5)] = "BINARY_EVENT"),
            (t[(t.BINARY_ACK = 6)] = "BINARY_ACK");
    })(Et || (Et = {}));
    var Ot = (function () {
            function t(n) {
                e(this, t), (this.replacer = n);
            }
            return (
                r(t, [
                    {
                        key: "encode",
                        value: function (t) {
                            return (t.type !== Et.EVENT && t.type !== Et.ACK) || !mt(t) ? [this.encodeAsString(t)] : ((t.type = t.type === Et.EVENT ? Et.BINARY_EVENT : Et.BINARY_ACK), this.encodeAsBinary(t));
                        },
                    },
                    {
                        key: "encodeAsString",
                        value: function (t) {
                            var e = "" + t.type;
                            return (
                                (t.type !== Et.BINARY_EVENT && t.type !== Et.BINARY_ACK) || (e += t.attachments + "-"),
                                t.nsp && "/" !== t.nsp && (e += t.nsp + ","),
                                null != t.id && (e += t.id),
                                null != t.data && (e += JSON.stringify(t.data, this.replacer)),
                                e
                            );
                        },
                    },
                    {
                        key: "encodeAsBinary",
                        value: function (t) {
                            var e = bt(t),
                                n = this.encodeAsString(e.packet),
                                r = e.buffers;
                            return r.unshift(n), r;
                        },
                    },
                ]),
                t
            );
        })(),
        At = (function (n) {
            o(a, n);
            var i = p(a);
            function a(t) {
                var n;
                return e(this, a), ((n = i.call(this)).reviver = t), n;
            }
            return (
                r(
                    a,
                    [
                        {
                            key: "add",
                            value: function (t) {
                                var e;
                                if ("string" == typeof t) {
                                    if (this.reconstructor) throw new Error("got plaintext data when reconstructing a packet");
                                    (e = this.decodeString(t)).type === Et.BINARY_EVENT || e.type === Et.BINARY_ACK
                                        ? ((this.reconstructor = new Rt(e)), 0 === e.attachments && y(s(a.prototype), "emitReserved", this).call(this, "decoded", e))
                                        : y(s(a.prototype), "emitReserved", this).call(this, "decoded", e);
                                } else {
                                    if (!gt(t) && !t.base64) throw new Error("Unknown type: " + t);
                                    if (!this.reconstructor) throw new Error("got binary data when not reconstructing a packet");
                                    (e = this.reconstructor.takeBinaryData(t)) && ((this.reconstructor = null), y(s(a.prototype), "emitReserved", this).call(this, "decoded", e));
                                }
                            },
                        },
                        {
                            key: "decodeString",
                            value: function (t) {
                                var e = 0,
                                    n = { type: Number(t.charAt(0)) };
                                if (void 0 === Et[n.type]) throw new Error("unknown packet type " + n.type);
                                if (n.type === Et.BINARY_EVENT || n.type === Et.BINARY_ACK) {
                                    for (var r = e + 1; "-" !== t.charAt(++e) && e != t.length; );
                                    var i = t.substring(r, e);
                                    if (i != Number(i) || "-" !== t.charAt(e)) throw new Error("Illegal attachments");
                                    n.attachments = Number(i);
                                }
                                if ("/" === t.charAt(e + 1)) {
                                    for (var o = e + 1; ++e; ) {
                                        if ("," === t.charAt(e)) break;
                                        if (e === t.length) break;
                                    }
                                    n.nsp = t.substring(o, e);
                                } else n.nsp = "/";
                                var s = t.charAt(e + 1);
                                if ("" !== s && Number(s) == s) {
                                    for (var c = e + 1; ++e; ) {
                                        var u = t.charAt(e);
                                        if (null == u || Number(u) != u) {
                                            --e;
                                            break;
                                        }
                                        if (e === t.length) break;
                                    }
                                    n.id = Number(t.substring(c, e + 1));
                                }
                                if (t.charAt(++e)) {
                                    var h = this.tryParse(t.substr(e));
                                    if (!a.isPayloadValid(n.type, h)) throw new Error("invalid payload");
                                    n.data = h;
                                }
                                return n;
                            },
                        },
                        {
                            key: "tryParse",
                            value: function (t) {
                                try {
                                    return JSON.parse(t, this.reviver);
                                } catch (t) {
                                    return !1;
                                }
                            },
                        },
                        {
                            key: "destroy",
                            value: function () {
                                this.reconstructor && this.reconstructor.finishedReconstruction();
                            },
                        },
                    ],
                    [
                        {
                            key: "isPayloadValid",
                            value: function (e, n) {
                                switch (e) {
                                    case Et.CONNECT:
                                        return "object" === t(n);
                                    case Et.DISCONNECT:
                                        return void 0 === n;
                                    case Et.CONNECT_ERROR:
                                        return "string" == typeof n || "object" === t(n);
                                    case Et.EVENT:
                                    case Et.BINARY_EVENT:
                                        return Array.isArray(n) && n.length > 0;
                                    case Et.ACK:
                                    case Et.BINARY_ACK:
                                        return Array.isArray(n);
                                }
                            },
                        },
                    ]
                ),
                a
            );
        })(L),
        Rt = (function () {
            function t(n) {
                e(this, t), (this.packet = n), (this.buffers = []), (this.reconPack = n);
            }
            return (
                r(t, [
                    {
                        key: "takeBinaryData",
                        value: function (t) {
                            if ((this.buffers.push(t), this.buffers.length === this.reconPack.attachments)) {
                                var e = wt(this.reconPack, this.buffers);
                                return this.finishedReconstruction(), e;
                            }
                            return null;
                        },
                    },
                    {
                        key: "finishedReconstruction",
                        value: function () {
                            (this.reconPack = null), (this.buffers = []);
                        },
                    },
                ]),
                t
            );
        })(),
        Tt = Object.freeze({
            __proto__: null,
            protocol: 5,
            get PacketType() {
                return Et;
            },
            Encoder: Ot,
            Decoder: At,
        });
    function Ct(t, e, n) {
        return (
            t.on(e, n),
            function () {
                t.off(e, n);
            }
        );
    }
    var Bt = Object.freeze({ connect: 1, connect_error: 1, disconnect: 1, disconnecting: 1, newListener: 1, removeListener: 1 }),
        St = (function (t) {
            o(i, t);
            var n = p(i);
            function i(t, r, o) {
                var s;
                return (
                    e(this, i),
                    ((s = n.call(this)).connected = !1),
                    (s.receiveBuffer = []),
                    (s.sendBuffer = []),
                    (s.ids = 0),
                    (s.acks = {}),
                    (s.flags = {}),
                    (s.io = t),
                    (s.nsp = r),
                    o && o.auth && (s.auth = o.auth),
                    s.io._autoConnect && s.open(),
                    s
                );
            }
            return (
                r(i, [
                    {
                        key: "disconnected",
                        get: function () {
                            return !this.connected;
                        },
                    },
                    {
                        key: "subEvents",
                        value: function () {
                            if (!this.subs) {
                                var t = this.io;
                                this.subs = [Ct(t, "open", this.onopen.bind(this)), Ct(t, "packet", this.onpacket.bind(this)), Ct(t, "error", this.onerror.bind(this)), Ct(t, "close", this.onclose.bind(this))];
                            }
                        },
                    },
                    {
                        key: "active",
                        get: function () {
                            return !!this.subs;
                        },
                    },
                    {
                        key: "connect",
                        value: function () {
                            return this.connected || (this.subEvents(), this.io._reconnecting || this.io.open(), "open" === this.io._readyState && this.onopen()), this;
                        },
                    },
                    {
                        key: "open",
                        value: function () {
                            return this.connect();
                        },
                    },
                    {
                        key: "send",
                        value: function () {
                            for (var t = arguments.length, e = new Array(t), n = 0; n < t; n++) e[n] = arguments[n];
                            return e.unshift("message"), this.emit.apply(this, e), this;
                        },
                    },
                    {
                        key: "emit",
                        value: function (t) {
                            if (Bt.hasOwnProperty(t)) throw new Error('"' + t.toString() + '" is a reserved event name');
                            for (var e = arguments.length, n = new Array(e > 1 ? e - 1 : 0), r = 1; r < e; r++) n[r - 1] = arguments[r];
                            n.unshift(t);
                            var i = { type: Et.EVENT, data: n, options: {} };
                            if (((i.options.compress = !1 !== this.flags.compress), "function" == typeof n[n.length - 1])) {
                                var o = this.ids++,
                                    s = n.pop();
                                this._registerAckCallback(o, s), (i.id = o);
                            }
                            var a = this.io.engine && this.io.engine.transport && this.io.engine.transport.writable,
                                c = this.flags.volatile && (!a || !this.connected);
                            return c || (this.connected ? (this.notifyOutgoingListeners(i), this.packet(i)) : this.sendBuffer.push(i)), (this.flags = {}), this;
                        },
                    },
                    {
                        key: "_registerAckCallback",
                        value: function (t, e) {
                            var n = this,
                                r = this.flags.timeout;
                            if (void 0 !== r) {
                                var i = this.io.setTimeoutFn(function () {
                                    delete n.acks[t];
                                    for (var r = 0; r < n.sendBuffer.length; r++) n.sendBuffer[r].id === t && n.sendBuffer.splice(r, 1);
                                    e.call(n, new Error("operation has timed out"));
                                }, r);
                                this.acks[t] = function () {
                                    n.io.clearTimeoutFn(i);
                                    for (var t = arguments.length, r = new Array(t), o = 0; o < t; o++) r[o] = arguments[o];
                                    e.apply(n, [null].concat(r));
                                };
                            } else this.acks[t] = e;
                        },
                    },
                    {
                        key: "packet",
                        value: function (t) {
                            (t.nsp = this.nsp), this.io._packet(t);
                        },
                    },
                    {
                        key: "onopen",
                        value: function () {
                            var t = this;
                            "function" == typeof this.auth
                                ? this.auth(function (e) {
                                      t.packet({ type: Et.CONNECT, data: e });
                                  })
                                : this.packet({ type: Et.CONNECT, data: this.auth });
                        },
                    },
                    {
                        key: "onerror",
                        value: function (t) {
                            this.connected || this.emitReserved("connect_error", t);
                        },
                    },
                    {
                        key: "onclose",
                        value: function (t, e) {
                            (this.connected = !1), delete this.id, this.emitReserved("disconnect", t, e);
                        },
                    },
                    {
                        key: "onpacket",
                        value: function (t) {
                            if (t.nsp === this.nsp)
                                switch (t.type) {
                                    case Et.CONNECT:
                                        if (t.data && t.data.sid) {
                                            var e = t.data.sid;
                                            this.onconnect(e);
                                        } else
                                            this.emitReserved(
                                                "connect_error",
                                                new Error(
                                                    "It seems you are trying to reach a Socket.IO server in v2.x with a v3.x client, but they are not compatible (more information here: https://socket.io/docs/v3/migrating-from-2-x-to-3-0/)"
                                                )
                                            );
                                        break;
                                    case Et.EVENT:
                                    case Et.BINARY_EVENT:
                                        this.onevent(t);
                                        break;
                                    case Et.ACK:
                                    case Et.BINARY_ACK:
                                        this.onack(t);
                                        break;
                                    case Et.DISCONNECT:
                                        this.ondisconnect();
                                        break;
                                    case Et.CONNECT_ERROR:
                                        this.destroy();
                                        var n = new Error(t.data.message);
                                        (n.data = t.data.data), this.emitReserved("connect_error", n);
                                }
                        },
                    },
                    {
                        key: "onevent",
                        value: function (t) {
                            var e = t.data || [];
                            null != t.id && e.push(this.ack(t.id)), this.connected ? this.emitEvent(e) : this.receiveBuffer.push(Object.freeze(e));
                        },
                    },
                    {
                        key: "emitEvent",
                        value: function (t) {
                            if (this._anyListeners && this._anyListeners.length) {
                                var e,
                                    n = g(this._anyListeners.slice());
                                try {
                                    for (n.s(); !(e = n.n()).done; ) {
                                        e.value.apply(this, t);
                                    }
                                } catch (t) {
                                    n.e(t);
                                } finally {
                                    n.f();
                                }
                            }
                            y(s(i.prototype), "emit", this).apply(this, t);
                        },
                    },
                    {
                        key: "ack",
                        value: function (t) {
                            var e = this,
                                n = !1;
                            return function () {
                                if (!n) {
                                    n = !0;
                                    for (var r = arguments.length, i = new Array(r), o = 0; o < r; o++) i[o] = arguments[o];
                                    e.packet({ type: Et.ACK, id: t, data: i });
                                }
                            };
                        },
                    },
                    {
                        key: "onack",
                        value: function (t) {
                            var e = this.acks[t.id];
                            "function" == typeof e && (e.apply(this, t.data), delete this.acks[t.id]);
                        },
                    },
                    {
                        key: "onconnect",
                        value: function (t) {
                            (this.id = t), (this.connected = !0), this.emitBuffered(), this.emitReserved("connect");
                        },
                    },
                    {
                        key: "emitBuffered",
                        value: function () {
                            var t = this;
                            this.receiveBuffer.forEach(function (e) {
                                return t.emitEvent(e);
                            }),
                                (this.receiveBuffer = []),
                                this.sendBuffer.forEach(function (e) {
                                    t.notifyOutgoingListeners(e), t.packet(e);
                                }),
                                (this.sendBuffer = []);
                        },
                    },
                    {
                        key: "ondisconnect",
                        value: function () {
                            this.destroy(), this.onclose("io server disconnect");
                        },
                    },
                    {
                        key: "destroy",
                        value: function () {
                            this.subs &&
                                (this.subs.forEach(function (t) {
                                    return t();
                                }),
                                (this.subs = void 0)),
                                this.io._destroy(this);
                        },
                    },
                    {
                        key: "disconnect",
                        value: function () {
                            return this.connected && this.packet({ type: Et.DISCONNECT }), this.destroy(), this.connected && this.onclose("io client disconnect"), this;
                        },
                    },
                    {
                        key: "close",
                        value: function () {
                            return this.disconnect();
                        },
                    },
                    {
                        key: "compress",
                        value: function (t) {
                            return (this.flags.compress = t), this;
                        },
                    },
                    {
                        key: "volatile",
                        get: function () {
                            return (this.flags.volatile = !0), this;
                        },
                    },
                    {
                        key: "timeout",
                        value: function (t) {
                            return (this.flags.timeout = t), this;
                        },
                    },
                    {
                        key: "onAny",
                        value: function (t) {
                            return (this._anyListeners = this._anyListeners || []), this._anyListeners.push(t), this;
                        },
                    },
                    {
                        key: "prependAny",
                        value: function (t) {
                            return (this._anyListeners = this._anyListeners || []), this._anyListeners.unshift(t), this;
                        },
                    },
                    {
                        key: "offAny",
                        value: function (t) {
                            if (!this._anyListeners) return this;
                            if (t) {
                                for (var e = this._anyListeners, n = 0; n < e.length; n++) if (t === e[n]) return e.splice(n, 1), this;
                            } else this._anyListeners = [];
                            return this;
                        },
                    },
                    {
                        key: "listenersAny",
                        value: function () {
                            return this._anyListeners || [];
                        },
                    },
                    {
                        key: "onAnyOutgoing",
                        value: function (t) {
                            return (this._anyOutgoingListeners = this._anyOutgoingListeners || []), this._anyOutgoingListeners.push(t), this;
                        },
                    },
                    {
                        key: "prependAnyOutgoing",
                        value: function (t) {
                            return (this._anyOutgoingListeners = this._anyOutgoingListeners || []), this._anyOutgoingListeners.unshift(t), this;
                        },
                    },
                    {
                        key: "offAnyOutgoing",
                        value: function (t) {
                            if (!this._anyOutgoingListeners) return this;
                            if (t) {
                                for (var e = this._anyOutgoingListeners, n = 0; n < e.length; n++) if (t === e[n]) return e.splice(n, 1), this;
                            } else this._anyOutgoingListeners = [];
                            return this;
                        },
                    },
                    {
                        key: "listenersAnyOutgoing",
                        value: function () {
                            return this._anyOutgoingListeners || [];
                        },
                    },
                    {
                        key: "notifyOutgoingListeners",
                        value: function (t) {
                            if (this._anyOutgoingListeners && this._anyOutgoingListeners.length) {
                                var e,
                                    n = g(this._anyOutgoingListeners.slice());
                                try {
                                    for (n.s(); !(e = n.n()).done; ) {
                                        e.value.apply(this, t.data);
                                    }
                                } catch (t) {
                                    n.e(t);
                                } finally {
                                    n.f();
                                }
                            }
                        },
                    },
                ]),
                i
            );
        })(L);
    function Nt(t) {
        (t = t || {}), (this.ms = t.min || 100), (this.max = t.max || 1e4), (this.factor = t.factor || 2), (this.jitter = t.jitter > 0 && t.jitter <= 1 ? t.jitter : 0), (this.attempts = 0);
    }
    (Nt.prototype.duration = function () {
        var t = this.ms * Math.pow(this.factor, this.attempts++);
        if (this.jitter) {
            var e = Math.random(),
                n = Math.floor(e * this.jitter * t);
            t = 0 == (1 & Math.floor(10 * e)) ? t - n : t + n;
        }
        return 0 | Math.min(t, this.max);
    }),
        (Nt.prototype.reset = function () {
            this.attempts = 0;
        }),
        (Nt.prototype.setMin = function (t) {
            this.ms = t;
        }),
        (Nt.prototype.setMax = function (t) {
            this.max = t;
        }),
        (Nt.prototype.setJitter = function (t) {
            this.jitter = t;
        });
    var xt = (function (n) {
            o(s, n);
            var i = p(s);
            function s(n, r) {
                var o, a;
                e(this, s),
                    ((o = i.call(this)).nsps = {}),
                    (o.subs = []),
                    n && "object" === t(n) && ((r = n), (n = void 0)),
                    ((r = r || {}).path = r.path || "/socket.io"),
                    (o.opts = r),
                    D(f(o), r),
                    o.reconnection(!1 !== r.reconnection),
                    o.reconnectionAttempts(r.reconnectionAttempts || 1 / 0),
                    o.reconnectionDelay(r.reconnectionDelay || 1e3),
                    o.reconnectionDelayMax(r.reconnectionDelayMax || 5e3),
                    o.randomizationFactor(null !== (a = r.randomizationFactor) && void 0 !== a ? a : 0.5),
                    (o.backoff = new Nt({ min: o.reconnectionDelay(), max: o.reconnectionDelayMax(), jitter: o.randomizationFactor() })),
                    o.timeout(null == r.timeout ? 2e4 : r.timeout),
                    (o._readyState = "closed"),
                    (o.uri = n);
                var c = r.parser || Tt;
                return (o.encoder = new c.Encoder()), (o.decoder = new c.Decoder()), (o._autoConnect = !1 !== r.autoConnect), o._autoConnect && o.open(), o;
            }
            return (
                r(s, [
                    {
                        key: "reconnection",
                        value: function (t) {
                            return arguments.length ? ((this._reconnection = !!t), this) : this._reconnection;
                        },
                    },
                    {
                        key: "reconnectionAttempts",
                        value: function (t) {
                            return void 0 === t ? this._reconnectionAttempts : ((this._reconnectionAttempts = t), this);
                        },
                    },
                    {
                        key: "reconnectionDelay",
                        value: function (t) {
                            var e;
                            return void 0 === t ? this._reconnectionDelay : ((this._reconnectionDelay = t), null === (e = this.backoff) || void 0 === e || e.setMin(t), this);
                        },
                    },
                    {
                        key: "randomizationFactor",
                        value: function (t) {
                            var e;
                            return void 0 === t ? this._randomizationFactor : ((this._randomizationFactor = t), null === (e = this.backoff) || void 0 === e || e.setJitter(t), this);
                        },
                    },
                    {
                        key: "reconnectionDelayMax",
                        value: function (t) {
                            var e;
                            return void 0 === t ? this._reconnectionDelayMax : ((this._reconnectionDelayMax = t), null === (e = this.backoff) || void 0 === e || e.setMax(t), this);
                        },
                    },
                    {
                        key: "timeout",
                        value: function (t) {
                            return arguments.length ? ((this._timeout = t), this) : this._timeout;
                        },
                    },
                    {
                        key: "maybeReconnectOnOpen",
                        value: function () {
                            !this._reconnecting && this._reconnection && 0 === this.backoff.attempts && this.reconnect();
                        },
                    },
                    {
                        key: "open",
                        value: function (t) {
                            var e = this;
                            if (~this._readyState.indexOf("open")) return this;
                            this.engine = new lt(this.uri, this.opts);
                            var n = this.engine,
                                r = this;
                            (this._readyState = "opening"), (this.skipReconnect = !1);
                            var i = Ct(n, "open", function () {
                                    r.onopen(), t && t();
                                }),
                                o = Ct(n, "error", function (n) {
                                    r.cleanup(), (r._readyState = "closed"), e.emitReserved("error", n), t ? t(n) : r.maybeReconnectOnOpen();
                                });
                            if (!1 !== this._timeout) {
                                var s = this._timeout;
                                0 === s && i();
                                var a = this.setTimeoutFn(function () {
                                    i(), n.close(), n.emit("error", new Error("timeout"));
                                }, s);
                                this.opts.autoUnref && a.unref(),
                                    this.subs.push(function () {
                                        clearTimeout(a);
                                    });
                            }
                            return this.subs.push(i), this.subs.push(o), this;
                        },
                    },
                    {
                        key: "connect",
                        value: function (t) {
                            return this.open(t);
                        },
                    },
                    {
                        key: "onopen",
                        value: function () {
                            this.cleanup(), (this._readyState = "open"), this.emitReserved("open");
                            var t = this.engine;
                            this.subs.push(
                                Ct(t, "ping", this.onping.bind(this)),
                                Ct(t, "data", this.ondata.bind(this)),
                                Ct(t, "error", this.onerror.bind(this)),
                                Ct(t, "close", this.onclose.bind(this)),
                                Ct(this.decoder, "decoded", this.ondecoded.bind(this))
                            );
                        },
                    },
                    {
                        key: "onping",
                        value: function () {
                            this.emitReserved("ping");
                        },
                    },
                    {
                        key: "ondata",
                        value: function (t) {
                            try {
                                this.decoder.add(t);
                            } catch (t) {
                                this.onclose("parse error", t);
                            }
                        },
                    },
                    {
                        key: "ondecoded",
                        value: function (t) {
                            var e = this;
                            it(function () {
                                e.emitReserved("packet", t);
                            }, this.setTimeoutFn);
                        },
                    },
                    {
                        key: "onerror",
                        value: function (t) {
                            this.emitReserved("error", t);
                        },
                    },
                    {
                        key: "socket",
                        value: function (t, e) {
                            var n = this.nsps[t];
                            return n || ((n = new St(this, t, e)), (this.nsps[t] = n)), n;
                        },
                    },
                    {
                        key: "_destroy",
                        value: function (t) {
                            for (var e = 0, n = Object.keys(this.nsps); e < n.length; e++) {
                                var r = n[e];
                                if (this.nsps[r].active) return;
                            }
                            this._close();
                        },
                    },
                    {
                        key: "_packet",
                        value: function (t) {
                            for (var e = this.encoder.encode(t), n = 0; n < e.length; n++) this.engine.write(e[n], t.options);
                        },
                    },
                    {
                        key: "cleanup",
                        value: function () {
                            this.subs.forEach(function (t) {
                                return t();
                            }),
                                (this.subs.length = 0),
                                this.decoder.destroy();
                        },
                    },
                    {
                        key: "_close",
                        value: function () {
                            (this.skipReconnect = !0), (this._reconnecting = !1), this.onclose("forced close"), this.engine && this.engine.close();
                        },
                    },
                    {
                        key: "disconnect",
                        value: function () {
                            return this._close();
                        },
                    },
                    {
                        key: "onclose",
                        value: function (t, e) {
                            this.cleanup(), this.backoff.reset(), (this._readyState = "closed"), this.emitReserved("close", t, e), this._reconnection && !this.skipReconnect && this.reconnect();
                        },
                    },
                    {
                        key: "reconnect",
                        value: function () {
                            var t = this;
                            if (this._reconnecting || this.skipReconnect) return this;
                            var e = this;
                            if (this.backoff.attempts >= this._reconnectionAttempts) this.backoff.reset(), this.emitReserved("reconnect_failed"), (this._reconnecting = !1);
                            else {
                                var n = this.backoff.duration();
                                this._reconnecting = !0;
                                var r = this.setTimeoutFn(function () {
                                    e.skipReconnect ||
                                        (t.emitReserved("reconnect_attempt", e.backoff.attempts),
                                        e.skipReconnect ||
                                            e.open(function (n) {
                                                n ? ((e._reconnecting = !1), e.reconnect(), t.emitReserved("reconnect_error", n)) : e.onreconnect();
                                            }));
                                }, n);
                                this.opts.autoUnref && r.unref(),
                                    this.subs.push(function () {
                                        clearTimeout(r);
                                    });
                            }
                        },
                    },
                    {
                        key: "onreconnect",
                        value: function () {
                            var t = this.backoff.attempts;
                            (this._reconnecting = !1), this.backoff.reset(), this.emitReserved("reconnect", t);
                        },
                    },
                ]),
                s
            );
        })(L),
        Lt = {};
    function Pt(e, n) {
        "object" === t(e) && ((n = e), (e = void 0));
        var r,
            i = (function (t) {
                var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "",
                    n = arguments.length > 2 ? arguments[2] : void 0,
                    r = t;
                (n = n || ("undefined" != typeof location && location)),
                    null == t && (t = n.protocol + "//" + n.host),
                    "string" == typeof t && ("/" === t.charAt(0) && (t = "/" === t.charAt(1) ? n.protocol + t : n.host + t), /^(https?|wss?):\/\//.test(t) || (t = void 0 !== n ? n.protocol + "//" + t : "https://" + t), (r = ft(t))),
                    r.port || (/^(http|ws)$/.test(r.protocol) ? (r.port = "80") : /^(http|ws)s$/.test(r.protocol) && (r.port = "443")),
                    (r.path = r.path || "/");
                var i = -1 !== r.host.indexOf(":") ? "[" + r.host + "]" : r.host;
                return (r.id = r.protocol + "://" + i + ":" + r.port + e), (r.href = r.protocol + "://" + i + (n && n.port === r.port ? "" : ":" + r.port)), r;
            })(e, (n = n || {}).path || "/socket.io"),
            o = i.source,
            s = i.id,
            a = i.path,
            c = Lt[s] && a in Lt[s].nsps;
        return n.forceNew || n["force new connection"] || !1 === n.multiplex || c ? (r = new xt(o, n)) : (Lt[s] || (Lt[s] = new xt(o, n)), (r = Lt[s])), i.query && !n.query && (n.query = i.queryKey), r.socket(i.path, n);
    }
    return i(Pt, { Manager: xt, Socket: St, io: Pt, connect: Pt }), Pt;
});
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
function loadurldata() {
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
