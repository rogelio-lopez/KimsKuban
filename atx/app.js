// Kim's Kuban — Vanilla JS interactions

const qs = (sel, parent = document) => parent.querySelector(sel);
const qsa = (sel, parent = document) => [...parent.querySelectorAll(sel)];

const navToggle = qs("#navToggle");
const navMenu = qs("#navMenu");
const header = qs(".header");
const yearEl = qs("#year");
const navLinks = qsa("[data-nav]");

function setYear() {
  if (yearEl) yearEl.textContent = String(new Date().getFullYear());
}

function setScrolledHeader() {
  const y = window.scrollY || 0;
  header?.classList.toggle("is-scrolled", y > 6);
}

function openMenu() {
  navMenu?.classList.add("is-open");
  navToggle?.setAttribute("aria-expanded", "true");
  navToggle?.setAttribute("aria-label", "Close menu");
}

function closeMenu() {
  navMenu?.classList.remove("is-open");
  navToggle?.setAttribute("aria-expanded", "false");
  navToggle?.setAttribute("aria-label", "Open menu");
}

function toggleMenu() {
  const isOpen = navMenu?.classList.contains("is-open");
  if (isOpen) closeMenu();
  else openMenu();
}

function closeMenuOnOutsideClick(e) {
  if (!navMenu || !navToggle) return;

  const clickedInsideMenu = navMenu.contains(e.target);
  const clickedToggle = navToggle.contains(e.target);

  if (!clickedInsideMenu && !clickedToggle) closeMenu();
}

function wireNav() {
  if (!navToggle || !navMenu) return;

  navToggle.addEventListener("click", toggleMenu);
  document.addEventListener("click", closeMenuOnOutsideClick);

  // Close menu after clicking a link (mobile)
  navLinks.forEach((a) => {
    a.addEventListener("click", () => {
      closeMenu();
    });
  });
}

function setActiveLinkByHash(hash) {
  const clean = hash && hash.length ? hash : "#top";
  navLinks.forEach((a) => {
    const isMatch = a.getAttribute("href") === clean;
    a.classList.toggle("is-active", isMatch);
  });
}

function wireActiveSectionObserver() {
  const sectionIds = ["top", "menu", "location", "reviews", "social"];
  const sections = sectionIds
    .map((id) => document.getElementById(id))
    .filter(Boolean);

  if (!("IntersectionObserver" in window) || sections.length === 0) {
    // fallback: hash-based
    window.addEventListener("hashchange", () =>
      setActiveLinkByHash(window.location.hash),
    );
    setActiveLinkByHash(window.location.hash);
    return;
  }

  const obs = new IntersectionObserver(
    (entries) => {
      // choose the most visible section
      const visible = entries
        .filter((en) => en.isIntersecting)
        .sort(
          (a, b) => (b.intersectionRatio || 0) - (a.intersectionRatio || 0),
        );

      if (visible.length === 0) return;

      const id = visible[0].target.id;
      const hash = id === "top" ? "#top" : `#${id}`;
      setActiveLinkByHash(hash);

      // keep the URL hash in sync without jump
      if (window.location.hash !== hash) {
        history.replaceState(null, "", hash);
      }
    },
    {
      root: null,
      threshold: [0.25, 0.4, 0.55],
      // account for sticky header + topbar
      rootMargin: "-120px 0px -55% 0px",
    },
  );

  sections.forEach((s) => obs.observe(s));
}

function init() {
  setYear();
  setScrolledHeader();
  wireNav();
  wireActiveSectionObserver();

  window.addEventListener("scroll", setScrolledHeader, { passive: true });
}

init();
