// === Navigation mobile ===
const menuBtn = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-links");

if (menuBtn && navLinks) {
  const menuBtnIcon = menuBtn.querySelector("i");

  menuBtn.addEventListener("click", () => {
    navLinks.classList.toggle("open");
    const isOpen = navLinks.classList.contains("open");
    menuBtnIcon.setAttribute("class", isOpen ? "ri-close-line" : "ri-menu-line");
  });

  navLinks.addEventListener("click", () => {
    navLinks.classList.remove("open");
    menuBtnIcon.setAttribute("class", "ri-menu-line");
  });
}

// === Scroll Reveal animations ===
if (typeof ScrollReveal !== "undefined") {
  const scrollRevealOption = {
    origin: "bottom",
    distance: "50px",
    duration: 1000,
  };

  // Header
  ScrollReveal().reveal(".header__badge", { ...scrollRevealOption });
  ScrollReveal().reveal(".header__container h1", { ...scrollRevealOption, delay: 200 });
  ScrollReveal().reveal(".header__container form", { ...scrollRevealOption, delay: 500 });
  ScrollReveal().reveal(".header__illustration", { ...scrollRevealOption, delay: 800 });

  // Formations cards
  ScrollReveal().reveal(".range__card", { duration: 1000, interval: 200 });

  // Pourquoi section
  ScrollReveal().reveal(".why__visual", { ...scrollRevealOption, origin: "right" });
  ScrollReveal().reveal(".location__content .section__header", { ...scrollRevealOption, delay: 300 });
  ScrollReveal().reveal(".location__content p", { ...scrollRevealOption, delay: 500 });
  ScrollReveal().reveal(".why__list", { ...scrollRevealOption, delay: 600 });
  ScrollReveal().reveal(".location__btn", { ...scrollRevealOption, delay: 800 });

  // Témoignages
  ScrollReveal().reveal(".story__card", { ...scrollRevealOption, interval: 300 });

  // Download / CTA
  ScrollReveal().reveal(".download__content .section__header", { ...scrollRevealOption, delay: 300 });
  ScrollReveal().reveal(".download__content p", { ...scrollRevealOption, delay: 500 });
  ScrollReveal().reveal(".download__links", { ...scrollRevealOption, delay: 700 });
  ScrollReveal().reveal(".cta__illustration", { ...scrollRevealOption, origin: "right" });

  // Formations page
  ScrollReveal().reveal(".promise__card", { duration: 1000, interval: 150 });
  ScrollReveal().reveal(".formation__bloc", { ...scrollRevealOption, interval: 200 });

  // Contact & Inscription
  ScrollReveal().reveal(".contact__card", { ...scrollRevealOption, interval: 150 });
  ScrollReveal().reveal(".inscription__form__wrap", { ...scrollRevealOption });
  ScrollReveal().reveal(".inscription__sidebar", { ...scrollRevealOption, delay: 300 });
}

// === Swiper forfaits ===
const swiperEl = document.querySelector(".swiper");
if (swiperEl && typeof Swiper !== "undefined") {
  const prices = ["75 000", "110 000", "55 000", "25 000", "180 000"];
  const priceEl = document.getElementById("select-price");
  const selectCards = document.querySelectorAll(".select__card");

  if (selectCards.length > 0) {
    selectCards[0].classList.add("show__info");
  }

  function updateSwiper(eventName, args) {
    if (eventName === "slideChangeTransitionStart") {
      const index = args && args[0].realIndex;
      if (priceEl) priceEl.innerText = prices[index] || "75 000";
      selectCards.forEach((item) => item.classList.remove("show__info"));
      if (selectCards[index]) selectCards[index].classList.add("show__info");
    }
  }

  new Swiper(".swiper", {
    loop: true,
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    coverflowEffect: {
      rotate: 0,
      depth: 500,
      modifier: 1,
      scale: 0.75,
      slideShadows: false,
      stretch: -100,
    },
    onAny(event, ...args) {
      updateSwiper(event, args);
    },
  });
}

// === Banner infini ===
const banner = document.querySelector(".banner__wrapper");
if (banner) {
  const bannerContent = Array.from(banner.children);
  bannerContent.forEach((item) => {
    const duplicateNode = item.cloneNode(true);
    duplicateNode.setAttribute("aria-hidden", true);
    banner.appendChild(duplicateNode);
  });
}

// === Active nav link (for inner pages) ===
const currentPage = window.location.pathname.split("/").pop() || "index.html";
document.querySelectorAll(".nav__links a").forEach((link) => {
  const href = link.getAttribute("href");
  if (href === currentPage) {
    link.classList.add("active");
  }
});
