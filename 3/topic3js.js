// =====================================
// COMP NET — TOPIC 03
// Primary Networks
// =====================================


const technologies = {

    // =====================================
    // PDH
    // =====================================

    pdh: {
        title: "PDH — Плезиохронная цифровая иерархия",

        text: `
            PDH (Plesiochronous Digital Hierarchy) — технология
            цифровой передачи данных, в которой отдельные потоки
            имеют почти одинаковую, но не полностью синхронизированную
            скорость передачи.

            Для объединения нескольких потоков используются
            мультиплексоры. При этом небольшие различия между
            скоростями потоков требуют дополнительных процедур
            согласования.

            PDH применялась в традиционных телефонных сетях
            и стала одним из этапов развития цифровой связи.
        `,

        note: `
            Скорости отдельных потоков близки, но не полностью
            синхронизированы между собой. Это усложняет управление
            потоками и извлечение отдельных каналов из составного потока.
        `,

        visualTitle: "Как работает PDH",

        visual: `
            <p class="visual-description">
                Несколько отдельных цифровых потоков объединяются
                мультиплексором в один общий поток для передачи по линии связи.
            </p>

            <div class="flow-diagram">

                <div class="flow-node pink-node">
                    <div class="pdh-streams">
                        <span class="pdh-stream"></span>
                        <span class="pdh-stream"></span>
                        <span class="pdh-stream"></span>
                        <span class="pdh-stream"></span>
                    </div>

                    <strong>Потоки данных</strong>
                    <small>Несколько входов</small>
                </div>

                <span class="flow-arrow animated-arrow">→</span>

                <div class="flow-node">
                    <span style="font-size: 27px;">⇄</span>
                    <strong>Мультиплексор</strong>
                    <small>Объединение</small>
                </div>

                <span class="flow-arrow animated-arrow">→</span>

                <div class="flow-node aqua-node">
                    <span style="font-size: 27px;">〰</span>
                    <strong>Общий поток</strong>
                    <small>Передача данных</small>
                </div>

            </div>

            <p class="diagram-caption">
                Упрощённая схема мультиплексирования в PDH.
            </p>
        `,

        comparison: [
            {
                label: "Синхронизация",
                title: "Почти синхронная",
                text: "Потоки имеют близкие, но не полностью одинаковые скорости."
            },
            {
                label: "Принцип",
                title: "Объединение потоков",
                text: "Несколько цифровых потоков объединяются в общий поток."
            },
            {
                label: "Особенность",
                title: "Сложность доступа",
                text: "Для извлечения отдельных потоков из высокоскоростного потока могут потребоваться промежуточные уровни демультиплексирования."
            }
        ]
    },


    // =====================================
    // SDH
    // =====================================

    sdh: {
        title: "SDH — Синхронная цифровая иерархия",

        text: `
            SDH (Synchronous Digital Hierarchy) — технология
            синхронной передачи цифровой информации по
            телекоммуникационным сетям.

            В отличие от PDH, SDH использует общую систему
            синхронизации, что упрощает управление потоками
            и доступ к отдельным каналам.

            Технология поддерживает сетевое управление,
            мониторинг состояния соединений и организацию
            резервных маршрутов в соответствующих сетевых конфигурациях.
        `,

        note: `
            Общая синхронизация упрощает мультиплексирование,
            управление сетью и извлечение отдельных потоков данных.
        `,

        visualTitle: "Как работает SDH",

        visual: `
            <p class="visual-description">
                Данные поступают в синхронную транспортную сеть,
                проходят через сетевые узлы и передаются получателю.
            </p>

            <div class="flow-diagram">

                <div class="flow-node pink-node">
                    <span style="font-size: 27px;">▤</span>
                    <strong>Источник</strong>
                    <small>Входные данные</small>
                </div>

                <span class="flow-arrow animated-arrow">→</span>

                <div class="sdh-network">

                    <strong>SDH-сеть</strong>

                    <div class="sdh-nodes">
                        <span class="sdh-node"></span>
                        <span class="sdh-node"></span>
                        <span class="sdh-node"></span>
                    </div>

                    <small>Синхронизация</small>

                </div>

                <span class="flow-arrow animated-arrow">→</span>

                <div class="flow-node aqua-node">
                    <span style="font-size: 27px;">▣</span>
                    <strong>Получатель</strong>
                    <small>Принятые данные</small>
                </div>

            </div>

            <p class="diagram-caption">
                Упрощённая схема передачи данных через SDH-сеть.
            </p>
        `,

        comparison: [
            {
                label: "Синхронизация",
                title: "Синхронная",
                text: "Сетевые элементы используют согласованную систему синхронизации."
            },
            {
                label: "Управление",
                title: "Централизованный контроль",
                text: "Предусмотрены средства мониторинга и управления сетью."
            },
            {
                label: "Преимущество",
                title: "Удобный доступ",
                text: "Структура кадров облегчает извлечение отдельных потоков."
            }
        ]
    },


    // =====================================
    // DWDM
    // =====================================
dwdm: {
    title: "DWDM — Плотное спектральное мультиплексирование",

    text: `
        DWDM (Dense Wavelength Division Multiplexing) —
        технология передачи нескольких независимых оптических
        каналов по одному оптическому волокну.

        Каждый канал использует собственную длину волны света.
        Оптический мультиплексор объединяет эти каналы перед
        передачей, а на принимающей стороне демультиплексор
        разделяет их.

        Благодаря этому одно волокно может использоваться
        для передачи большого количества информационных потоков.
    `,

    note: `
        Несколько оптических каналов с разными длинами волн
        передаются по одному волокну одновременно.
    `,

    visualTitle: "Как работает DWDM",

    visual: `
        <p class="visual-description">
            DWDM позволяет передавать несколько независимых потоков
            данных по одному оптическому волокну. Каждый поток
            использует свою длину волны света, поэтому сигналы
            могут передаваться одновременно.
        </p>

        <div class="dwdm-explainer">

            <!-- STEP 1: CHANNELS -->
            <div class="dwdm-stage-heading">
                <span class="dwdm-step">01</span>

                <div>
                    <strong>Отдельные оптические каналы</strong>
                    <small>Каждый цвет обозначает свою длину волны</small>
                </div>
            </div>

            <div class="dwdm-channel-list">

                <div class="dwdm-channel">
                    <span class="dwdm-channel-dot dwdm-wave-pink"></span>
                    <span class="dwdm-channel-name">Канал 1</span>
                    <span class="dwdm-channel-wave">λ₁</span>

                    <div class="dwdm-channel-line">
                        <i class="dwdm-wave-pink"></i>
                    </div>
                </div>

                <div class="dwdm-channel">
                    <span class="dwdm-channel-dot dwdm-wave-purple"></span>
                    <span class="dwdm-channel-name">Канал 2</span>
                    <span class="dwdm-channel-wave">λ₂</span>

                    <div class="dwdm-channel-line">
                        <i class="dwdm-wave-purple"></i>
                    </div>
                </div>

                <div class="dwdm-channel">
                    <span class="dwdm-channel-dot dwdm-wave-aqua"></span>
                    <span class="dwdm-channel-name">Канал 3</span>
                    <span class="dwdm-channel-wave">λ₃</span>

                    <div class="dwdm-channel-line">
                        <i class="dwdm-wave-aqua"></i>
                    </div>
                </div>

                <div class="dwdm-channel">
                    <span class="dwdm-channel-dot dwdm-wave-orange"></span>
                    <span class="dwdm-channel-name">Канал 4</span>
                    <span class="dwdm-channel-wave">λ₄</span>

                    <div class="dwdm-channel-line">
                        <i class="dwdm-wave-orange"></i>
                    </div>
                </div>

            </div>

            <!-- ARROW -->
            <div class="dwdm-combine-arrow">
                <span></span>
                <b>↓</b>
                <span></span>
            </div>

            <!-- MULTIPLEXER -->
            <div class="dwdm-equipment">

                <div class="dwdm-equipment-icon">⇄</div>

                <div>
                    <strong>Оптический мультиплексор</strong>

                    <p>
                        Объединяет сигналы с разными длинами волн
                        в один общий оптический сигнал.
                    </p>
                </div>

            </div>

            <!-- FIBER -->
            <div class="dwdm-fiber">

                <div class="dwdm-fiber-label">

                    <span class="dwdm-fiber-icon">〰</span>

                    <div>
                        <strong>Одно оптическое волокно</strong>

                        <small>
                            Все каналы передаются одновременно
                        </small>
                    </div>

                </div>

                <div class="dwdm-fiber-core">
                    <i class="dwdm-wave-pink"></i>
                    <i class="dwdm-wave-purple"></i>
                    <i class="dwdm-wave-aqua"></i>
                    <i class="dwdm-wave-orange"></i>
                </div>

            </div>

            <!-- ARROW -->
            <div class="dwdm-combine-arrow">
                <span></span>
                <b>↓</b>
                <span></span>
            </div>

            <!-- DEMULTIPLEXER -->
            <div class="dwdm-equipment dwdm-receiver">

                <div class="dwdm-equipment-icon">⇄</div>

                <div>
                    <strong>Оптический демультиплексор</strong>

                    <p>
                        Разделяет общий сигнал обратно
                        на отдельные оптические каналы.
                    </p>
                </div>

            </div>

            <!-- RESULT -->
            <div class="dwdm-result">

                <span>✓</span>

                <p>
                    <strong>Результат:</strong>
                    несколько независимых потоков данных
                    передаются по одному оптическому волокну.
                </p>

            </div>

        </div>

        <p class="diagram-caption">
            Схема DWDM: объединение оптических каналов,
            совместная передача и последующее разделение.
        </p>
    `,

    comparison: [
        {
            label: "Среда передачи",
            title: "Оптическое волокно",
            text: "Для передачи используется оптический сигнал."
        },
        {
            label: "Принцип работы",
            title: "Разные длины волн",
            text: "Каждый канал использует собственную длину волны света."
        },
        {
            label: "Главное преимущество",
            title: "Высокая ёмкость",
            text: "По одному волокну можно передавать несколько независимых каналов одновременно."
        }
    ]
},

    // =====================================
    // OTN
    // =====================================
otn: {
    title: "OTN — Оптическая транспортная сеть",

    text: `
        OTN (Optical Transport Network) — технология транспортировки
        данных по оптическим сетям. Она обеспечивает организованную
        передачу различных клиентских сигналов и позволяет
        контролировать качество передачи информации.

        Перед отправкой данные помещаются в транспортную структуру OTN.
        Во время передачи сеть отслеживает состояние соединения
        и помогает обнаруживать ошибки. На принимающей стороне
        данные извлекаются из транспортной структуры и передаются
        получателю.

        OTN часто используется совместно с DWDM. DWDM позволяет
        передавать несколько оптических каналов по одному волокну,
        а OTN организует транспортировку данных внутри сети.
    `,

    note: `
        OTN организует транспортировку данных, обеспечивает
        структурирование сигналов и предоставляет средства
        мониторинга передачи.
    `,

    visualTitle: "Как работает OTN",

    visual: `
        <p class="visual-description">
            Передача данных через OTN состоит из нескольких этапов:
            поступление информации, формирование транспортной структуры,
            передача по оптической сети и получение данных адресатом.
        </p>

        <div class="otn-explainer">

            <div class="otn-intro-banner">
                <div class="otn-intro-icon">◇</div>
                <div>
                    <span class="otn-eyebrow">
                        OPTICAL TRANSPORT NETWORK
                    </span>

                    <strong>Путь данных через OTN</strong>

                    <p>
                        Подготовка · транспортировка · контроль · получение
                    </p>
                </div>
            </div>

            <div class="otn-process">

                <!-- STEP 1 -->
                <article class="otn-process-card otn-source">

                    <div class="otn-process-top">
                        <span class="otn-process-number">01</span>
                        <span class="otn-process-symbol">▤</span>
                    </div>

                    <span class="otn-card-kicker">ВХОД</span>

                    <h5>Клиентские данные</h5>

                    <p>
                        В сеть поступает информация от клиентского
                        оборудования: например, данные или сетевой трафик.
                    </p>

                    <div class="otn-mini-packets" aria-hidden="true">
                        <i></i><i></i><i></i><i></i><i></i>
                    </div>

                </article>

                <div class="otn-step-connector">
                    <span>↓</span>
                    <small>Подготовка</small>
                </div>

                <!-- STEP 2 -->
                <article class="otn-process-card otn-structure">

                    <div class="otn-process-top">
                        <span class="otn-process-number">02</span>
                        <span class="otn-process-symbol">▦</span>
                    </div>

                    <span class="otn-card-kicker">СТРУКТУРИРОВАНИЕ</span>

                    <h5>Формирование OTN</h5>

                    <p>
                        Данные помещаются в транспортные кадры,
                        что позволяет организовать их передачу
                        и контролировать состояние соединения.
                    </p>

                    <div class="otn-frame-visual" aria-hidden="true">
                        <span>OTN</span>
                        <i></i><i></i><i></i>
                    </div>

                </article>

                <div class="otn-step-connector">
                    <span>↓</span>
                    <small>Передача</small>
                </div>

                <!-- STEP 3 -->
                <article class="otn-process-card otn-transport">

                    <div class="otn-process-top">
                        <span class="otn-process-number">03</span>
                        <span class="otn-process-symbol">〰</span>
                    </div>

                    <span class="otn-card-kicker">ТРАНСПОРТ</span>

                    <h5>Оптическая сеть</h5>

                    <p>
                        Данные передаются по оптической инфраструктуре.
                        Сетевое оборудование обеспечивает транспортировку
                        и мониторинг передачи.
                    </p>

                    <div class="otn-network-nodes" aria-hidden="true">
                        <span></span><i></i>
                        <span></span><i></i>
                        <span></span>
                    </div>

                </article>

                <div class="otn-step-connector">
                    <span>↓</span>
                    <small>Приём</small>
                </div>

                <!-- STEP 4 -->
                <article class="otn-process-card otn-destination">

                    <div class="otn-process-top">
                        <span class="otn-process-number">04</span>
                        <span class="otn-process-symbol">✓</span>
                    </div>

                    <span class="otn-card-kicker">ВЫХОД</span>

                    <h5>Получатель</h5>

                    <p>
                        На принимающей стороне данные извлекаются
                        из транспортной структуры и передаются
                        дальше по назначению.
                    </p>

                    <div class="otn-delivered" aria-hidden="true">
                        <span>✓</span>
                        Данные доставлены
                    </div>

                </article>

            </div>

            <!-- MONITORING -->
            <div class="otn-monitoring">

                <div class="otn-monitoring-icon">⌁</div>

                <div>
                    <strong>Контроль передачи</strong>

                    <p>
                        OTN предоставляет средства мониторинга,
                        позволяющие отслеживать состояние передачи
                        и обнаруживать ошибки.
                    </p>
                </div>

                <span class="otn-status-pill">MONITORING</span>

            </div>

            <!-- OTN + DWDM -->
            <div class="otn-dwdm-note">

                <div class="otn-dwdm-symbol">↔</div>

                <div>
                    <strong>OTN + DWDM</strong>

                    <p>
                        Эти технологии дополняют друг друга.
                        OTN организует транспортировку данных,
                        а DWDM позволяет передавать несколько
                        оптических каналов с разными длинами волн
                        по одному волокну.
                    </p>
                </div>

            </div>

        </div>

        <p class="diagram-caption">
            Упрощённая схема OTN: подготовка данных,
            транспортировка, контроль передачи и получение информации.
        </p>
    `,

    comparison: [
        {
            label: "Назначение",
            title: "Транспортировка данных",
            text: "Организует передачу клиентских сигналов по оптической сети."
        },
        {
            label: "Контроль",
            title: "Мониторинг передачи",
            text: "Помогает контролировать состояние передачи и обнаруживать ошибки."
        },
        {
            label: "Совместная работа",
            title: "OTN + DWDM",
            text: "OTN организует транспортировку, а DWDM передаёт несколько каналов на разных длинах волн."
        }
    ]
  }}

