/**
 * api.js - Модуль для імітації мережевих запитів з 30 користувачами.
 */

// Масив, що імітує дані 30 користувачів
const MOCK_USERS_DATA = [
    // 8 користувачів у Gwenborough (для успішної фільтрації)
    { id: 1, name: 'Abe Lincoln', email: 'abe.l@example.com', address: { city: 'Gwenborough' } },
    { id: 2, name: 'Charlie Brown', email: 'charlie.b@example.com', address: { city: 'Gwenborough' } },
    { id: 3, name: 'Diana Prince', email: 'diana.p@example.com', address: { city: 'Gwenborough' } },
    { id: 4, name: 'Emma Stone', email: 'emma.s@example.com', address: { city: 'Gwenborough' } },
    { id: 5, name: 'Frank Sinatra', email: 'frank.s@example.com', address: { city: 'Gwenborough' } },
    { id: 6, name: 'Gary Oldman', email: 'gary.o@example.com', address: { city: 'Gwenborough' } },
    { id: 7, name: 'Henry Ford', email: 'henry.f@example.com', address: { city: 'Gwenborough' } },
    { id: 8, name: 'Ivy Green', email: 'ivy.g@example.com', address: { city: 'Gwenborough' } },

    // 22 користувачі в інших містах (для перевірки фільтрації)
    { id: 9, name: 'Jack White', email: 'jack.w@example.com', address: { city: 'Leipzig' } },
    { id: 10, name: 'Kelly Clarkson', email: 'kelly.c@example.com', address: { city: 'Leipzig' } },
    { id: 11, name: 'Liam Neeson', email: 'liam.n@example.com', address: { city: 'Lviv' } },
    { id: 12, name: 'Mia Wallace', email: 'mia.w@example.com', address: { city: 'Lviv' } },
    { id: 13, name: 'Noah King', email: 'noah.k@example.com', address: { city: 'Kyiv' } },
    { id: 14, name: 'Olivia Pope', email: 'olivia.p@example.com', address: { city: 'Kyiv' } },
    { id: 15, name: 'Peter Pan', email: 'peter.p@example.com', address: { city: 'Dnipro' } },
    { id: 16, name: 'Quinn Red', email: 'quinn.r@example.com', address: { city: 'Dnipro' } },
    { id: 17, name: 'Robert De Niro', email: 'robert.d@example.com', address: { city: 'Odessa' } },
    { id: 18, name: 'Sarah Connor', email: 'sarah.c@example.com', address: { city: 'Odessa' } },
    { id: 19, name: 'Tom Hanks', email: 'tom.h@example.com', address: { city: 'Kharkiv' } },
    { id: 20, name: 'Uma Thurman', email: 'uma.t@example.com', address: { city: 'Kharkiv' } },
    { id: 21, name: 'Victor Hugo', email: 'victor.h@example.com', address: { city: 'Zaporizhzhia' } },
    { id: 22, name: 'Wendy Darling', email: 'wendy.d@example.com', address: { city: 'Zaporizhzhia' } },
    { id: 23, name: 'Xavier Smith', email: 'xavier.s@example.com', address: { city: 'Poltava' } },
    { id: 24, name: 'Yara Greyjoy', email: 'yara.g@example.com', address: { city: 'Poltava' } },
    { id: 25, name: 'Zane Malik', email: 'zane.m@example.com', address: { city: 'Chernihiv' } },
    { id: 26, name: 'Alice Wonderland', email: 'alice.w@example.com', address: { city: 'Chernihiv' } },
    { id: 27, name: 'Bob Dylan', email: 'bob.d@example.com', address: { city: 'Rivne' } },
    { id: 28, name: 'Cindy Lou', email: 'cindy.l@example.com', address: { city: 'Rivne' } },
    { id: 29, name: 'David Lee', email: 'david.l@example.com', address: { city: 'Vinnytsia' } },
    { id: 30, name: 'Eva Mendes', email: 'eva.m@example.com', address: { city: 'Vinnytsia' } },
];


/**
 * Імітує завантаження 30 користувачів з API.
 * Імітує затримку мережі (1 секунда) для реалістичності.
 * @returns {Promise<Array<Object>>} Проміс, що повертає масив 30 користувачів.
 */
export async function fetchUsers() {
    try {
        console.log(`📡 Імітую запит: Завантаження 30 користувачів.`);
        
        // Імітація мережевої затримки
        await new Promise(resolve => setTimeout(resolve, 1000)); 

        // Імітація successful response
        const users = MOCK_USERS_DATA;
        
        console.log(`✅ Імітовані дані успішно завантажено. Загалом: ${users.length} користувачів.`);
        return users;

    } catch (error) {
        // У цьому випадку помилка не відбудеться, але ми залишаємо обробку
        console.error('❌ Виникла помилка при імітації завантаження даних:', error.message);
        throw new Error('Помилка завантаження імітованих даних.');
    }
}