const knowledgeBase = [
  {
    keys: ['меню', 'обед', 'еда', 'завтрак', 'полдник', 'ужин', 'корм'],
    answer: 'Сегодня в меню: молочная каша и чай на завтрак, овощной суп, картофельное пюре с куриной котлетой и компот на обед, а на полдник — творожная запеканка. 🍲'
  },
  {
    keys: ['расписание', 'режим', 'занят', 'сон', 'гуля', 'прогул'],
    answer: 'Сегодня после завтрака — рисование, затем прогулка с 10:30 до 12:00. Тихий час начинается в 13:00, а после полдника будет музыкальное занятие. 🎨'
  },
  {
    keys: ['принести', 'взять', 'вещ', 'одеж', 'завтра', 'нужно'],
    answer: 'На завтра положите в шкафчик сменную одежду и удобную обувь. Для занятия понадобится цветная бумага формата A4. Пожалуйста, подпишите личные вещи ребёнка. 🎒'
  },
  {
    keys: ['мероприят', 'праздник', 'событ', 'утренник', 'концерт'],
    answer: 'Ближайшее мероприятие — осенний праздник в пятницу в 16:30. Родителей ждём в музыкальном зале за 10 минут до начала. 🍂'
  },
  {
    keys: ['работ', 'время', 'открыт', 'закрыт', 'забрать', 'привести'],
    answer: 'Детский сад открыт по будням с 7:00 до 19:00. Рекомендуем приводить детей до 8:15, чтобы они успели подготовиться к завтраку. 🕖'
  },
  {
    keys: ['боле', 'температур', 'здоров', 'лекар', 'кашель'],
    answer: 'Если ребёнок плохо себя чувствует, пожалуйста, оставьте его дома и сообщите воспитателю. По вопросам здоровья и возвращения в группу обратитесь к медицинскому специалисту — бот не даёт медицинских рекомендаций. 💚'
  },
  {
    keys: ['контакт', 'телефон', 'воспитател', 'связаться', 'позвон'],
    answer: 'Для связи с воспитателем используйте демонстрационный номер +7 (000) 000-00-00. В рабочей версии здесь будет настоящий контакт вашей группы. ☎️'
  },
  {
    keys: ['привет', 'здравств', 'добрый', 'hello'],
    answer: 'Здравствуйте! Я помогу узнать меню, режим дня, список необходимых вещей и ближайшие мероприятия. О чём хотите спросить? 😊'
  }
];

const quickQuestions = [
  { label: '🍲 Что на обед?', value: 'Что сегодня на обед?' },
  { label: '🕒 Режим дня', value: 'Какое сегодня расписание?' },
  { label: '🎒 Что принести?', value: 'Что нужно принести завтра?' },
  { label: '🍂 Мероприятия', value: 'Какие ближайшие мероприятия?' }
];

const initialMessages = [
  {
    role: 'bot',
    text: 'Здравствуйте! Я виртуальный помощник kindergarden. Спросите меня о меню, расписании или ближайших мероприятиях. 🌱',
    time: 'Сейчас'
  }
];

let messages = [...initialMessages];
let isTyping = false;

const phoneMessages = document.querySelector('#phoneMessages');
const desktopMessages = document.querySelector('#desktopMessages');
const forms = [...document.querySelectorAll('[data-chat-form]')];
const inputs = [...document.querySelectorAll('[data-chat-input]')];

function escapeHtml(value) {
  return value.replace(/[&<>'"]/g, (char) => ({
    '&': '&amp;', '<': '&lt;', '>': '&gt;', "'": '&#039;', '"': '&quot;'
  })[char]);
}

function formatTime() {
  return new Intl.DateTimeFormat('ru-RU', { hour: '2-digit', minute: '2-digit' }).format(new Date());
}

function messageTemplate(message, compact = false) {
  const isUser = message.role === 'user';
  const maxWidth = compact ? 'max-w-[88%]' : 'max-w-[76%]';
  const textSize = compact ? 'text-[12px]' : 'text-sm';
  const padding = compact ? 'px-3 py-2.5' : 'px-4 py-3';

  return `
    <div class="message-in flex ${isUser ? 'justify-end' : 'justify-start'}">
      <div class="${maxWidth}">
        ${!isUser ? `<div class="mb-1 ml-1 ${compact ? 'text-[9px]' : 'text-[10px]'} font-bold uppercase tracking-wide text-leaf">ИИ-помощник</div>` : ''}
        <div class="${padding} ${textSize} leading-relaxed shadow-sm ${isUser ? 'rounded-[1.25rem] rounded-br-md bg-leaf text-white' : 'rounded-[1.25rem] rounded-bl-md border border-ink/5 bg-white text-ink'}">
          ${escapeHtml(message.text)}
        </div>
        <div class="mt-1 ${isUser ? 'mr-1 text-right' : 'ml-1'} ${compact ? 'text-[8px]' : 'text-[9px]'} text-ink/35">${escapeHtml(message.time)}</div>
      </div>
    </div>`;
}

