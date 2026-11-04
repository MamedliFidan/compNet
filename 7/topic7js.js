const selectorCards = document.querySelectorAll(".selector-card");
const contentSections = document.querySelectorAll(".content-section");

selectorCards.forEach((card) => {
  card.addEventListener("click", () => {
    const sectionName = card.dataset.section;

    // Убираем активное состояние у всех кнопок
    selectorCards.forEach((item) => {
      item.classList.remove("active");
    });

    // Скрываем все разделы
    contentSections.forEach((section) => {
      section.classList.remove("active");
    });

    // Активируем выбранную кнопку
    card.classList.add("active");

    // Показываем нужный раздел
    const selectedSection = document.getElementById(sectionName);

    if (selectedSection) {
      selectedSection.classList.add("active");
    }
  });
});