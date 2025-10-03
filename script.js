const btn_Header = document.querySelector('#btn-headerMobile');
const headerPanel = document.querySelector('#header_Mobile');
let open = false;

btn_Header.addEventListener('click', () => {
    open = !open;
    headerPanel.style.maxHeight = open ? headerPanel.scrollHeight + 'px' : '0px';
    btn_Header.setAttribute('aria-expanded', String(open));
});

const headerLinks = headerPanel.querySelectorAll('a');
headerLinks.forEach(link => {
    link.addEventListener('click', () => {
        open = false;
        headerPanel.style.maxHeight = '0px';
        btn_Header.setAttribute('aria-expanded', 'false');
    });
});

document.querySelector('#year').textContent = new Date().getFullYear();

document.addEventListener("DOMContentLoaded", () => {
    const filterBtns = document.querySelectorAll(".filter-btn");
    const projects = document.querySelectorAll("#gridProjects > *");

    filterBtns.forEach(btn => {
        btn.addEventListener("click", () => {
            filterBtns.forEach(b => b.classList.remove("active", "border-green-500/60"));
            btn.classList.add("active", "border-green-500/60");

            const filter = btn.dataset.filter;

            projects.forEach(project => {
                if (filter === "all" || project.dataset.type === filter) {
                    project.style.display = "block";
                } else {
                    project.style.display = "none";
                }
            });
        });
    });
});