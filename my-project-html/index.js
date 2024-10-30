
function copyToClipboard(codeId) {
    const codeElement = document.getElementById(codeId);
    const codeText = codeElement.innerText || codeElement.textContent;
    navigator.clipboard.writeText(codeText).then(() => {
        alert('コードをコピーしました！')
    }).catch(err => {
        console.error('コピーに失敗しました。: ', err);
    });
}

// 現在のページに基づいて足跡を更新する関数
function updateBreadcrumbs(currentPage) {
    breadcrumbs.innerHTML = ''; // リストをクリア
    const pages = ['ホーム', 'カテゴリ', currentPage];

    pages.forEach((page, index) => {
        const li = document.createElement('li');
        if (index < pages.length - 1) {
            const a = document.createElement('a');
            a.href = index === 0 ? 'home.html' : 'category.html'; // 適切なURLに変更
            a.textContent = page;
            li.appendChild(a);
        } else {
            li.textContent = page; // 現在のページはリンクなし
        }
        breadcrumbs.appendChild(li);
    });
}
document.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('main h2');
    const breadcrumbs = document.getElementById('breadcrumbs');
    const currentSection = Array.from(sections).find(section => {
        const rect = section.getBoundingClientRect();
        return rect.top >= 0 && rect.top < window.innerHeight;
    });

    // 現在のセクションがあれば足跡を更新
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


// 現在のページを指定して呼び出す
updateBreadcrumbs('現在のページ');
