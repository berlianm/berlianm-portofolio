document.addEventListener('DOMContentLoaded', function () {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-link');
    const navbarHeight = document.querySelector('.navbar').offsetHeight;

    function onScroll() {
        let scrollPos = window.scrollY || document.documentElement.scrollTop || document.body.scrollTop;

        sections.forEach((section, index) => {
            if (scrollPos >= section.offsetTop - navbarHeight && scrollPos < section.offsetTop + section.offsetHeight - navbarHeight) {
                navLinks.forEach(link => link.classList.remove('highlight'));
                navLinks[index].classList.add('highlight');
            }
        });
    }

    window.addEventListener('scroll', onScroll);

    // Trigger the scroll event initially to highlight the correct link
    onScroll();
});