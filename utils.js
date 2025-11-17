/**
 * utils.js - Модуль для маніпуляції даними (фільтрація, сортування).
 */

/**
 * Фільтрує користувачів за вказаним містом.
 * @param {Array<Object>} users Масив об'єктів-користувачів.
 * @param {string} city Назва міста для фільтрації.
 * @returns {Array<Object>} Відфільтрований масив користувачів.
 */
export function filterByCity(users, city) {
    console.log(`🔎 Фільтрую користувачів за містом: "${city}"`);
    return users.filter(user => user.address.city === city);
}

/**
 * Сортує користувачів за ім'ям (властивість 'name') в алфавітному порядку.
 * @param {Array<Object>} users Масив об'єктів-користувачів.
 * @returns {Array<Object>} Відсортований масив користувачів.
 */
export function sortByName(users) {
    console.log('⬆️ Сортую користувачів за ім\'ям.');
    // Використовуємо .slice() для створення копії масиву перед сортуванням, 
    // щоб не змінювати оригінальний масив
    return users.slice().sort((a, b) => a.name.localeCompare(b.name));
}