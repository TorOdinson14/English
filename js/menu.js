// Функция для открытия боковой панели
function openNav() {
    document.getElementById("sidebar").classList.add("active");
}

// Функция для закрытия боковой панели
function closeNav() {
    document.getElementById("sidebar").classList.remove("active");
}

// Функция для загрузки содержимого
function loadContent(element) {
    const page = element.getAttribute('data-page'); // Получаем имя файла из data-page
    fetch(page)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.text();
        })
        .then(data => {
            document.getElementById('Theme').innerHTML = data;
        })
        .catch(error => {
            console.error('There has been a problem with your fetch operation:', error);
            document.getElementById('Theme').innerHTML = '<p>Ошибка загрузки содержимого.</p>';
        });
}

// Обработчики событий для свайпа
let startX, endX;

document.addEventListener('touchstart', (e) => {
    startX = e.touches[0].clientX; // Запоминаем начальную координату X
}, false);

document.addEventListener('touchmove', (e) => {
    endX = e.touches[0].clientX; // Запоминаем конечную координату X
}, false);

document.addEventListener('touchend', () => {
    const threshold = 50; // Минимальное расстояние для свайпа

    if (startX - endX > threshold) {
        // Если свайп влево, закрываем сайдбар
        closeNav();
    } else if (endX - startX > threshold) {
        // Если свайп вправо, открываем сайдбар
        openNav();
    }
}, false);

// Добавляем событие для кнопки меню
document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('menu-btn').onclick = function() {
        const sidebar = document.getElementById('sidebar');
        sidebar.classList.toggle('active'); // Переключаем класс активного состояния
    };
});
