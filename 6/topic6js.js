document.addEventListener("DOMContentLoaded", () => {
  // Плавная прокрутка к разделам
  document.querySelectorAll('a[href^="#"]').forEach((link) => {
    link.addEventListener("click", (event) => {
      const id = link.getAttribute("href");

      if (!id || id === "#") return;

      const target = document.querySelector(id);

      if (!target) return;

      event.preventDefault();

      target.scrollIntoView({
        behavior: window.matchMedia(
          "(prefers-reduced-motion: reduce)"
        ).matches ? "auto" : "smooth",
        block: "start"
      });

      history.replaceState(null, "", id);
    });
  });

  // Появление карточек с небольшой задержкой
  const animatedElements = document.querySelectorAll(`
    .intro-card,
    .topic-card,
    .definition-card,
    .diagram-card,
    .info-card,
    .comparison-card,
    .process-card,
    .example-card,
    .command-card,
    .fiber-card,
    .multiservice-card,
    .note-card,
    .warning-card,
    .summary-item
  `);

  const reduceMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)"
  ).matches;

  if ("IntersectionObserver" in window && !reduceMotion) {
    const observer = new IntersectionObserver((entries, currentObserver) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;

        const element = entry.target;
        const siblings = Array.from(
          element.parentElement?.children || []
        );

        const index = siblings.indexOf(element);

        element.style.transitionDelay =
          `${Math.max(0, index) * 80}ms`;

        element.classList.add("is-visible");

        currentObserver.unobserve(element);
      });
    }, {
      threshold: 0.08,
      rootMargin: "0px 0px -25px 0px"
    });

    animatedElements.forEach((element) => {
      element.classList.add("js-reveal");
      observer.observe(element);
    });
  } else {
    animatedElements.forEach((element) => {
      element.classList.add("is-visible");
    });
  }

  // Шапка меняет вид при прокрутке
  const header = document.querySelector(".site-header");

  if (header) {
    const updateHeader = () => {
      header.classList.toggle(
        "header-scrolled",
        window.scrollY > 20
      );
    };

    window.addEventListener("scroll", updateHeader, {
      passive: true
    });

    updateHeader();
  }

  // Разные задержки для плавающих узлов
  document.querySelectorAll(".network-node").forEach((node, index) => {
    node.style.animationDelay = `${index * -0.8}s`;
  });

  console.log("CompNet — анимации темы 06 активированы.");
});