const breadcrumbs = document.getElementById('breadcrumbs');
const sections = document.querySelectorAll('main h2');

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
// aside
document.addEventListener('scroll', () => {
    const currentSection = Array.from(sections).find(section => {
        const rect = section.getBoundingClientRect();
        return rect.top >= 0 && rect.top < window.innerHeight;
    });
    // セクション更新
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
// ここ消すと、asideが崩れる
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
