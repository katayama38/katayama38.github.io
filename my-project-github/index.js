// hamburgerrrrrr!!!

const hamburger = document.getElementById('hamburger');
const menu = document.getElementById('menu');
const closeMenu = document.getElementById('close-menu');

hamburger.addEventListener('click', () => {
    menu.classList.toggle('active');
});

// メニュー外をクリックしたときにメニューを閉じる処理
document.addEventListener('click', (e) => {
    if (!menu.contains(e.target) && !hamburger.contains(e.target) && menu.classList.contains('active')) {
        menu.classList.remove('active');
    }
});

// クローズボタンの機能
closeMenu.addEventListener('click', () => {
    menu.classList.remove('active');
});


// スクロールで背景変更
const section = [
    { element: document.getElementById('top'), color: '#eee'},
    { element: document.getElementById('about'), color: '#66cc99'},
    { element: document.getElementById('portfolio'), color: '#393939'},
    { element: document.getElementById('contact'), color: '#eee'}
];

function changeBackgroundColorOnScroll(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            document.body.style.backgroundColor = entry.target.dataset.color;
        }
    });
}

const thresholdValue = window.innerWidth <= 768 ? [0] : [0.5];

const observer = new IntersectionObserver(changeBackgroundColorOnScroll, { threshold: thresholdValue });

section.forEach(item => {
    item.element.dataset.color = item.color;
    observer.observe(item.element);
});

const boxes = [
    { element: document.querySelector('#about')},
    { element: document.querySelector('#portfolio')},
    { element: document.querySelector('#contact')}
];

function animateBoxes() {
    const scrollPosition = window.scrollY + window.innerHeight;
    boxes.forEach(box => {
        const boxTop = box.element.getBoundingClientRect().top + window.scrollY;
        if (scrollPosition > boxTop + 100 && !box.element.classList.contains('is-active')) {
            box.element.classList.add('is-active');
        }
    });
}

function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        clearTimeout(timeout);
        timeout = setTimeout(() => {
            func(...args);
        }, wait);
    };
}

window.addEventListener('scroll', debounce(animateBoxes, 80));

// アクセシビリティの設定
document.querySelector('.hamburger').setAttribute('role', 'button');
document.querySelector('.hamburger').setAttribute('aria-label', 'Open Menu');
document.querySelector('.menu').setAttribute('role', 'menubar');

document.addEventListener('DOMContentLoaded', () => {
    observer.observe(section[0].element);
});
