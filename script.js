// NAVIGATION ANIMATION
const navSlide = () => {
  const burger = document.querySelector(".hamburger");
  const nav = document.querySelector(".main-nav");
  const main = document.querySelector(".main");

  burger.addEventListener("click", () => {
    // SHOW MAIN NAV
    nav.classList.toggle("nav-active");

    // BURGER TO CROSS EFFECT
    burger.classList.toggle("toggle");
  });

  const navList = document.querySelector(".navlist");
  const menu = document.querySelector(".main-nav");

  navList.addEventListener("click", () => {
    // HIDE MENU
    menu.classList.remove("nav-active");

    // CROSS TO BURGER EFFECT
    burger.classList.remove("toggle");
  });
};

navSlide();

//**********************************************************************FADE-IN
const faders = document.querySelectorAll(".fade-in");

const appearOptions = {
  threshold: 0,
  rootMargin: "0px 0px -80px 0px",
};

const appearOnScroll = new IntersectionObserver(function (
  entries,
  appearOnScroll
) {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("appear");
    } else {
      entry.target.classList.remove("appear");
    }
  });
},
appearOptions);

faders.forEach((fader) => {
  appearOnScroll.observe(fader);
});
//**********************************************************************FADE-IN

//**********************************************************************SLIDE-IN
const sliders = document.querySelectorAll(".slide-in");

sliders.forEach((slider) => {
  appearOnScroll.observe(slider);
});

//**********************************************************************SLIDE-IN
