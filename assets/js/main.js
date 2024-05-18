///////  background pattern ///////
particlesJS("particles-js", {
    "particles": {
        "number": {
            "value": 400,
            "density": {
                "enable": true,
                "value_area": 800
            }
        },
        "color": {
            "value": "#1ffa93"
        },
        "shape": {
            "type": "circle",
            "stroke": {
                "width": 0,
                "color": "#000000"
            },
            "polygon": {
                "nb_sides": 5
            },
            "image": {
                "src": "img/github.svg",
                "width": 100,
                "height": 100
            }
        },
        "opacity": {
            "value": 0.5,
            "random": true,
            "anim": {
                "enable": false,
                "speed": 1,
                "opacity_min": 0.1,
                "sync": false
            }
        },
        "size": {
            "value": 10,
            "random": true,
            "anim": {
                "enable": false,
                "speed": 40,
                "size_min": 0.1,
                "sync": false
            }
        },
        "line_linked": {
            "enable": false,
            "distance": 500,
            "color": "#ffffff",
            "opacity": 0.4,
            "width": 2
        },
        "move": {
            "enable": true,
            "speed": 3,
            "direction": "bottom-right",
            "random": true,
            "straight": false,
            "out_mode": "bounce",
            "bounce": false,
            "attract": {
                "enable": false,
                "rotateX": 600,
                "rotateY": 1200
            }
        }
    },
    "interactivity": {
        "detect_on": "canvas",
        "events": {
            "onhover": {
                "enable": true,
                "mode": "bubble"
            },
            "onclick": {
                "enable": true,
                "mode": "repulse"
            },
            "resize": true
        },
        "modes": {
            "grab": {
                "distance": 400,
                "line_linked": {
                    "opacity": 0.5
                }
            },
            "bubble": {
                "distance": 400,
                "size": 4,
                "duration": 0.3,
                "opacity": 1,
                "speed": 3
            },
            "repulse": {
                "distance": 200,
                "duration": 0.4
            },
            "push": {
                "particles_nb": 4
            },
            "remove": {
                "particles_nb": 2
            }
        }
    },
    "retina_detect": true
});
let count_particles, update;

// این قسمت به عنوان یک نمایشگر آمار عملکرد مورد استفاده قرار میگیرد
// stats = new Stats;
// stats.setMode(0);
// stats.domElement.style.position = 'absolute';
// stats.domElement.style.left = '0px';
// stats.domElement.style.top = '0px';
// document.body.appendChild(stats.domElement);
// count_particles = document.querySelector('.js-count-particles');
// update = function () {
//     stats.begin();
//     stats.end();
//     if (window.pJSDom[0].pJS.particles && window.pJSDom[0].pJS.particles.array) {
//         count_particles.innerText = window.pJSDom[0].pJS.particles.array.length;
//     }
//     requestAnimationFrame(update);
// };
// requestAnimationFrame(update);


/////// loader \\\\\\\
const closeIconLoader = document.querySelector('.loader svg');
document.addEventListener('DOMContentLoaded', () => {
    const body = document.querySelector('body');
    setTimeout(() => {
        body.classList.add('active-loader');
        closeIconLoader.addEventListener('click', () => {
            body.classList.remove('active-loader');
            setTimeout(() => {
                revealStart();
            }, 1000);
        })
    }, 1000);
    setTimeout(() => {
        body.classList.remove('active-loader');
    }, 10000);
})

/////// reveal and active elements \\\\\\\
function revealStart() {
    const reveals = document.querySelectorAll(".reveal-top, .reveal-right, .reveal-left");
    let i = 0;

    function revealNext() {
        if (i < reveals.length) {
            var windowHeight = window.innerHeight;
            var elementTop = reveals[i].getBoundingClientRect().top;
            var elementVisible = 70;

            if (elementTop < windowHeight - elementVisible) {
                if (reveals[i].className.includes('reveal-top')) {
                    reveals[i].classList.add("active-top");
                } else if (reveals[i].className.includes('reveal-righ')) {
                    reveals[i].classList.add('active-right')
                } else if (reveals[i].className.includes('reveal-left')) {
                    reveals[i].classList.add('active-left');
                }
            } else {
                reveals[i].classList.remove("active");
            }
            i++;
            setTimeout(revealNext, 100); // انتظار 1 ثانیه قبل از اجرای حلقه بعدی
        }

    }
    revealNext(); // شروع اجرای حلقه
}

function reveal() {
    const reveals = document.querySelectorAll(".reveal-top, .reveal-right, .reveal-left");

    for (let i = 0; i < reveals.length; i++) {
        var windowHeight = window.innerHeight;
        var elementTop = reveals[i].getBoundingClientRect().top;
        var elementVisible = 35;

        if (elementTop < windowHeight - elementVisible) {
            if (reveals[i].className.includes('reveal-top')) {
                reveals[i].classList.add("active-top");
            } else if (reveals[i].className.includes('reveal-righ')) {
                reveals[i].classList.add('active-right')
            } else if (reveals[i].className.includes('reveal-left')) {
                reveals[i].classList.add('active-left');
            }
        } else {
            if (reveals[i].className.includes('reveal-top')) {
                reveals[i].classList.remove("active-top");
            } else if (reveals[i].className.includes('reveal-righ')) {
                reveals[i].classList.remove('active-right')
            } else if (reveals[i].className.includes('reveal-left')) {
                reveals[i].classList.remove('active-left');
            }
        }
    }
}


