const knowledgeBase = [
  {
    keys: ['меню', 'обед', 'еда', 'завтрак', 'полдник', 'ужин', 'кормят'],
    answer: 'Сегодня в меню: молочная каша и чай на завтрак, овощной суп, картофельное пюре с куриной котлетой и компот на обед, а на полдник — творожная запеканка. 🍲'
  },
  {
    keys: ['расписание', 'режим дня', 'занятие', 'занятия', 'распорядок'],
    answer: 'Сегодня после завтрака — рисование, затем прогулка с 10:30 до 12:00. Тихий час начинается в 13:00, а после полдника будет музыкальное занятие. 🎨'
  },
  {
    keys: ['принести', 'взять с собой', 'сменные вещи', 'сменная одежда', 'завтра'],
    answer: 'На завтра положите в шкафчик сменную одежду и удобную обувь. Для занятия понадобится цветная бумага формата A4. Пожалуйста, подпишите личные вещи ребёнка. 🎒'
  },
  {
    keys: ['мероприят', 'праздник', 'событ', 'утренник', 'концерт'],
    answer: 'Ближайшее мероприятие — осенний праздник в пятницу в 16:30. Родителей ждём в музыкальном зале за 10 минут до начала. 🍂'
  },
  {
    keys: ['работает', 'время работы', 'открыт', 'закрыт', 'во сколько привести', 'до скольки'],
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
    keys: ['не придет', 'не придет', 'отсутств', 'пропуст', 'не будет', 'сообщить об отсутствии'],
    answer: 'Сообщить об отсутствии можно воспитателю до 8:00. В полной версии здесь будет кнопка «Ребёнок сегодня не придёт», а уведомление автоматически попадёт сотруднику группы. 📝'
  },
  {
    keys: ['документ', 'поступлен', 'зачислен', 'оформлен', 'справк', 'прием в сад'],
    answer: 'Для оформления обычно требуется заявление и комплект документов по правилам учреждения. В этом демо точный список не хранится — его подтвердит администрация детского сада. 📄'
  },
  {
    keys: ['оплат', 'квитанц', 'стоимост', 'деньги', 'платеж', 'задолж'],
    answer: 'Квитанции обычно доступны в начале месяца. В демонстрационной версии платёжные данные не используются; точную сумму и срок оплаты необходимо уточнить у администрации. 💳'
  },
  {
    keys: ['адаптац', 'привыка', 'плачет', 'боится', 'первый день', 'новеньк'],
    answer: 'В первые дни можно постепенно увеличивать время пребывания ребёнка в группе. Поддерживайте спокойный ритуал прощания, а индивидуальный план адаптации согласуйте с воспитателем. 🌿'
  },
  {
    keys: ['аллерг', 'неперенос', 'диет', 'нельзя есть', 'особое питание'],
    answer: 'Информацию об аллергии или особом питании нужно передать администрации и медицинскому специалисту по установленным правилам. Бот не изменяет рацион самостоятельно. 🥗'
  },
  {
    keys: ['тихий час', 'дневной сон', 'спит', 'сон', 'укладывают'],
    answer: 'Тихий час проходит ориентировочно с 13:00 до 15:00. Если ребёнку трудно заснуть, воспитатель поможет спокойно отдохнуть с учётом правил группы. 😴'
  },
  {
    keys: ['прогул', 'гуляют', 'погода', 'дожд', 'мороз', 'улиц'],
    answer: 'Прогулка запланирована с 10:30 до 12:00 и после полдника. Решение о выходе принимают сотрудники с учётом погоды и правил безопасности. 🌦️'
  },
  {
    keys: ['как одеть', 'как одевать', 'одежд', 'обув', 'шапк', 'варежк'],
    answer: 'Выбирайте удобную одежду по погоде, которую ребёнок сможет частично надеть самостоятельно. В шкафчике стоит оставить полный запас сменной одежды и обуви. 🧥'
  },
  {
    keys: ['кто может забрать', 'заберет', 'бабушка', 'дедушка', 'другой человек', 'доверен'],
    answer: 'Ребёнка передают только тем взрослым, которые заранее указаны родителем по правилам учреждения. Если придёт другой человек, обязательно заранее свяжитесь с администрацией. 🔐'
  },
  {
    keys: ['выходн', 'праздничный день', 'каникул', 'нерабоч', 'праздники'],
    answer: 'По выходным детский сад закрыт. Изменения работы в праздничные дни публикуются отдельным объявлением администрации. 📅'
  },
  {
    keys: ['игрушк', 'принести игрушку', 'свою игрушку', 'личная игрушка'],
    answer: 'Небольшую личную игрушку можно приносить только по согласованию с воспитателем. Лучше не брать дорогие, хрупкие или слишком мелкие предметы. 🧸'
  },
  {
    keys: ['день рождения', 'угощен', 'торт', 'конфет', 'подарок группе'],
    answer: 'Формат поздравления и допустимые угощения нужно заранее согласовать с воспитателем, поскольку в группе могут быть ограничения по питанию. 🎂'
  },
  {
    keys: ['фото', 'видео', 'съемк', 'фотограф', 'публикац'],
    answer: 'Фото и видео детей можно использовать только по правилам учреждения и при наличии необходимых согласий. В этой демонстрации фотографии детей не хранятся. 📷'
  },
  {
    keys: ['потерял', 'потерялась', 'забыл', 'найден', 'пропала вещь'],
    answer: 'Проверьте шкафчик ребёнка и место для найденных вещей, затем сообщите воспитателю. Подписанные вещи обычно возвращаются быстрее. 🔎'
  },
  {
    keys: ['безопасн', 'охрана', 'посторон', 'вход', 'забор', 'калитк'],
    answer: 'Вход в учреждение контролируется сотрудниками. Не передавайте способы доступа посторонним и сообщайте администрации о любых подозрительных ситуациях. 🛡️'
  },
  {
    keys: ['группа', 'сколько детей', 'возраст детей', 'какая группа'],
    answer: 'В демонстрационной группе занимаются дети одного возрастного диапазона. Точный состав группы относится к внутренней информации и предоставляется только уполномоченным родителям. 👧'
  },
  {
    keys: ['привет', 'здравств', 'добрый', 'hello'],
    answer: 'Здравствуйте! Я помогу узнать меню, режим дня, необходимые вещи, мероприятия, правила посещения и другую информацию о kindergarden. О чём хотите спросить? 😊'
  }
];

