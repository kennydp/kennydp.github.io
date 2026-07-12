const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", (event) => {
    const targetId = anchor.getAttribute("href");

    if (!targetId || targetId === "#") {
      return;
    }

    const target = document.querySelector(targetId);

    if (!target) {
      return;
    }

    event.preventDefault();
    target.scrollIntoView({
      behavior: prefersReducedMotion.matches ? "auto" : "smooth",
      block: "start",
    });

    if (!target.hasAttribute("tabindex")) {
      target.setAttribute("tabindex", "-1");
    }

    target.focus({ preventScroll: true });
    history.pushState(null, "", targetId);
  });
});
