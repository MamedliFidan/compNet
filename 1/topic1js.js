
const subtopics = {
  addressing: {
    title: "Адресация узлов сети. Коммутация. Типы коммутации",

    text: "Адресация помогает определить, откуда и куда должны передаваться данные. Сетевые устройства используют адреса, чтобы информация попала к нужному получателю. Коммутация — это процесс выбора пути передачи данных через сетевые устройства. Основные виды: коммутация каналов, сообщений и пакетов.",

    note: "Адрес определяет получателя, а коммутация помогает доставить данные."
  },

  packets: {
    title: "Коммутация пакетов",

    text: "При коммутации пакетов сообщение разделяется на небольшие части — пакеты. Они передаются по сети и собираются у получателя. Пакеты могут идти разными маршрутами. Такой способ эффективно использует ресурсы сети и лежит в основе работы Интернета.",

    note: "Пример: при загрузке сайта браузер получает множество пакетов данных."
  },

  circuits: {
    title: "Коммутация каналов",

    text: "При коммутации каналов перед началом обмена устанавливается выделенное соединение между участниками. Канал резервируется на время сеанса, даже если данные передаются не постоянно. Такой принцип традиционно использовался в телефонных сетях.",

    note: "Сначала устанавливается выделенный канал, затем передаются данные."
  }
};

const cards = document.querySelectorAll("[data-subtopic]");
const panel = document.querySelector("#detail-panel");
const detailTitle = document.querySelector("#detail-title");
const detailText = document.querySelector("#detail-text");
const detailNote = document.querySelector("#detail-note");
const closeButton = document.querySelector("#close-detail");

cards.forEach((card) => {
  card.addEventListener("click", () => {
    const item = subtopics[card.dataset.subtopic];

    if (!item) return;

    const alreadyOpen =
      card.getAttribute("aria-expanded") === "true";

    cards.forEach((otherCard) => {
      otherCard.setAttribute("aria-expanded", "false");
    });

    if (alreadyOpen) {
      panel.hidden = true;
      return;
    }

    card.setAttribute("aria-expanded", "true");

    detailTitle.textContent = item.title;
    detailText.textContent = item.text;
    detailNote.textContent = item.note;

    panel.hidden = false;

    panel.scrollIntoView({
      behavior: "smooth",
      block: "nearest"
    });
  });
});

closeButton.addEventListener("click", () => {
  panel.hidden = true;

  cards.forEach((card) => {
    card.setAttribute("aria-expanded", "false");
  });
});
