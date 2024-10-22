// Toggle the menu for mobile devices
document.querySelector('.menu-toggle').addEventListener('click', function() {
    document.querySelector('.menu').classList.toggle('active');
});

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
