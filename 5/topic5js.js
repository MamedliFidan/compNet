document.addEventListener("DOMContentLoaded", () => {
  // ========================================
  // ПЛАВНАЯ ПРОКРУТКА ПО ССЫЛКАМ
  // ========================================

  const internalLinks = document.querySelectorAll(
    'a[href^="#"]'
  );

  internalLinks.forEach((link) => {
    link.addEventListener("click", (event) => {
      const targetId = link.getAttribute("href");

      if (!targetId || targetId === "#") return;

      const target = document.querySelector(targetId);

      if (!target) return;

      event.preventDefault();

      target.scrollIntoView({
        behavior: window.matchMedia(
          "(prefers-reduced-motion: reduce)"
        ).matches
          ? "auto"
          : "smooth",
        block: "start"
      });
    });
  });


  // ========================================
  // ЭФФЕКТ ПОЯВЛЕНИЯ КАРТОЧЕК
  // ========================================

  const animatedElements = document.querySelectorAll(`
    .intro-card,
    .concept-card,
    .protocol-main,
    .metric-card,
    .diagram-card,
    .detail-info-card,
    .area-card,
    .fact-item,
    .choice-card,
    .summary-item,
    .final-card
  `);

  const reduceMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)"
  ).matches;

  if ("IntersectionObserver" in window && !reduceMotion) {
    const observer = new IntersectionObserver(
      (entries, currentObserver) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;

          entry.target.classList.add("is-visible");

          currentObserver.unobserve(entry.target);
        });
      },
      {
        threshold: 0.08,
        rootMargin: "0px 0px -30px 0px"
      }
    );

    animatedElements.forEach((element) => {
      element.classList.add("js-reveal");
      observer.observe(element);
    });
  }


  // ========================================
  // ИЗМЕНЕНИЕ ШАПКИ ПРИ ПРОКРУТКЕ
  // ========================================

  const header = document.querySelector(".site-header");

  if (header) {
    const updateHeader = () => {
      if (window.scrollY > 20) {
        header.classList.add("header-scrolled");
      } else {
        header.classList.remove("header-scrolled");
      }
    };

    window.addEventListener("scroll", updateHeader, {
      passive: true
    });

    updateHeader();
  }


  // ========================================
  // АНИМАЦИЯ СЕТЕВЫХ УЗЛОВ
  // ========================================

  const networkNodes = document.querySelectorAll(
    ".network-node:not(.node-center)"
  );

  networkNodes.forEach((node, index) => {
    node.style.animationDelay = `${index * -0.7}s`;
  });


  // ========================================
  // ГОД В ПОДВАЛЕ НЕ ТРЕБУЕТСЯ:
  // ВЕСЬ КОНТЕНТ СТРАНИЦЫ УЖЕ ГОТОВ В HTML
  // ========================================

  console.log("CompNet — тема 05 успешно загружена.");
});