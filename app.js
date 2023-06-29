const swiper = new Swiper(".mySwiper", {
  // Optional parameters
  // direction: "horizontal",
  loop: true,

  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },

  autoplay: {
    delay: 1500,
    disabledOnInteraction: false,
  },
  slidesPerView: 1,
  spaceBetween: 10,

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  breakpoints: {
    480: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    800: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
    1024: {
      slidesPerView: 4,
      spaceBetween: 40,
    },
  },
});

const swiper2 = new Swiper("#swiper2", {
  // Optional parameters
  // direction: "horizontal",
  loop: true,

  // If we need pagination
  pagination: {
    el: "#swiper2 .swiper-pagination",
    clickable: true,
  },

  autoplay: {
    delay: 1500,
    disabledOnInteraction: false,
  },
  slidesPerView: 1,
  spaceBetween: 10,

  navigation: {
    nextEl: "#swiper2 .swiper-button-next",
    prevEl: "#swiper2 .swiper-button-prev",
  },

  breakpoints: {
    480: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
    800: {
      slidesPerView: 4,
      spaceBetween: 20,
    },
    1024: {
      slidesPerView: 6,
      spaceBetween: 40,
    },
  },
});

const backTop = document.querySelector(".back-top");
window.addEventListener("scroll", () => {
  if (document.documentElement.scrollTop > 100) {
    backTop.style.visibility = "visible";
  } else {
    backTop.style.visibility = "hidden";
  }
});

const backTopFunc = () => {
  document.documentElement.scrollTop = 0;
};

const navbarNav = document.querySelector(".navbar-nav");

navbarNav.addEventListener("click", (e) => {
  if (e.target.classList.contains("nav-link")) {
    const active = document.querySelector(".navbar-nav .active");
    active &&
      e.target.parentElement !== active &&
      active.classList.remove("active");
    e.target.parentElement.classList.toggle("active");
  }
});
