const subtopics = {
  modulation: {
    title: "Модуляция при передаче дискретных и аналоговых сигналов",

    text: `Модуляция — это изменение параметров несущего сигнала для передачи информации. Она применяется в радиосвязи, мобильных сетях и других системах передачи данных.

Основные виды аналоговой модуляции:

• Амплитудная (AM) — изменяется амплитуда сигнала.
• Частотная (FM) — изменяется частота сигнала.
• Фазовая (PM) — изменяется фаза сигнала.

Для передачи цифровых данных применяются ASK, FSK и PSK. В ASK изменяется амплитуда, в FSK — частота, а в PSK — фаза сигнала. Выбор метода зависит от требований к скорости передачи, помехоустойчивости и используемому каналу связи.`,

    note: "Запомни: AM — амплитуда, FM — частота, PM — фаза. Для цифровой модуляции используются ASK, FSK и PSK.",

    visualTitle: "Как изменяется сигнал",

    visual: `
      <div class="signal-legend">
        <span><i class="legend-dot coral-dot"></i> Амплитудная</span>
        <span><i class="legend-dot aqua-dot"></i> Частотная</span>
      </div>

      <div class="signal-example">
        <div class="signal-label">
          <strong>AM</strong>
          <span>Меняется высота волны</span>
        </div>

        <svg viewBox="0 0 600 100" role="img"
             aria-label="Пример амплитудной модуляции">
          <line x1="0" y1="50" x2="600" y2="50"
                stroke="#d8d8df" stroke-dasharray="4 5"/>

          <path d="${makeWave(600, 50, [8, 35, 8, 35, 8, 35, 8, 35])}"
                fill="none" stroke="#d98b98"
                stroke-width="3" stroke-linecap="round"/>
        </svg>
      </div>

      <div class="signal-example">
        <div class="signal-label">
          <strong>FM</strong>
          <span>Меняется частота колебаний</span>
        </div>

        <svg viewBox="0 0 600 100" role="img"
             aria-label="Пример частотной модуляции">
          <line x1="0" y1="50" x2="600" y2="50"
                stroke="#d8d8df" stroke-dasharray="4 5"/>

          <path d="${makeVariableWave()}"
                fill="none" stroke="#76c9c9"
                stroke-width="3" stroke-linecap="round"/>
        </svg>
      </div>

      <p class="visual-caption">
        Сравни графики: при AM меняется амплитуда,
        а при FM — частота колебаний.
      </p>
    `,

    comparison: [
      {
        name: "ASK",
        description: "Изменяется амплитуда",
        color: "coral"
      },
      {
        name: "FSK",
        description: "Изменяется частота",
        color: "aqua"
      },
      {
        name: "PSK",
        description: "Изменяется фаза",
        color: "pink"
      }
    ],

    question: "Какой параметр изменяется при частотной модуляции FM?",

    options: [
      "Амплитуда",
      "Частота",
      "Фаза"
    ],

    correct: 1,

    explanation: "Верно! При FM изменяется частота колебаний, а амплитуда в идеальном случае остаётся постоянной."
  },

  encoding: {
    title: "Методы кодирования. Код Манчестера",

    text: `Кодирование — это представление информации в виде сигналов, которые можно передавать по каналу связи.

NRZ кодирует биты с помощью уровней сигнала. В RZ сигнал возвращается к нулевому уровню в течение битового интервала. В коде Манчестера каждый бит содержит переход сигнала в середине интервала.

Этот переход помогает приёмнику определять границы битов и синхронизировать передачу. Однако манчестерское кодирование требует больше изменений сигнала и большей полосы пропускания, чем некоторые простые методы.

Направление перехода в середине бита определяет значение 0 или 1 согласно принятому соглашению.`,

    note: "Главное свойство кода Манчестера — обязательный переход сигнала в середине каждого битового интервала.",

    visualTitle: "Как работает код Манчестера",

    visual: `
      <p class="visual-caption">
        Пример последовательности битов: 1 0 1 1 0.
        Каждый бит содержит переход в середине интервала.
      </p>

      <div class="bits-row">
        <span>1</span>
        <span>0</span>
        <span>1</span>
        <span>1</span>
        <span>0</span>
      </div>

      <svg viewBox="0 0 600 160" class="manchester-svg"
           role="img" aria-label="Временная диаграмма кода Манчестера">

        <g stroke="#e5e5ec" stroke-dasharray="4 5">
          <line x1="60" y1="20" x2="60" y2="140"/>
          <line x1="156" y1="20" x2="156" y2="140"/>
          <line x1="252" y1="20" x2="252" y2="140"/>
          <line x1="348" y1="20" x2="348" y2="140"/>
          <line x1="444" y1="20" x2="444" y2="140"/>
          <line x1="540" y1="20" x2="540" y2="140"/>
        </g>

        <line x1="40" y1="45" x2="560" y2="45"
              stroke="#d98b98" stroke-dasharray="3 4"/>

        <line x1="40" y1="115" x2="560" y2="115"
              stroke="#76c9c9" stroke-dasharray="3 4"/>

        <path d="${makeManchester([1, 0, 1, 1, 0])}"
              fill="none" stroke="#b96f82"
              stroke-width="4" stroke-linejoin="round"
              stroke-linecap="round"/>

        <text x="8" y="49" font-size="11" fill="#956774">HIGH</text>
        <text x="8" y="119" font-size="11" fill="#549b9b">LOW</text>
      </svg>

      <div class="diagram-legend">
        <span><i class="legend-dot coral-dot"></i> Высокий уровень</span>
        <span><i class="legend-dot aqua-dot"></i> Низкий уровень</span>
      </div>

      <p class="visual-caption">
        Для этой схемы принято соглашение: 1 — переход
        сверху вниз, 0 — снизу вверх.
      </p>
    `,

    comparison: [
      {
        name: "NRZ",
        description: "Биты представлены уровнями сигнала",
        color: "coral"
      },
      {
        name: "RZ",
        description: "Сигнал возвращается к нулю внутри бита",
        color: "aqua"
      },
      {
        name: "Manchester",
        description: "Переход в середине каждого бита",
        color: "pink"
      }
    ],

    question: "Какое свойство отличает код Манчестера?",

    options: [
      "Всегда изменяется амплитуда",
      "Есть переход в середине каждого бита",
      "Передаются только единицы"
    ],

    correct: 1,

    explanation: "Правильно! Переход в середине каждого битового интервала помогает синхронизировать передатчик и приёмник."
  }
};


