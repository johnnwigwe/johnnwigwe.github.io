// Put your real email here so the contact form can open a mail draft.
const CONTACT_EMAIL = "";

const nav = document.querySelector(".site-nav");
const toggle = document.querySelector(".nav-toggle");
const year = document.getElementById("year");
const form = document.getElementById("contact-form");
const statusEl = document.getElementById("form-status");

if (year) {
  year.textContent = String(new Date().getFullYear());
}

if (toggle && nav) {
  toggle.addEventListener("click", () => {
    const open = nav.classList.toggle("open");
    toggle.setAttribute("aria-expanded", String(open));
  });

  nav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      nav.classList.remove("open");
      toggle.setAttribute("aria-expanded", "false");
    });
  });
}

const sections = [...document.querySelectorAll("main section[id]")];
const navLinks = [...document.querySelectorAll(".site-nav a")];

if ("IntersectionObserver" in window && sections.length) {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        const id = entry.target.getAttribute("id");
        navLinks.forEach((link) => {
          link.classList.toggle("active", link.getAttribute("href") === `#${id}`);
        });
      });
    },
    { rootMargin: "-40% 0px -50% 0px", threshold: 0 }
  );

  sections.forEach((section) => observer.observe(section));
}

if (form) {
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    statusEl.classList.remove("error");

    const data = new FormData(form);
    const name = String(data.get("name") || "").trim();
    const email = String(data.get("email") || "").trim();
    const reason = String(data.get("reason") || "general");
    const message = String(data.get("message") || "").trim();

    if (!name || !email || !message) {
      statusEl.textContent = "Please fill in name, email, and message.";
      statusEl.classList.add("error");
      return;
    }

    if (!CONTACT_EMAIL) {
      statusEl.textContent =
        "Add your email in js/main.js (CONTACT_EMAIL) so this form can send.";
      statusEl.classList.add("error");
      return;
    }

    const subject = encodeURIComponent(`Portfolio — ${reason} — ${name}`);
    const body = encodeURIComponent(`${message}\n\nFrom: ${name} <${email}>`);
    window.location.href = `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`;
    statusEl.textContent = "Opening your email app…";
  });
}
