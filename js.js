// //1ЗАДАНИЕ
// const regExp = /^[1-9]+$/
//
// const containsOnlyDigits = (str) => {
//     return regExp.test(str)
// }
//
// console.log(containsOnlyDigits("12345")) // Выведет true
// console.log(containsOnlyDigits("12a45")) // Выведет false
// console.log(containsOnlyDigits("129k45")) // Выведет false
// console.log(containsOnlyDigits("12345324")) // Выведет true
//
// //2ЗАДАНИЕ
// function printSecond() {
//
//     const intervalId = setInterval(() => {
//         console.log(`Прошла секунда `)}, 1000)
//     setTimeout(() => {
//         clearInterval(intervalId)}, 5000)}
// printSecond()
//
// //3ЗАДАНИЕ
//
//
//     const count = (i) => {
//     console.log(i)
//         if (i < 10) {setTimeout(() => count(i + 1), 1000)}}
// count(1)

//4ЗАДАНИЕ
// Получаем элемент блока
const block = document.querySelector('.block');

// Добавляем обработчик события на клик
block.addEventListener('click', () => {
    // Проверяем, есть ли у блока класс 'active'
    const isActive = block.classList.contains('active');

    // Если класс 'active' есть, то удаляем его и убираем цвет фона
    if (isActive) {
        block.classList.remove('active');
        block.style.backgroundColor = '';
    } else {
        // Иначе добавляем класс 'active' и устанавливаем цвет фона
        block.classList.add('active');
        block.style.backgroundColor = 'blue'; // Любой цвет, который нужен при активации
    }
});



