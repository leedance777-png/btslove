const storageKey = "bts-live-language";
const defaultLanguage = "ko";
const rtlLanguages = new Set(["ar", "fa"]);

const languageLabels = {
  ko: "한국어",
  en: "English",
  ja: "日本語",
  zh: "简体中文",
  es: "Español",
  fr: "Français",
  de: "Deutsch",
  it: "Italiano",
  pt: "Português",
  ru: "Русский",
  ar: "العربية",
  hi: "हिन्दी",
  id: "Bahasa Indonesia",
  th: "ไทย",
  vi: "Tiếng Việt",
  tr: "Türkçe",
  nl: "Nederlands",
  pl: "Polski",
  sv: "Svenska",
  fa: "فارسی"
};

const translations = {
  ko: {
    languageLabel: "언어 선택",
    eyebrow: "전 세계 ARMY와 함께",
    title: "BTS LIVE EXPERIENCE 💜",
    subtitle: "하나의 무대, 하나의 함성, 하나의 마음",
    love: "💜 사랑해",
    emotion: "😭 감동",
    fire: "🔥 미쳤다",
    united: "💜 ARMY 하나됨",
    participants: "현재 참여자",
    messageLabel: "공연 메시지",
    message: "우리는 하나다. BTS & ARMY 💜"
  },
  en: {
    languageLabel: "Select language",
    eyebrow: "With ARMY around the world",
    title: "BTS LIVE EXPERIENCE 💜",
    subtitle: "One stage, one roar, one heart.",
    love: "💜 Love",
    emotion: "😭 Emotion",
    fire: "🔥 Fire",
    united: "💜 ARMY UNITED",
    participants: "Participants",
    messageLabel: "Concert message",
    message: "We are one. BTS & ARMY 💜"
  },
  ja: {
    languageLabel: "言語を選択",
    eyebrow: "世界中のARMYと一緒に",
    title: "BTS LIVE EXPERIENCE 💜",
    subtitle: "ひとつのステージ、ひとつの歓声、ひとつの心。",
    love: "💜 愛してる",
    emotion: "😭 感動",
    fire: "🔥 最高すぎる",
    united: "💜 ARMYひとつ",
    participants: "参加者",
    messageLabel: "公演メッセージ",
    message: "私たちはひとつ。BTS & ARMY 💜"
  },
  zh: {
    languageLabel: "选择语言",
    eyebrow: "与全世界的ARMY同在",
    title: "BTS LIVE EXPERIENCE 💜",
    subtitle: "同一个舞台，同一片呐喊，同一颗心。",
    love: "💜 我爱你们",
    emotion: "😭 太感动了",
    fire: "🔥 太炸了",
    united: "💜 ARMY团结一心",
    participants: "参与人数",
    messageLabel: "演出寄语",
    message: "我们是一体的。BTS & ARMY 💜"
  },
  es: {
    languageLabel: "Seleccionar idioma",
    eyebrow: "Con ARMY de todo el mundo",
    title: "BTS LIVE EXPERIENCE 💜",
    subtitle: "Un escenario, un grito, un solo corazón.",
    love: "💜 Amor",
    emotion: "😭 Emoción",
    fire: "🔥 Increíble",
    united: "💜 ARMY UNIDO",
    participants: "Participantes",
    messageLabel: "Mensaje del concierto",
    message: "Somos uno. BTS & ARMY 💜"
  },
  fr: {
    languageLabel: "Choisir la langue",
    eyebrow: "Avec l'ARMY du monde entier",
    title: "BTS LIVE EXPERIENCE 💜",
    subtitle: "Une scène, un cri, un seul cœur.",
    love: "💜 Amour",
    emotion: "😭 Émotion",
    fire: "🔥 Incroyable",
    united: "💜 ARMY UNI",
    participants: "Participants",
    messageLabel: "Message du concert",
    message: "Nous ne faisons qu'un. BTS & ARMY 💜"
  },
  de: {
    languageLabel: "Sprache wählen",
    eyebrow: "Mit ARMY aus aller Welt",
    title: "BTS LIVE EXPERIENCE 💜",
    subtitle: "Eine Bühne, ein Jubel, ein Herz.",
    love: "💜 Liebe",
    emotion: "😭 Gänsehaut",
    fire: "🔥 Unglaublich",
    united: "💜 ARMY VEREINT",
    participants: "Teilnehmende",
    messageLabel: "Konzertbotschaft",
    message: "Wir sind eins. BTS & ARMY 💜"
  },
  it: {
    languageLabel: "Seleziona lingua",
    eyebrow: "Con ARMY da tutto il mondo",
    title: "BTS LIVE EXPERIENCE 💜",
    subtitle: "Un palco, un boato, un solo cuore.",
    love: "💜 Amore",
    emotion: "😭 Emozione",
    fire: "🔥 Pazzesco",
    united: "💜 ARMY UNITO",
    participants: "Partecipanti",
    messageLabel: "Messaggio del concerto",
    message: "Siamo una cosa sola. BTS & ARMY 💜"
  },
  pt: {
    languageLabel: "Selecionar idioma",
    eyebrow: "Com ARMY do mundo todo",
    title: "BTS LIVE EXPERIENCE 💜",
    subtitle: "Um palco, um grito, um só coração.",
    love: "💜 Amor",
    emotion: "😭 Emoção",
    fire: "🔥 Insano",
    united: "💜 ARMY UNIDO",
    participants: "Participantes",
    messageLabel: "Mensagem do show",
    message: "Somos um. BTS & ARMY 💜"
  },
  ru: {
    languageLabel: "Выбрать язык",
    eyebrow: "Вместе с ARMY по всему миру",
    title: "BTS LIVE EXPERIENCE 💜",
    subtitle: "Одна сцена, один крик, одно сердце.",
    love: "💜 Любовь",
    emotion: "😭 До слез",
    fire: "🔥 Это огонь",
    united: "💜 ARMY ЕДИНЫ",
    participants: "Участники",
    messageLabel: "Послание концерта",
    message: "Мы едины. BTS & ARMY 💜"
  },
  ar: {
    languageLabel: "اختر اللغة",
    eyebrow: "مع ARMY من كل أنحاء العالم",
    title: "BTS LIVE EXPERIENCE 💜",
    subtitle: "مسرح واحد، هتاف واحد، قلب واحد.",
    love: "💜 حب",
    emotion: "😭 تأثر",
    fire: "🔥 نار",
    united: "💜 ARMY موحد",
    participants: "المشاركون",
    messageLabel: "رسالة الحفل",
    message: "نحن واحد. BTS & ARMY 💜"
  },
  hi: {
    languageLabel: "भाषा चुनें",
    eyebrow: "दुनिया भर के ARMY के साथ",
    title: "BTS LIVE EXPERIENCE 💜",
    subtitle: "एक मंच, एक गर्जना, एक दिल।",
    love: "💜 प्यार",
    emotion: "😭 भावुक",
    fire: "🔥 कमाल",
    united: "💜 ARMY एकजुट",
    participants: "प्रतिभागी",
    messageLabel: "कॉन्सर्ट संदेश",
    message: "हम एक हैं। BTS & ARMY 💜"
  },
  id: {
    languageLabel: "Pilih bahasa",
    eyebrow: "Bersama ARMY di seluruh dunia",
    title: "BTS LIVE EXPERIENCE 💜",
    subtitle: "Satu panggung, satu sorakan, satu hati.",
    love: "💜 Cinta",
    emotion: "😭 Terharu",
    fire: "🔥 Gila banget",
    united: "💜 ARMY BERSATU",
    participants: "Peserta",
    messageLabel: "Pesan konser",
    message: "Kita adalah satu. BTS & ARMY 💜"
  },
  th: {
    languageLabel: "เลือกภาษา",
    eyebrow: "ร่วมกับ ARMY ทั่วโลก",
    title: "BTS LIVE EXPERIENCE 💜",
    subtitle: "หนึ่งเวที หนึ่งเสียง หนึ่งหัวใจ",
    love: "💜 รักเลย",
    emotion: "😭 ซึ้งมาก",
    fire: "🔥 เดือดมาก",
    united: "💜 ARMY เป็นหนึ่งเดียว",
    participants: "ผู้เข้าร่วม",
    messageLabel: "ข้อความจากคอนเสิร์ต",
    message: "พวกเราคือหนึ่งเดียว BTS & ARMY 💜"
  },
  vi: {
    languageLabel: "Chọn ngôn ngữ",
    eyebrow: "Cùng ARMY trên toàn thế giới",
    title: "BTS LIVE EXPERIENCE 💜",
    subtitle: "Một sân khấu, một tiếng reo, một trái tim.",
    love: "💜 Yêu quá",
    emotion: "😭 Xúc động",
    fire: "🔥 Cháy thật",
    united: "💜 ARMY ĐOÀN KẾT",
    participants: "Người tham gia",
    messageLabel: "Thông điệp buổi diễn",
    message: "Chúng ta là một. BTS & ARMY 💜"
  },
  tr: {
    languageLabel: "Dil seç",
    eyebrow: "Dünyanın dört bir yanındaki ARMY ile",
    title: "BTS LIVE EXPERIENCE 💜",
    subtitle: "Tek sahne, tek çığlık, tek yürek.",
    love: "💜 Aşk",
    emotion: "😭 Duygu seli",
    fire: "🔥 Efsane",
    united: "💜 ARMY BİRLEŞTİ",
    participants: "Katılımcılar",
    messageLabel: "Konser mesajı",
    message: "Biz biriz. BTS & ARMY 💜"
  },
  nl: {
    languageLabel: "Taal kiezen",
    eyebrow: "Samen met ARMY van over de hele wereld",
    title: "BTS LIVE EXPERIENCE 💜",
    subtitle: "Eén podium, één gejuich, één hart.",
    love: "💜 Liefde",
    emotion: "😭 Emotie",
    fire: "🔥 Bizar goed",
    united: "💜 ARMY VERENIGD",
    participants: "Deelnemers",
    messageLabel: "Concertboodschap",
    message: "Wij zijn één. BTS & ARMY 💜"
  },
  pl: {
    languageLabel: "Wybierz język",
    eyebrow: "Razem z ARMY z całego świata",
    title: "BTS LIVE EXPERIENCE 💜",
    subtitle: "Jedna scena, jeden okrzyk, jedno serce.",
    love: "💜 Miłość",
    emotion: "😭 Wzruszenie",
    fire: "🔥 Szaleństwo",
    united: "💜 ARMY ZJEDNOCZONE",
    participants: "Uczestnicy",
    messageLabel: "Przesłanie koncertu",
    message: "Jesteśmy jednością. BTS & ARMY 💜"
  },
  sv: {
    languageLabel: "Välj språk",
    eyebrow: "Med ARMY över hela världen",
    title: "BTS LIVE EXPERIENCE 💜",
    subtitle: "En scen, ett jubel, ett hjärta.",
    love: "💜 Kärlek",
    emotion: "😭 Berörd",
    fire: "🔥 Helt galet",
    united: "💜 ARMY FÖRENADE",
    participants: "Deltagare",
    messageLabel: "Konsertmeddelande",
    message: "Vi är ett. BTS & ARMY 💜"
  },
  fa: {
    languageLabel: "انتخاب زبان",
    eyebrow: "همراه با ARMY در سراسر جهان",
    title: "BTS LIVE EXPERIENCE 💜",
    subtitle: "یک صحنه، یک فریاد، یک قلب.",
    love: "💜 عشق",
    emotion: "😭 احساس",
    fire: "🔥 فوق العاده",
    united: "💜 ARMY متحد",
    participants: "شرکت کنندگان",
    messageLabel: "پیام کنسرت",
    message: "ما یکی هستیم. BTS & ARMY 💜"
  }
};