// Генерация волн для визуализации
function makeWave(width, center, amplitudes) {
  const points = [];
  const cycles = 12;
  const step = 2;

  for (let x = 0; x <= width; x += step) {
    const index = Math.min(
      amplitudes.length - 1,
      Math.floor((x / width) * amplitudes.length)
    );

    const amplitude = amplitudes[index];
    const y = center - Math.sin((x / width) * cycles * Math.PI * 2) * amplitude;

    points.push(`${x === 0 ? "M" : "L"} ${x} ${y.toFixed(2)}`);
  }

  return points.join(" ");
}

function makeVariableWave() {
  const points = [];
  const width = 600;
  const center = 50;

  for (let x = 0; x <= width; x += 2) {
    const frequency = x < 300 ? 0.055 : 0.12;
    const y = center - Math.sin(x * frequency) * 25;

    points.push(`${x === 0 ? "M" : "L"} ${x} ${y.toFixed(2)}`);
  }

  return points.join(" ");
}

function makeManchester(bits) {
  const startX = 60;
  const bitWidth = 96;
  const high = 45;
  const low = 115;
  const points = [];

  bits.forEach((bit, index) => {
    const x = startX + index * bitWidth;
    const middle = x + bitWidth / 2;
    const end = x + bitWidth;

    // Соглашение: 1 — высокий -> низкий,
    // 0 — низкий -> высокий.
    const first = bit === 1 ? high : low;
    const second = bit === 1 ? low : high;

    if (index === 0) {
      points.push(`M ${x} ${first}`);
    } else {
      points.push(`L ${x} ${first}`);
    }

    points.push(`L ${middle} ${first}`);
    points.push(`L ${middle} ${second}`);
    points.push(`L ${end} ${second}`);
  });

  return points.join(" ");
}


// Элементы страницы
const cards = document.querySelectorAll("[data-subtopic]");
const panel = document.querySelector("#detail-panel");
const detailTitle = document.querySelector("#detail-title");
const detailText = document.querySelector("#detail-text");
const detailNote = document.querySelector("#detail-note");
const closeButton = document.querySelector("#close-detail");

const visualTitle = document.querySelector("#visual-title");
const visualContent = document.querySelector("#visual-content");
const comparisonContent = document.querySelector("#comparison-content");

const quizQuestion = document.querySelector("#quiz-question");
const quizOptions = document.querySelector("#quiz-options");
const quizFeedback = document.querySelector("#quiz-feedback");


// Открытие карточек
cards.forEach((card) => {
  card.addEventListener("click", () => {
    const item = subtopics[card.dataset.subtopic];

    if (!item) return;

    const isOpen = card.getAttribute("aria-expanded") === "true";

    cards.forEach((otherCard) => {
      otherCard.setAttribute("aria-expanded", "false");
    });

    if (isOpen) {
      panel.hidden = true;
      return;
    }

    detailTitle.textContent = item.title;
    detailText.textContent = item.text;
    detailNote.textContent = item.note;

    visualTitle.textContent = item.visualTitle;
    visualContent.innerHTML = item.visual;

    // Сравнение методов
    comparisonContent.replaceChildren();

    item.comparison.forEach((method) => {
      const box = document.createElement("div");
      box.className = `comparison-item ${method.color}`;

      const name = document.createElement("strong");
      name.textContent = method.name;

      const description = document.createElement("p");
      description.textContent = method.description;

      box.append(name, description);
      comparisonContent.append(box);
    });

    // Мини-тест
    quizQuestion.textContent = item.question;
    quizOptions.replaceChildren();
    quizFeedback.textContent = "";
    quizFeedback.className = "quiz-feedback";

    item.options.forEach((option, index) => {
      const button = document.createElement("button");
      button.type = "button";
      button.className = "quiz-option";
      button.textContent = option;

      button.addEventListener("click", () => {
        // Не разрешаем менять результат после ответа
        if (quizOptions.dataset.answered === "true") return;

        quizOptions.dataset.answered = "true";

        const correct = index === item.correct;

        quizFeedback.textContent = correct
          ? item.explanation
          : `Пока неверно. ${item.explanation}`;

        quizFeedback.classList.add(
          correct ? "quiz-correct" : "quiz-wrong"
        );

        button.classList.add(
          correct ? "answer-correct" : "answer-wrong"
        );

        quizOptions.querySelectorAll("button").forEach((other) => {
          other.disabled = true;

          if (item.options.indexOf(other.textContent) === item.correct) {
            other.classList.add("answer-correct");
          }
        });
      });

      quizOptions.append(button);
    });

    quizOptions.dataset.answered = "false";

    panel.hidden = false;
    card.setAttribute("aria-expanded", "true");

    panel.scrollIntoView({
      behavior: "smooth",
      block: "nearest"
    });
  });
});


// Закрытие панели
if (closeButton) {
  closeButton.addEventListener("click", () => {
    panel.hidden = true;

    cards.forEach((card) => {
      card.setAttribute("aria-expanded", "false");
    });
  });
}