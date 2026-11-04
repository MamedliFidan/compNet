
const protocols = {
  tcp: {
    title: "TCP — Transmission Control Protocol",

    text: "TCP — транспортный протокол с установлением соединения. Перед передачей данных стороны выполняют рукопожатие. TCP использует подтверждения, повторную передачу потерянных сегментов, контроль последовательности и управление потоком. Это помогает доставлять поток байтов надёжно и в правильном порядке.",

    note: "TCP подходит, когда важны целостность и порядок данных: например, при загрузке веб-страниц и передаче файлов."
  },

  udp: {
    title: "UDP — User Datagram Protocol",

    text: "UDP — транспортный протокол без установления соединения. Он отправляет датаграммы независимо друг от друга и не гарантирует доставку, порядок или отсутствие дубликатов. Заголовок UDP имеет размер 8 байт. UDP часто выбирают для приложений, которым важны небольшие задержки или которые сами реализуют нужные механизмы надёжности.",

    note: "UDP уменьшает накладные расходы, но приложение должно учитывать возможную потерю или перестановку датаграмм."
  }
};

const fields = {
  source: {
    title: "Порт источника — Source Port",

    text: "16-битное поле, указывающее порт отправляющего приложения. Оно помогает получателю определить, какому приложению или сокету адресованы ответы. В некоторых случаях поле может быть равно нулю, если порт источника не используется."
  },

  destination: {
    title: "Порт назначения — Destination Port",

    text: "16-битное поле, указывающее порт приложения-получателя. Вместе с IP-адресом назначения оно помогает операционной системе передать датаграмму нужному приложению."
  },

  length: {
    title: "Длина — Length",

    text: "16-битное поле, содержащее общую длину UDP-датаграммы в байтах: заголовок плюс полезные данные. Минимальная длина — 8 байт, поскольку сам заголовок состоит из четырёх полей по 2 байта."
  },

  checksum: {
    title: "Контрольная сумма — Checksum",

    text: "Поле для обнаружения ошибок в заголовке и данных. При расчёте используется также IP-псевдозаголовок. В IPv4 нулевое значение может обозначать отсутствие контрольной суммы; в IPv6 контрольная сумма UDP обычно обязательна."
  }
};

const protocolCards = document.querySelectorAll("[data-protocol]");
const detailPanel = document.querySelector("#detail-panel");
const detailTitle = document.querySelector("#detail-title");
const detailText = document.querySelector("#detail-text");
const detailNote = document.querySelector("#detail-note");
const closeDetail = document.querySelector("#close-detail");

protocolCards.forEach((card) => {
  card.addEventListener("click", () => {
    const protocol = protocols[card.dataset.protocol];

    if (!protocol) return;

    const wasOpen =
      card.getAttribute("aria-expanded") === "true";

    protocolCards.forEach((item) => {
      item.setAttribute("aria-expanded", "false");
    });

    if (wasOpen) {
      detailPanel.hidden = true;
      return;
    }

    card.setAttribute("aria-expanded", "true");
    detailTitle.textContent = protocol.title;
    detailText.textContent = protocol.text;
    detailNote.textContent = protocol.note;

    detailPanel.hidden = false;

    detailPanel.scrollIntoView({
      behavior: "smooth",
      block: "nearest"
    });
  });
});

closeDetail.addEventListener("click", () => {
  detailPanel.hidden = true;

  protocolCards.forEach((card) => {
    card.setAttribute("aria-expanded", "false");
  });
});

/* Интерактивные поля UDP-диаграммы */

const udpFields = document.querySelectorAll("[data-field]");
const fieldExplanation = document.querySelector("#field-explanation");

udpFields.forEach((field) => {
  field.addEventListener("click", () => {
    const info = fields[field.dataset.field];

    if (!info) return;

    udpFields.forEach((item) => {
      item.classList.remove("active");
    });

    field.classList.add("active");

    fieldExplanation.replaceChildren();

    const marker = document.createElement("span");
    marker.className = "explanation-mark";
    marker.textContent = "↗";

    const paragraph = document.createElement("p");
    const title = document.createElement("strong");
    title.textContent = info.title;

    paragraph.append(title, document.createElement("br"));
    paragraph.append(document.createTextNode(info.text));

    fieldExplanation.append(marker, paragraph);
  });
});
