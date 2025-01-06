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
    function showDetails(detailId) {
        var popup = document.getElementById(detailId);
        popup.classList.add('show');
    }
    
    function closePopup(detailId) {
        var popup = document.getElementById(detailId);
        popup.classList.remove('show');
    }