const btn_Header = document.querySelector('#btn-headerMobile');
const headerPanel = document.querySelector('#header_Mobile');
let open = false;
btn_Header.addEventListener('click', () => {
    open = !open;
    headerPanel.style.maxHeight = open ? headerPanel.scrollHeight + 'px' : '0px';
    btn_Header.setAttribute('aria-expanded', String(open));
});

document.querySelector('#year').textContent = new Date().getFullYear();

// Filtro de proyectos
const buttons = document.querySelectorAll('.filter-btn');
const cards = document.querySelectorAll('#gridProjects .card');
buttons.forEach(btn => {
    btn.addEventListener('click', () => {
        buttons.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        const type = btn.dataset.filter;
        cards.forEach(card => {
            const show = type === 'all' || card.dataset.type === type;
            card.style.display = show ? '' : 'none';
        });
    });
});