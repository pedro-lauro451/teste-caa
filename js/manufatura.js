document.addEventListener('DOMContentLoaded', function () {
    fetch('default/header.html')
        .then(response => response.text())
        .then(data => {
            document.querySelector('header').innerHTML = data;

            const headerText = document.querySelector('#header-text');
            headerText.innerText = 'Manufatura';
            const image = document.getElementById('header');
            image.style.backgroundImage = `url(../images/manufatura-main-banner.jpeg)`
            document.getElementById("header-buttons").style.display = "none";

            const closeMenu = document.querySelector('.close-menu');
            const linksHeader = document.querySelector('.links-header');
            const toggleNavbar = document.getElementById('navbarToggle');
            document.getElementById('shade').style.display = "none";

            toggleNavbar.addEventListener('click', function () {
                document.getElementById('shade').style.display = "block";
            });

            closeMenu.addEventListener('click', function () {
                linksHeader.classList.remove('show');
                document.getElementById('shade').style.display = "none";
            });

            // collapse header
            const collapseBtn = document.getElementById('collapseBtn');
            const collapseContent = document.getElementById('collapseContent');
            const setaImg = document.getElementById('setaImg');

            collapseBtn.addEventListener('click', function () {
                collapseContent.classList.toggle('show');
                collapseBtn.classList.toggle('collapsed');

                if (setaImg.getAttribute('src') === '../images/seta-on.png') {
                    setaImg.setAttribute('src', '../images/seta-off.png');
                } else {
                    setaImg.setAttribute('src', '../images/seta-on.png');
                }
            });

            document.addEventListener('click', function (event) {
                if (!event.target.closest('.custom-collapse')) {
                    collapseContent.classList.remove('show');
                    collapseBtn.classList.remove('collapsed');

                    if (setaImg.getAttribute('src') === '../images/seta-off.png') {
                        setaImg.setAttribute('src', '../images/seta-on.png');
                    }
                }
            });
        });

    fetch('default/footer.html')
        .then(response => response.text())
        .then(data => {
            document.querySelector('footer').innerHTML = data;
        });
});