function typingTemplate(compact = false) {
  return `
    <div class="message-in flex justify-start" data-typing>
      <div>
        <div class="mb-1 ml-1 ${compact ? 'text-[9px]' : 'text-[10px]'} font-bold uppercase tracking-wide text-leaf">печатает…</div>
        <div class="flex items-center gap-1 rounded-[1.25rem] rounded-bl-md border border-ink/5 bg-white ${compact ? 'px-3 py-3' : 'px-4 py-4'} shadow-sm">
          <span class="typing-dot h-1.5 w-1.5 rounded-full bg-leaf"></span>
          <span class="typing-dot h-1.5 w-1.5 rounded-full bg-leaf"></span>
          <span class="typing-dot h-1.5 w-1.5 rounded-full bg-leaf"></span>
        </div>
      </div>
    </div>`;
}

function renderMessages() {
  phoneMessages.innerHTML = messages.map((message) => messageTemplate(message, true)).join('') + (isTyping ? typingTemplate(true) : '');
  desktopMessages.innerHTML = messages.map((message) => messageTemplate(message, false)).join('') + (isTyping ? typingTemplate(false) : '');
  requestAnimationFrame(() => {
    phoneMessages.scrollTop = phoneMessages.scrollHeight;
    desktopMessages.scrollTop = desktopMessages.scrollHeight;
  });
}

function renderChips() {
  const phone = document.querySelector('#phoneChips');
  const desktop = document.querySelector('#desktopChips');
  const button = (item, compact) => `<button type="button" data-question="${escapeHtml(item.value)}" class="shrink-0 rounded-xl border border-leaf/15 bg-mint/60 ${compact ? 'px-2.5 py-1.5 text-[10px]' : 'px-3 py-2 text-xs'} font-semibold text-leaf transition hover:-translate-y-0.5 hover:bg-mint active:translate-y-0">${item.label}</button>`;
  phone.innerHTML = quickQuestions.map((item) => button(item, true)).join('');
  desktop.innerHTML = quickQuestions.map((item) => button(item, false)).join('');

  document.querySelectorAll('[data-question]').forEach((element) => {
    element.addEventListener('click', () => sendMessage(element.dataset.question));
  });
}

function findAnswer(question) {
  const normalized = question.toLowerCase().replace(/ё/g, 'е');
  let bestMatch = null;
  let bestScore = 0;

  knowledgeBase.forEach((entry) => {
    const score = entry.keys.reduce((total, key) => total + (normalized.includes(key) ? 1 : 0), 0);
    if (score > bestScore) {
      bestScore = score;
      bestMatch = entry;
    }
  });

  return bestMatch?.answer || 'Я пока не нашёл точного ответа в демонстрационной базе. Попробуйте спросить про меню, расписание, необходимые вещи, мероприятия или время работы сада. В полной версии я передам такой вопрос воспитателю. 🙂';
}

async function sendMessage(rawValue) {
  const value = rawValue.trim();
  if (!value || isTyping) return;

  messages.push({ role: 'user', text: value, time: formatTime() });
  inputs.forEach((input) => { input.value = ''; input.style.height = 'auto'; });
  isTyping = true;
  renderMessages();

  const delay = Math.min(2200, Math.max(900, 650 + value.length * 24));
  await new Promise((resolve) => setTimeout(resolve, delay));

  isTyping = false;
  messages.push({ role: 'bot', text: findAnswer(value), time: formatTime() });
  renderMessages();
}

forms.forEach((form) => {
  form.addEventListener('submit', (event) => {
    event.preventDefault();
    const input = form.querySelector('[data-chat-input]');
    sendMessage(input.value);
  });
});

inputs.forEach((input) => {
  input.addEventListener('keydown', (event) => {
    if (event.key === 'Enter' && !event.shiftKey) {
      event.preventDefault();
      sendMessage(input.value);
    }
  });
  input.addEventListener('input', () => {
    input.style.height = 'auto';
    input.style.height = `${Math.min(input.scrollHeight, 112)}px`;
  });
});

document.querySelector('#resetButton').addEventListener('click', () => {
  messages = [...initialMessages];
  isTyping = false;
  renderMessages();
});

renderChips();
renderMessages();