// =====================================
// DOM ELEMENTS
// =====================================

const technologyCards = document.querySelectorAll(
    ".technology-card"
);

const detailPanel = document.getElementById(
    "detail-panel"
);

const detailTitle = document.getElementById(
    "detail-title"
);

const detailText = document.getElementById(
    "detail-text"
);

const detailNote = document.getElementById(
    "detail-note"
);

const visualTitle = document.getElementById(
    "visual-title"
);

const visualContent = document.getElementById(
    "visual-content"
);

const comparisonContent = document.getElementById(
    "comparison-content"
);

const closeButton = document.getElementById(
    "close-detail"
);


// =====================================
// RENDER COMPARISON CARDS
// =====================================

function renderComparison(items) {

    comparisonContent.innerHTML = items
        .map(item => `
            <article class="comparison-item">

                <span class="comparison-label">
                    ${item.label}
                </span>

                <strong>
                    ${item.title}
                </strong>

                <p>
                    ${item.text}
                </p>

            </article>
        `)
        .join("");

}


// =====================================
// OPEN TECHNOLOGY DETAILS
// =====================================

function openTechnology(card) {

    const technologyKey = card.dataset.subtopic;
    const technology = technologies[technologyKey];

    // If the technology does not exist, do nothing.
    if (!technology) {
        return;
    }

    // Update active card.
    technologyCards.forEach(item => {

        const isActive = item === card;

        item.classList.toggle("active", isActive);

        item.setAttribute(
            "aria-expanded",
            String(isActive)
        );

    });

    // Update the text.
    detailTitle.textContent = technology.title;

    detailText.textContent = technology.text.trim();

    detailNote.textContent = technology.note.trim();

    visualTitle.textContent = technology.visualTitle;

    // Insert the technology diagram.
    visualContent.innerHTML = technology.visual;

    // Insert comparison cards.
    renderComparison(technology.comparison);

    // Display the panel.
    detailPanel.hidden = false;

    // Scroll to the details.
    requestAnimationFrame(() => {

        detailPanel.scrollIntoView({
            behavior: window.matchMedia(
                "(prefers-reduced-motion: reduce)"
            ).matches ? "auto" : "smooth",
            block: "start"
        });

    });

}


// =====================================
// CLOSE TECHNOLOGY DETAILS
// =====================================

function closeTechnology() {

    detailPanel.hidden = true;

    technologyCards.forEach(card => {

        card.classList.remove("active");

        card.setAttribute(
            "aria-expanded",
            "false"
        );

    });

}


// =====================================
// EVENT LISTENERS
// =====================================

technologyCards.forEach(card => {

    card.addEventListener("click", () => {
        openTechnology(card);
    });

});


closeButton.addEventListener(
    "click",
    closeTechnology
);


// Close the panel with Escape.
document.addEventListener("keydown", event => {

    if (
        event.key === "Escape" &&
        !detailPanel.hidden
    ) {
        closeTechnology();
    }

});