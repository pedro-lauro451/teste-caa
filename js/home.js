document.addEventListener('DOMContentLoaded', function () {
    fetch('default/header.html')
        .then(response => response.text())
        .then(data => {
            document.querySelector('header').innerHTML = data;

            const headerText = document.querySelector('#header-text');
            headerText.innerText = 'Especialistas em negócios e plataformas de tecnologia de CX';
            document.getElementById("header-buttons").style.display = "flex";

            changeImage();

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

            const scrolledNavbarDiv = document.getElementById('scrolled-navbar');
            window.addEventListener('scroll', function () {
                if (window.scrollY > 0) {
                    scrolledNavbarDiv.classList.add('scrolled-navbar');
                } else {
                    scrolledNavbarDiv.classList.remove('scrolled-navbar');
                }
            });
        });

    fetch('default/footer.html')
        .then(response => response.text())
        .then(data => {
            document.querySelector('footer').innerHTML = data;
        });

    if (window.innerWidth > 991) {
        document.querySelector(".icon-circle").style.padding = "20.5px 25px";
    } else {
        document.querySelector(".icon-circle").style.padding = "18px 22px";
    }
});

const images = [
    '../images/home-main-banner1.jpeg',
    '../images/home-main-banner2.jpeg',
    '../images/home-main-banner3.jpeg'
];

const texts = [
    'Especialistas em negócios e plataformas de tecnologia de CX',
    '10 Most Promising Digital Experience Solutions Provider In Latin America',
    'Oracle CX Partner Of The Year'
];

const buttons = [
    'entenda mais',
    'descubra mais',
    'fale conosco'
];

const links = [
    '../contato.html',
    '../contato.html',
    '../contato.html'
];

let index = 0;

function changeImage() {
    document.getElementById('header').style.backgroundImage = `url(${images[index]})`;
    document.getElementById('header-text').innerText = texts[index];

    const button = document.getElementById('header-buttons');
    button.innerText = buttons[index];
    button.setAttribute('href', links[index]);

    index = (index + 1) % images.length;

    if (buttons[index] === 'entenda mais') {
        if (window.innerWidth > 1600) {
            document.getElementById('header-buttons').style.top = '56%';
        } else {
            document.getElementById('header-buttons').style.top = '60%';
        }
    } else {
        if (window.innerWidth > 1600) {
            document.getElementById('header-buttons').style.top = '61%';
        } else {
            document.getElementById('header-buttons').style.top = '65%';
        }
    }
}

setInterval(changeImage, 5000);
