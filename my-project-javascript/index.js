// コメント：DOMの順序が不適切な部分があるが、これが機能するためには必要

const breadcrumbs = document.getElementById('breadcrumbs');
const sections = document.querySelectorAll('main h2');

// クリップボードにコピーする関数
function copyToClipboard(codeId, alertId) {
    const codeElement = document.getElementById(codeId);
    const alertElement = document.getElementById(alertId);

    if (!codeElement) {
        console.error(`ID '${codeId}' に対応する要素が見つかりません。`);
        return;
    }

    const codeText = codeElement.innerText || codeElement.textContent;
    navigator.clipboard.writeText(codeText).then(() => {
        alertElement.textContent = 'コピーしました！';
        alertElement.style.color = 'green';
        
        // 一定時間後にメッセージを消す
        setTimeout(() => {
            alertElement.textContent = '';
        }, 2000);
    }).catch(err => {
        console.error('コピーに失敗しました。: ', err);
    });
}

document.addEventListener('DOMContentLoaded', function() {
    // 計算機のコーナー
    const calculateButton = document.getElementById('calculate');
    if (calculateButton) {
        calculateButton.addEventListener('click', function() {
            const num1 = parseFloat(document.getElementById('num1').value);
            const num2 = parseFloat(document.getElementById('num2').value);

            if (isNaN(num1) || isNaN(num2)) {
                document.getElementById('calcResult').innerText = '有効な数を入力してください。';
                return;
            }

            const sum = num1 + num2;
            document.getElementById('calcResult').innerText = '合計: ' + sum;
        });
    } else {
        console.error("ID 'calculate' の要素が見つかりません。");
    }

    // カウントダウンのコーナー
    document.getElementById('start').addEventListener('click', function() {
        let seconds = parseInt(document.getElementById('seconds').value);
        const timerDisplay = document.getElementById('timer');

        if (isNaN(seconds) || seconds <= 0) {
            timerDisplay.innerText = '正しい秒数を入力してください。';
            return;
        }

        const interval = setInterval(function() {
            if (seconds <= 0) {
                clearInterval(interval);
                timerDisplay.innerText = '時間切れ！';
            } else {
                timerDisplay.innerText = seconds + '秒';
                seconds--;
            }
        }, 1000);
    });
});

// パンくずリストを更新する関数
function updateBreadcrumbs(currentPage) {
    breadcrumbs.innerHTML = '';
    const pages = ['ホーム', 'カテゴリ', currentPage];

    pages.forEach((page, index) => {
        const li = document.createElement('li');
        if (index < pages.length - 1) {
            const a = document.createElement('a');
            a.href = index === 0 ? 'home.html' : 'category.html';
            a.textContent = page;
            li.appendChild(a);
        } else {
            li.textContent = page;
        }
        breadcrumbs.appendChild(li);
    });
}

document.addEventListener('scroll', () => {
    const currentSection = Array.from(sections).find(section => {
        const rect = section.getBoundingClientRect();
        return rect.top >= 0 && rect.top < window.innerHeight;
    });

    // 現在表示されているセクションに基づいてパンくずリストを更新
    if (currentSection) {
        const sectionId = currentSection.id;
        const links = breadcrumbs.querySelectorAll('li a');
        links.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${sectionId}`) {
                link.classList.add('active');
            }
        });
    }
});

// 次のセクションに移動するためのボタンのイベントリスナー
const nextButton = document.querySelector('footer a');

nextButton.addEventListener('click', (event) => {
    event.preventDefault();
    const currentSection = Array.from(sections).find(section => section.getBoundingClientRect().top >= 0);
    if (currentSection) {
        const nextSection = currentSection.nextElementSibling;
        if (nextSection) {
            nextSection.scrollIntoView({ behavior: 'smooth' });
        }
    }
});
updateBreadcrumbs('現在のページ');