const quickQuestions = [
  { label: '🍲 Что на обед?', value: 'Что сегодня на обед?' },
  { label: '🕒 Режим дня', value: 'Какое сегодня расписание?' },
  { label: '🎒 Что принести?', value: 'Что нужно принести завтра?' },
  { label: '🍂 Мероприятия', value: 'Какие ближайшие мероприятия?' },
  { label: '📝 Не придём', value: 'Как сообщить об отсутствии?' },
  { label: '📄 Документы', value: 'Какие нужны документы для поступления?' },
  { label: '🌿 Адаптация', value: 'Как проходит адаптация?' },
  { label: '🌦️ Прогулка', value: 'Когда дети гуляют?' },
  { label: '😴 Тихий час', value: 'Когда начинается тихий час?' },
  { label: '🔐 Кто заберёт?', value: 'Кто может забрать ребёнка?' },
  { label: '💳 Оплата', value: 'Когда нужно оплатить квитанцию?' },
  { label: '☎️ Контакты', value: 'Как связаться с воспитателем?' }
];

const initialMessages = [
  {
    role: 'bot',
    text: 'Здравствуйте! Я виртуальный помощник kindergarden. Могу рассказать о меню, расписании, документах, прогулках, адаптации и других правилах сада. Задайте вопрос или выберите подсказку ниже. 🌱',
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
