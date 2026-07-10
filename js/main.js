/* KAIBE landing, light interactions (no deps). Product visuals are real
   screenshots (assets/shot-*.png); nothing is injected. */
(() => {
  "use strict";

  /* reveal on scroll */
  const reveals = document.querySelectorAll(".reveal");
  if ("IntersectionObserver" in window) {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("in");
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -8% 0px" }
    );
    reveals.forEach((el) => io.observe(el));
  } else {
    reveals.forEach((el) => el.classList.add("in"));
  }

  /* nav state on scroll */
  const nav = document.querySelector("[data-nav]");
  if (nav) {
    const onScroll = () => {
      if (window.scrollY > 8) nav.setAttribute("data-scrolled", "");
      else nav.removeAttribute("data-scrolled");
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
  }

  /* mobile menu */
  const toggle = document.querySelector("[data-menu-toggle]");
  const links = document.querySelector(".nav__links");
  if (toggle && links) {
    toggle.addEventListener("click", () => {
      const open = links.classList.toggle("is-open");
      toggle.setAttribute("aria-expanded", String(open));
    });
    links.querySelectorAll("a").forEach((a) =>
      a.addEventListener("click", () => links.classList.remove("is-open"))
    );
  }

  /* year */
  document
    .querySelectorAll("[data-year]")
    .forEach((el) => (el.textContent = new Date().getFullYear()));
})();
