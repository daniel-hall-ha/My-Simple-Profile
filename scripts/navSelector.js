navs = document.querySelectorAll('#navigation ul li');

navs.forEach(nav => {
    nav.addEventListener('click', () => {
        navs.forEach(inactive => inactive.classList.remove('active-tab'));
        nav.classList.add('active-tab');
    })
})