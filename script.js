const currentForecast = document.querySelector('.current-forecast');
const currentForecastTitle = currentForecast.querySelector('h1');
const currentForecastPercent = currentForecast.querySelector('p');
const forecastTemplate = document.querySelector('#forecast-item');
const forecastsList = document.querySelector('.forecasts');
const button = document.querySelector('.forecast-btn');

const predictions = [
    { text: "У тебя сегодня день рождения", min: 99, max: 100 },
    { text: "Завтра ты увидишь свою вторую половинку", min: 90, max: 100 },
    { text: "Тебя сегодня ждет неожиданный сюрприз", min: 70, max: 85 },
    { text: "Ты сегодня классно проведешь свой день", min: 60, max: 80 },
    { text: "Тебя завтра ждет горячая ночь!(18+)", min: 80, max: 90 }
];
function generateRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
};
button.addEventListener('click', generatePrediction);

function generatePrediction() {
    const randomPrediction = generateRandomNumber(0, 5);
    const probability = generateRandomNumber(90, 101);
    const predictionText = predictions[randomPrediction].text;
    currentForecastTitle.textContent = predictionText;
    currentForecastPercent.textContent = `${probability}%`;
    const forecastToAdd = forecastTemplate.content.cloneNode(true);
    forecastToAdd.querySelector('h3').textContent = predictionText;
    forecastToAdd.querySelector('p').textContent = probability;
    forecastsList.prepend(forecastToAdd);
};



/* Генерация предсказания должна происходить при клике на кнопку «предсказать судьбу» */

/* Заранее заготовь 3-5 предсказаний и в зависимости от того, как лягут карты судьбы (или что скажет Math.random) показывай их пользователю */

/* Подставляй текст нового предсказания в .current-forecast h1 */

/* Показывай процент вероятности, с которым предсказание сбудется — в верстке это .current-forecast p */

/* Данный процент также нужно генерировать автоматически, он может принимать значения от 0 до 100% */

/* Совет: заведи функцию-хелпер, которая будет заниматься только генерацией данных в диапазоне от min до max и используй ее где нужно */

/* При генерации нового предсказания старое предсказание должно добавляться в начало списка «Мои предсказания» — .forecasts  */

/* Для добавления предсказания в список воспользуйся шаблоном forecast-item */
