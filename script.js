const sourceSelect = document.getElementById("sourceLang");
const targetSelect = document.getElementById("targetLang");
const switchBtn = document.querySelector(".switch-button");
const micBtn = document.getElementById("micBtn");

const textarea = document.querySelector("textarea");
const output = document.querySelector(".translate-body p");

/* ===== IDIOMAS ===== */
const languages = [
  { code: "pt-BR", label: "Português (Brasil)" },
  { code: "pt-PT", label: "Português (Portugal)" },
  { code: "en-US", label: "English (US)" },
  { code: "en-GB", label: "English (UK)" },
  { code: "es", label: "Spanish" },
  { code: "fr", label: "French" },
  { code: "de", label: "German" },
  { code: "it", label: "Italian" },
  { code: "ru", label: "Russian" },
  { code: "ja", label: "Japanese" },
  { code: "ko", label: "Korean" },
  { code: "zh-CN", label: "Chinese (Simplified)" },
  { code: "zh-TW", label: "Chinese (Traditional)" },
  { code: "ar", label: "Arabic" },
  { code: "hi", label: "Hindi" },
  { code: "tr", label: "Turkish" },
  { code: "nl", label: "Dutch" },
  { code: "sv", label: "Swedish" },
  { code: "pl", label: "Polish" },
  { code: "uk", label: "Ukrainian" },
  { code: "vi", label: "Vietnamese" }
];

/* ===== POPULAR SELECT ===== */
function populate(select, allowAuto = false) {
  select.innerHTML = "";
  languages.forEach(lang => {
    if (!allowAuto && lang.code === "auto") return;
    const opt = document.createElement("option");
    opt.value = lang.code;
    opt.textContent = lang.label;
    select.appendChild(opt);
  });
}

populate(sourceSelect, true);
populate(targetSelect);

/* ===== IDIOMA PADRÃO DO NAVEGADOR ===== */
const browserLang = navigator.language || "en-US";
sourceSelect.value = languages.some(l => l.code === browserLang)
  ? browserLang
  : "auto";

targetSelect.value = browserLang.startsWith("pt") ? "en-US" : "pt-BR";

/* ===== TRADUÇÃO (MyMemory) ===== */
let debounce;

async function translate() {
  const text = textarea.value.trim();
  if (!text) {
    output.textContent = "";
    return;
  }

  const from =
    sourceSelect.value === "auto"
      ? ""
      : sourceSelect.value.split("-")[0];

  const to = targetSelect.value.split("-")[0];

  const url =
    `https://api.mymemory.translated.net/get?q=${encodeURIComponent(text)}` +
    `&langpair=${from || "auto"}|${to}`;

  try {
    const res = await fetch(url);
    const data = await res.json();
    output.textContent = data.responseData.translatedText;
  } catch {
    output.textContent = "Erro na tradução";
  }
}

textarea.addEventListener("input", () => {
  clearTimeout(debounce);
  debounce = setTimeout(translate, 400);
});

sourceSelect.addEventListener("change", translate);
targetSelect.addEventListener("change", translate);

/* ===== SWITCH ===== */
switchBtn.addEventListener("click", () => {
  if (sourceSelect.value === "auto") return;

  [sourceSelect.value, targetSelect.value] =
    [targetSelect.value, sourceSelect.value];

  [textarea.value, output.textContent] =
    [output.textContent, textarea.value];

  translate();
});

/* ===== VOZ → TEXTO ===== */
const SpeechRecognition =
  window.SpeechRecognition || window.webkitSpeechRecognition;

if (SpeechRecognition && micBtn) {
  const recognition = new SpeechRecognition();
  recognition.continuous = false;
  recognition.interimResults = false;

  micBtn.addEventListener("click", () => {
    recognition.lang =
      sourceSelect.value === "auto"
        ? navigator.language
        : sourceSelect.value;

    recognition.start();
    micBtn.classList.add("active");
  });

  recognition.onresult = e => {
    textarea.value +=
      (textarea.value ? " " : "") + e.results[0][0].transcript;
    translate();
  };

  recognition.onend = () => micBtn.classList.remove("active");
  recognition.onerror = () => micBtn.classList.remove("active");
}
const listenBtn = document.getElementById("listenBtn");

function speakTranslatedText() {
  const text = output.textContent.trim();
  if (!text) return;

  window.speechSynthesis.cancel();

  const utterance = new SpeechSynthesisUtterance(text);

  const langMap = {
    "pt-BR": "pt-BR",
    "pt-PT": "pt-PT",
    "en-US": "en-US",
    "en-GB": "en-GB",
    "es": "es-ES",
    "fr": "fr-FR",
    "de": "de-DE",
    "it": "it-IT",
    "ru": "ru-RU",
    "ja": "ja-JP",
    "ko": "ko-KR",
    "zh-CN": "zh-CN",
    "zh-TW": "zh-TW",
    "ar": "ar-SA",
    "hi": "hi-IN",
    "tr": "tr-TR",
    "nl": "nl-NL",
    "sv": "sv-SE",
    "pl": "pl-PL",
    "uk": "uk-UA",
    "vi": "vi-VN"
  };

  utterance.lang =
    langMap[targetSelect.value] ||
    targetSelect.value ||
    "en-US";

  utterance.rate = 1;
  utterance.pitch = 1;
  utterance.volume = 1;

  speechSynthesis.speak(utterance);
}

listenBtn.addEventListener("click", speakTranslatedText);