window.addEventListener("scroll", () => {
    if (document.body.className == 'loader-active') {
        setTimeout(() => {
            revealStart();
        }, 10000);
    } else {
        reveal();
    }
});
window.addEventListener("DOMContentLoaded", () => {
    setTimeout(() => {
        revealStart();
    }, 11000);
});

/////// navbar and title on top of the page ///////
function selectMenu(ev) {
    const titleNav = document.querySelector('.title-menu');
    const titleNavH1 = document.querySelector('.title-menu h1');
    const activeli = document.querySelector('nav ul li.active');
    if (ev.type == 'click') {
        const navli = ev.currentTarget.parentElement;

        if (ev.target.innerText !== titleNavH1.innerText) {
            activeli.classList.remove('active');
            setTimeout(() => {
                navli.classList.add('active');

            }, 400);
            titleNav.classList.add('hide');
        }

        setTimeout(() => {
            titleNavH1.innerText = ev.target.innerText;
            titleNav.classList.remove('hide');
        }, 700);
        observerActive = false;
        setTimeout(() => {
            // برای فعال کردن observer دوباره
            observerActive = true;
        }, 1000);
    } else {
        if (ev.type == 'click') {

        }
        const target = ev.target.id;
        let thisLi;

        if (document.querySelector('.nav-list .active')) {
            activeli.classList.remove('active');
        }
        menu.classList.add('hover');
        switch (target) {
            case 'about-me':
                thisLi = document.querySelector('.about-me-li');
                thisLi.classList.add('active');
                titleNavH1.innerText = thisLi.innerText;
                titleMenu.classList.remove('hide-title-menu');
                break;
            case 'skills':
                thisLi = document.querySelector('.skills-li');
                thisLi.classList.add('active');
                titleNavH1.innerText = thisLi.innerText;
                titleMenu.classList.remove('hide-title-menu');
                break;
            case 'portfolio':
                thisLi = document.querySelector('.portfolio-li');
                thisLi.classList.add('active');
                titleNavH1.innerText = thisLi.innerText;
                titleMenu.classList.remove('hide-title-menu');
                break;
            case 'contact-me':
                thisLi = document.querySelector('.contact-me-li');
                thisLi.classList.add('active');
                titleNavH1.innerText = thisLi.innerText;
                titleMenu.classList.remove('hide-title-menu');
                break;

            default:
                break;

        }
    }
}

// Hide and show title of navbar when Scroll
let prevScrollPos = window.pageYOffset;
let titleMenu = document.querySelector(".title-menu");
let initialShowThreshold = 150;
window.onscroll = function () {
    let currentScrollPos = window.pageYOffset;

    if (currentScrollPos <= initialShowThreshold) {
        titleMenu.classList.remove("hide-title-menu");
    } else if (prevScrollPos > currentScrollPos) {
        titleMenu.classList.remove("hide-title-menu");
    } else {
        titleMenu.classList.add("hide-title-menu");
    }

    prevScrollPos = currentScrollPos;
};

const emptySocialMedia = document.querySelectorAll('.card[title="it is empty"]');
emptySocialMedia.forEach(item => {
    item.addEventListener('click', () => {
        if (!document.querySelector('.alert')) {
            const alert = document.createElement('div');
            alert.setAttribute('class', 'alert');
            alert.innerText = "من هنوز در این پلتفرم حساب ندارم :)";
            document.body.insertBefore(alert, document.body.firstChild);

            setTimeout(() => {
                alert.classList.add('active');
            }, 300);

            const removeAlert = setTimeout(() => {
                alert.classList.remove('active');
                setTimeout(() => {
                    alert.remove();
                }, 1000);
                clearTimeout(removeAlert);
            }, 5000);
        }
    })
})


const firstBoxSkills = document.querySelectorAll('.box-skills');
const boxSkills = Array.from(firstBoxSkills).filter(item => !item.classList.contains('disabled'));
// حذف عناصری که کلاس disabled را دارند
boxSkills.forEach(box => {
    box.addEventListener('click', () => {
        box.classList.toggle('active-sub-box');
    })
});


/////// change li menu when scroll \\\\\\\
// انتخاب المان منو
const menu = document.querySelector('.nav-list');
let observerActive = true;

// تعریف تنظیمات برای IntersectionObserver
const observerOptions = {
    root: null, // null به معنای مشاهده فریم مرورگر است
    rootMargin: '0px', // حاشیه اضافی اضافه شده به حاشیه مشاهده‌کننده
    threshold: 0.5 // نسبت المان مشاهده شده به کل المان
};

// تعریف مشاهده‌کننده
const observer = new IntersectionObserver((entries, observer) => {
    if (!observerActive) return;
    entries.forEach(entry => {
        // اگر المان وارد شده مشاهده شده باشد
        if (entry.isIntersecting) {
            selectMenu(entry);
        }
    })
}, observerOptions);

// اعمال مشاهده‌کننده بر روی المنو
const about_me = document.querySelector('#about-me');
const skills = document.querySelector('#skills');
const portfolio = document.querySelector('#portfolio');
const contactMe = document.querySelector('#contact-me');
observer.observe(about_me);
observer.observe(skills);
observer.observe(portfolio);
observer.observe(contactMe);