const currentForecast = document.querySelector('.current-forecast');
const currentForecastTitle = currentForecast.querySelector('h1');
const currentForecastPercent = currentForecast.querySelector('p');
const forecastTemplate = document.querySelector('#forecast-item');
const forecastsList = document.querySelector('.forecasts');
const button = document.querySelector('.forecast-btn');

const predictions = [
    { text: "Сегодня ты встретишь свою вторую половинку", min: 70, max: 100 },
    { text: "Тебя пригласят на свидание", min: 50, max: 90 },
    { text: "Будь осторожен, возможны непредвиденные ситуации", min: 20, max: 60 },
    { text: "Сегодня ты получишь неожиданный подарок", min: 60, max: 95 },
    { text: "Сегодня не твой день, попробуй завтра", min: 10, max: 50 }
];
function generateRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
};
button.addEventListener('click', generatePrediction);

function generatePrediction() {
    const randomPrediction = generateRandomNumber(0, 5)
    const probability = generateRandomNumber(0, 101);
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
