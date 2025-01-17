var url = window.location.pathname;
var filename = url.substring(url.lastIndexOf('/')+1);    
    
/*========== scroll sections active link ==========*/
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {

    if(filename!='veille.html'){
        console.log("yes")
        sections.forEach(sec => {
            let top = window.scrollY;
            let offset = sec.offsetTop - 150;
            let height = sec.offsetHeight;
            let id = sec.getAttribute('id');
    
            if (top >= offset && top < offset + height){
                navLinks.forEach(links => {
                    links.classList.remove('active');
                    document.querySelector('header nav a[href*=' + id +']').classList.add('active');
                })
            };
        });
    }
    

        /*========== sticky navbar ==========*/
let header = document.querySelector('.header');

header.classList.toggle('sticky',window.scrollY > 100);
};

    // Toggle the navbar
    const menuIcon = document.getElementById('menu-icon');
    const navbar = document.querySelector('.navbar');

    menuIcon.addEventListener('click', () => {
        navbar.classList.toggle('active'); // Toggle active class
    });