const languageSelect = document.querySelector("#languageSelect");
const translatableNodes = document.querySelectorAll("[data-i18n]");
const reactionButtons = document.querySelectorAll(".reaction-button");
const participantCountNode = document.querySelector("#participantCount");
let participantCount = 0;
let currentLanguage = defaultLanguage;

function buildLanguageOptions() {
  const optionsMarkup = Object.keys(translations)
    .map((code) => `<option value="${code}">${languageLabels[code] || code}</option>`)
    .join("");

  languageSelect.innerHTML = optionsMarkup;
}

function updateSelectLabel(text) {
  languageSelect.setAttribute("aria-label", text);
  languageSelect.title = text;
}

function formatParticipantCount(value, lang) {
  return new Intl.NumberFormat(lang).format(value);
}

function renderParticipantCount() {
  participantCountNode.textContent = formatParticipantCount(participantCount, currentLanguage);
}

function applyTextContent(dictionary) {
  translatableNodes.forEach((node) => {
    const key = node.dataset.i18n;
    if (!dictionary[key]) {
      return;
    }

    node.textContent = dictionary[key];
  });
}

function setLanguage(lang) {
  const dictionary = translations[lang] || translations[defaultLanguage];
  const normalizedLang = translations[lang] ? lang : defaultLanguage;

  document.body.classList.add("is-switching");

  requestAnimationFrame(() => {
    applyTextContent(dictionary);
    updateSelectLabel(dictionary.languageLabel);
    document.documentElement.lang = normalizedLang;
    document.documentElement.dir = rtlLanguages.has(normalizedLang) ? "rtl" : "ltr";
    document.title = dictionary.title;
    languageSelect.value = normalizedLang;
    currentLanguage = normalizedLang;
    renderParticipantCount();
    localStorage.setItem(storageKey, normalizedLang);

    window.setTimeout(() => {
      document.body.classList.remove("is-switching");
    }, 170);
  });
}

function getInitialLanguage() {
  const savedLanguage = localStorage.getItem(storageKey);
  if (savedLanguage && translations[savedLanguage]) {
    return savedLanguage;
  }

  return defaultLanguage;
}

buildLanguageOptions();
languageSelect.addEventListener("change", (event) => {
  setLanguage(event.target.value);
});

reactionButtons.forEach((button) => {
  button.addEventListener("click", () => {
    participantCount += 1;
    renderParticipantCount();
    button.classList.add("is-active");

    window.setTimeout(() => {
      button.classList.remove("is-active");
    }, 140);
  });
});

setLanguage(getInitialLanguage());
