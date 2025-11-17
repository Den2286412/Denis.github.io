/**
 * main.js - Головний файл додатку.
 */

// 3. Використовуємо модулі: імпорт функцій
import { fetchUsers } from './api.js';
import { filterByCity, sortByName } from './utils.js';

// 2. Параметр для фільтрації
const TARGET_CITY = 'Gwenborough';

/**
 * Виводить список користувачів у консоль та HTML-елемент.
 * @param {Array<Object>} users Список користувачів.
 * @param {string} targetElementId ID HTML-елемента для виведення.
 */
function displayUsers(users, targetElementId) {
    const listElement = document.getElementById(targetElementId);
    
    // Вивід у консоль
    console.log('\n--- 🌟 Фінальний відфільтрований та відсортований список ---');
    console.table(users.map(user => ({ Name: user.name, City: user.address.city, Email: user.email })));

    if (listElement) {
        // Вивід в HTML
        listElement.innerHTML = ''; // Очищаємо список
        if (users.length === 0) {
            listElement.innerHTML = `<li>Не знайдено користувачів у місті ${TARGET_CITY}.</li>`;
            return;
        }

        users.forEach(user => {
            const listItem = document.createElement('li');
            listItem.textContent = `Ім'я: ${user.name} | Місто: ${user.address.city} | Email: ${user.email}`;
            listElement.appendChild(listItem);
        });
        console.log(`✅ Результат виведено в HTML-елемент #${targetElementId}`);
    } else {
        console.warn(`⚠️ HTML-елемент з ID "${targetElementId}" не знайдено.`);
    }
}


/**
 * Основна функція для запуску логіки додатку.
 */
async function initApp() {
    const outputElementId = 'users-list'; // ID елемента <ul> в index.html
    
    try {
        // 1. Завантаження списку користувачів
        const allUsers = await fetchUsers();
        
        // Перевірка, чи не порожній масив (хоча API, ймовірно, поверне не порожній)
        if (!allUsers || allUsers.length === 0) {
            throw new Error('Отримано порожній список користувачів.');
        }

        // 2. Маніпуляція даними: Фільтрація
        const filteredUsers = filterByCity(allUsers, TARGET_CITY);

        // 2. Маніпуляція даними: Сортування
        const sortedUsers = sortByName(filteredUsers);

        // 4. Вивід результату
        displayUsers(sortedUsers, outputElementId);

    } catch (error) {
        // 5. Обробка помилок
        const listElement = document.getElementById(outputElementId);
        const errorMessage = `Помилка виконання додатку: ${error.message}. Дивіться консоль для деталей.`;
        console.error(errorMessage);
        if (listElement) {
            listElement.innerHTML = `<li style="color: red;">${errorMessage}</li>`;
        }
    }
}

// Запуск додатку
initApp();