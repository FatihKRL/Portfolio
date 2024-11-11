    // const menuToggle = document.getElementById('menu-toggle');
    // const header = document.querySelector('header');

    // menuToggle.addEventListener('click', () => {
    //     header.classList.toggle('active');
    // });

    // document.addEventListener("DOMContentLoaded", function() {
    //     const menuToggle = document.getElementById("menu-toggle");
    //     const headerMenu = document.getElementById("header-menu");
    
    //     menuToggle.addEventListener("click", () => {
    //         headerMenu.classList.toggle("active");
    //     });
    // });

    const openMenu = () => {
        const menu = document.querySelector(".header-menu");
        menu.classList.toggle("active");
        const menuButton = document.querySelector("header .material-symbols-outlined");
        if(menu.classList.contains("active")){
            menuButton.innerHTML = "Close";
        } else {
            menuButton.innerHTML = "Menu";
        }
    }

    const closeMenu = () => {
        const menu = document.querySelector(".header-menu");
        const menuButton = document.querySelector("header .material-symbols-outlined");
        if (menu.classList.contains("active")) {
            menu.classList.remove("active");
            menuButton.innerHTML = "Menu";
        }
    };