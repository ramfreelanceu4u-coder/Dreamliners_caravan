/* =========================================================
   OJI CARAVAN
   CUSTOM JAVASCRIPT
========================================================= */


/* =========================================================
   01. NAVBAR SCROLL EFFECT
========================================================= */

const navbar =
    document.getElementById("mainNavbar");


window.addEventListener("scroll", function () {

    /*
        CHANGE SCROLL DISTANCE HERE

        Current:
        50px

        If you want navbar effect earlier:
        20px

        If you want it later:
        100px
    */

    if (window.scrollY > 50) {

        navbar.classList.add("scrolled");

    } else {

        navbar.classList.remove("scrolled");

    }

});



/* =========================================================
   02. CLOSE BOOTSTRAP MOBILE MENU
   AFTER CLICKING A NAVIGATION LINK
========================================================= */

const navigationLinks =
    document.querySelectorAll(
        "#mainNavigation .nav-link"
    );


const navigationMenu =
    document.getElementById("mainNavigation");


navigationLinks.forEach(function (link) {

    link.addEventListener("click", function () {

        /*
            Get Bootstrap's existing collapse
            instance instead of manually changing
            display properties.
        */

        const collapse =
            bootstrap.Collapse.getInstance(
                navigationMenu
            );


        if (collapse) {

            collapse.hide();

        }

    });

});



/* =========================================================
   03. ACTIVE NAVIGATION LINK
========================================================= */

const sections =
    document.querySelectorAll("section[id]");


window.addEventListener("scroll", function () {

    let currentSection = "";


    sections.forEach(function (section) {

        const sectionTop =
            section.offsetTop - 150;


        const sectionHeight =
            section.offsetHeight;


        if (
            window.scrollY >= sectionTop &&
            window.scrollY < sectionTop + sectionHeight
        ) {

            currentSection =
                section.getAttribute("id");

        }

    });


    navigationLinks.forEach(function (link) {

        link.classList.remove("active");


        const linkTarget =
            link.getAttribute("href");


        if (
            linkTarget === "#" + currentSection
        ) {

            link.classList.add("active");

        }

    });

});