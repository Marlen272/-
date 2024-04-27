//1
// const extractNumbers = (skr) => {
//     return skr.match(/\d+/g).map(Number)
// }
// console.log(extractNumbers("a1fg5hj6")) // Вернёт [1, 5, 6]


//2
// const fibonachi = (n, a = 0, b = 1) => {
//     if (n > 0) {
//         console.log(a)
//         setTimeout(() => fibonachi(n - 1, b, a + b), 1000)
//     }
// }
// fibonachi(13)


//3
// const fetchData = async () => {
//     const response = await fetch('https://fakestoreapi.com/products')
//     const data = await response.json()
//     const titles = data.map(item => item.title)
//     console.log(titles)
// }
// fetchData().catch(error => console.error('Ошибка получения данных:', error))


//4
// const colorButtons = document.querySelectorAll('#colorButtons button');
// colorButtons.forEach(button => {
//     button.addEventListener('click', function() {
//         const colorClass = this.classList[0]
//         document.body.className = colorClass
//     })
// })


//6
// document.addEventListener('DOMContentLoaded', function() {
//     const counterElement = document.getElementById('counter');
//     let count = 0;
//     const intervalId = setInterval(function() {
//         count++
//         counterElement.textContent = count
//         if (count >= 100) {
//             clearInterval(intervalId)
//         }
//     }, 1) // интервал в 1 миллисекунду
// })



