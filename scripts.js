// Объект с переводами для двух языков
const translations = {
    uk: {
        companyName: 'Magnit',
        companyDesc: 'студія дизайну інтер’єру',
        mainHeading: 'РОЗРОБКА ДИЗАЙНУ ІНТЕР’ЄРУ',
        subHeading: 'Ремонт квартир, будинків та комерційних приміщень',
        linkWorks: 'Роботи',
        linkServices: 'Послуги',
        linkReviews: 'Відгуки',
        linkPrices: 'Ціни',
        linkContacts: 'Контакти',
        btnConsultation: 'Консультація',
        calculateCostBtn: 'Прорахувати вартість',
    },
    ru: {
        companyName: 'Magnit',
        companyDesc: 'студия дизайна интерьера',
        mainHeading: 'РАЗРАБОТКА ДИЗАЙНА ИНТЕРЬЕРА',
        subHeading: 'Ремонт квартир, домов и коммерческих помещений',
        linkWorks: 'Работы',
        linkServices: 'Услуги',
        linkReviews: 'Отзывы',
        linkPrices: 'Цены',
        linkContacts: 'Контакты',
        btnConsultation: 'Консультация',
        calculateCostBtn: 'Рассчитать стоимость',
    }
};

// Функция для смены языка
function setLanguage(lang) {
    document.getElementById('company-name').textContent = translations[lang].companyName;
    document.getElementById('company-desc').textContent = translations[lang].companyDesc;
    document.getElementById('main-heading').textContent = translations[lang].mainHeading;
    document.getElementById('sub-heading').textContent = translations[lang].subHeading;
    document.getElementById('link-works').textContent = translations[lang].linkWorks;
    document.getElementById('link-services').textContent = translations[lang].linkServices;
    document.getElementById('link-reviews').textContent = translations[lang].linkReviews;
    document.getElementById('link-prices').textContent = translations[lang].linkPrices;
    document.getElementById('link-contacts').textContent = translations[lang].linkContacts;
    document.getElementById('btn-consultation').textContent = translations[lang].btnConsultation;
    document.getElementById('calculate-cost-btn').firstChild.textContent = translations[lang].calculateCostBtn;
    localStorage.setItem('language', lang); // Сохраняем выбранный язык
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

// Переменные для модального окна
const confirmModal = document.getElementById('confirmModal');
const confirmMessage = document.getElementById('confirmMessage');
const confirmYes = document.getElementById('confirmYes');
const confirmNo = document.getElementById('confirmNo');

// Функция для открытия модального окна с сообщением
function openModal(message, url, type) {
    confirmMessage.textContent = message;
    confirmModal.style.display = 'flex';

    // Действие при нажатии "Да"
    confirmYes.onclick = function() {
        if (type === 'phone') {
            window.location.href = `tel:${url}`;
        } else {
            window.open(url, '_blank');
        }
        confirmModal.style.display = 'none'; // Закрыть окно после действия
    };

    // Закрытие окна при нажатии "Нет"
    confirmNo.onclick = function() {
        confirmModal.style.display = 'none';
    };
}

// Функция для показа кастомного подтверждающего окна
function confirmNavigation(url, type) {
    let message = '';
    if (type === 'phone') {
        message = 'Вы точно хотите позвонить?';
    } else {
        message = `Вы точно хотите перейти на сайт ${url}?`;
    }

    openModal(message, url, type);
}

// Закрытие модального окна при клике вне его
window.onclick = function(event) {
    if (event.target === confirmModal) {
        confirmModal.style.display = 'none';
    }
};