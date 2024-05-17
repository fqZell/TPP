const burgerMenu = () => {
    const iconBurger = document.querySelector(".header-burger");
    const menuBurger = document.querySelector(".header-burger__menu");

    iconBurger.addEventListener("click", () => {
        if (menuBurger.classList.contains("active")) {
            menuBurger.classList.remove("active");
        } else {
            menuBurger.classList.add("active");
        }
    });

    menuBurger.classList.remove("active")
};

const searchInput = () => {
    const searchIcon = document.querySelectorAll(".fa-solid.fa-magnifying-glass")
    const searchInput = document.querySelectorAll(".input-search")
    
    searchIcon.forEach(icons => {
        icons.addEventListener("click", () => {
            searchInput.forEach(input => {
                input.classList.toggle("active")
            });
        });
    });
}

const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
    // And if we need scrollbar
    scrollbar: {
      el: '.swiper-scrollbar',
    },
});

const init = () => {
    burgerMenu();
    searchInput()
};

document.addEventListener("DOMContentLoaded", init);
