// Объект с переводами для двух языков
const translations = {
    uk: {
        companyName: 'Magnit',
        companyDesc: 'студія дизайну інтер’єру',
        mainHeading: 'РОЗРОБКА ДИЗАЙНУ ІНТЕР’ЄРУ',
        subHeading: 'Ремонт квартир, будинків та комерційних приміщень',
        btnConsultation: 'Консультація',
        calculateCostBtn: 'Прорахувати вартість',
        confirmTitle: 'Підтвердження',
        phoneText: 'Ви хочете зробити дзвінок на номер:',
        emailText: 'Ви хочете надіслати листа:',
        linkText: 'Ви хочете відкрити посилання:',
        consultationText: 'Ви хочете зробити заявку на консультацію:',
        confirmBtn: 'Підтвердити',
        cancelBtn: 'Скасувати',
        sendEmail: 'Надіслати листа',
        userEmailPlaceholder: 'Ваша пошта',
        userNamePlaceholder: 'Ваше ім’я',
        userSurnamePlaceholder: 'Ваше прізвище',
        messagePlaceholder: 'Ваше повідомлення',
    },
    ru: {
        companyName: 'Magnit',
        companyDesc: 'студия дизайна интерьера',
        mainHeading: 'РАЗРАБОТКА ДИЗАЙНА ИНТЕРЬЕРА',
        subHeading: 'Ремонт квартир, домов и коммерческих помещений',
        btnConsultation: 'Консультация',
        calculateCostBtn: 'Рассчитать стоимость',
        confirmTitle: 'Подтверждение',
        phoneText: 'Вы хотите сделать звонок на номер:',
        emailText: 'Вы хотите отправить письмо:',
        linkText: 'Вы хотите открыть ссылку:',
        consultationText: 'Вы хотите сделать заявку на консультацию:',
        confirmBtn: 'Подтвердить',
        cancelBtn: 'Отмена',
        sendEmail: 'Отправить письмо',
        userEmailPlaceholder: 'Ваша почта',
        userNamePlaceholder: 'Ваше имя',
        userSurnamePlaceholder: 'Ваша фамилия',
        messagePlaceholder: 'Ваше сообщение',
    }
};

// Функция для смены языка
function setLanguage(lang) {
    // Update page content
    document.getElementById('company-name').textContent = translations[lang].companyName;
    document.getElementById('company-desc').textContent = translations[lang].companyDesc;
    document.getElementById('main-heading').textContent = translations[lang].mainHeading;
    document.getElementById('sub-heading').textContent = translations[lang].subHeading;
    document.getElementById('btn-consultation').textContent = translations[lang].btnConsultation;
    document.getElementById('calculate-cost-btn').firstChild.textContent = translations[lang].calculateCostBtn;

    // Update modal content
    document.getElementById('confirm-title').textContent = translations[lang].confirmTitle;
    document.getElementById('phone-text').textContent = translations[lang].phoneText;
    document.getElementById('email-text').textContent = translations[lang].emailText;
    document.getElementById('link-text').textContent = translations[lang].linkText;
    document.getElementById('consultation-text').textContent = translations[lang].consultationText;
    document.getElementById('confirm-btn').textContent = translations[lang].confirmBtn;
    document.getElementById('cancel-btn').textContent = translations[lang].cancelBtn;
    document.getElementById('send-email').textContent = translations[lang].sendEmail;
    
    // Update placeholders for email form
    document.getElementById('user-email').placeholder = translations[lang].userEmailPlaceholder;
    document.getElementById('user-name').placeholder = translations[lang].userNamePlaceholder;
    document.getElementById('user-surname').placeholder = translations[lang].userSurnamePlaceholder;
    document.getElementById('message').placeholder = translations[lang].messagePlaceholder;

    // Save selected language to localStorage
    localStorage.setItem('language', lang); // Save selected language
}

// Установка языка при загрузке страницы
document.addEventListener('DOMContentLoaded', () => {
    const savedLanguage = localStorage.getItem('language') || 'uk';
    document.getElementById('language-select').value = savedLanguage;
    setLanguage(savedLanguage);
});

// Слушатель на изменение языка
document.getElementById('language-select').addEventListener('change', (event) => {
    setLanguage(event.target.value);
});

function confirmNavigation(data, type) {
    const modal = document.getElementById('confirm');
    const phoneSection = document.getElementById('phone');
    const emailSection = document.getElementById('email');
    const linkSection = document.getElementById('link');

    // Hide all sections initially
    phoneSection.classList.add('hidden');
    emailSection.classList.add('hidden');
    linkSection.classList.add('hidden');

    // Show the right section based on the action type
    if (type === 'phone') {
        phoneSection.classList.remove('hidden');
        document.getElementById('phone-number').textContent = data;
    } else if (type === 'email') {
        emailSection.classList.remove('hidden');
    } else if (type === 'link') {
        linkSection.classList.remove('hidden');
        document.getElementById('link-url').textContent = data;
    }

    // Show the modal
    modal.classList.remove('hidden');
}

// Close modal on cancel
document.getElementById('cancel-btn').addEventListener('click', () => {
    document.getElementById('confirm').classList.add('hidden');
});

// Handle confirm action
document.getElementById('confirm-btn').addEventListener('click', () => {
    const phoneSection = document.getElementById('phone');
    const linkSection = document.getElementById('link');
    const emailSection = document.getElementById('email');

    // Perform actions based on which section is visible
    if (!phoneSection.classList.contains('hidden')) {
        alert("Calling number: " + document.getElementById('phone-number').textContent);
    } else if (!linkSection.classList.contains('hidden')) {
        const url = document.getElementById('link-url').textContent;
        window.open(url, '_blank'); // Open the link
    }

    // Hide the modal after confirming
    document.getElementById('confirm').classList.add('hidden');
});

// Handle sending email
document.getElementById('send-email').addEventListener('click', () => {
    const email = document.getElementById('user-email').value;
    const name = document.getElementById('user-name').value;
    const surname = document.getElementById('user-surname').value;
    const message = document.getElementById('message').value;

    if (email && name && message) {
        const subject = encodeURIComponent(`Письмо от ${name} ${surname}`);
        const body = encodeURIComponent(`Сообщение: ${message}\n\nОтправлено с почты: ${email}`);
        
        // Создаем ссылку для mailto
        const mailtoLink = `mailto:irfed@ukr.net?subject=${subject}&body=${body}`;
        window.location.href = mailtoLink; // Открываем почтовый клиент
        document.getElementById('confirm').classList.add('hidden'); // Закрываем модальное окно
    } else {
        alert("Пожалуйста, заполните все поля.");
    }
});