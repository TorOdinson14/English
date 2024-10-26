// Функция для открытия боковой панели
function openNav() {
    document.getElementById("sidebar").classList.add("active");
}

// Функция для закрытия боковой панели
function closeNav() {
    document.getElementById("sidebar").classList.remove("active");
}

// Функция для загрузки содержимого
function loadContent(page) {
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

// Добавляем событие для кнопки меню
document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('menu-btn').onclick = function() {
        document.getElementById('sidebar').classList.toggle('active');
    };
});

// Функция для открытия и закрытия подменю
function toggleSubmenu() {
    const submenu = document.getElementById('submenu');
    submenu.style.display = submenu.style.display === 'block' ? 'none' : 'block';
}
function loadContent(page) {
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
