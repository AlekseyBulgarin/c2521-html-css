// ===============================
// ПОЯВЛЕНИЕ СЕКЦИЙ ПРИ СКРОЛЛЕ
// ===============================

const sections = document.querySelectorAll(
    ".section, .world, .final"
);

const observer = new IntersectionObserver(
    function (entries) {

        entries.forEach(function (entry) {

            if (entry.isIntersecting) {

                entry.target.classList.add("animate");

                observer.unobserve(entry.target);

            }

        });

    },
    {
        threshold: 0.1
    }
);

sections.forEach(function (section) {

    observer.observe(section);

});

// ===============================
// АНИМАЦИЯ ЧИСЕЛ
// ===============================

const numbers = document.querySelectorAll(
    "[data-number]"
);


const numberObserver = new IntersectionObserver(

    function (entries) {

        entries.forEach(function (entry) {

            if (!entry.isIntersecting) {
                return;
            }


            const element = entry.target;

            const target = Number(
                element.dataset.number
            );

            let current = 0;


            const speed = target / 60;


            const counter = setInterval(function () {

                current += speed;


                if (current >= target) {

                    current = target;

                    clearInterval(counter);

                }


                element.textContent =
                    Math.floor(current);

            }, 20);


            numberObserver.unobserve(element);

        });

    },

    {
        threshold: 0.7
    }

);


numbers.forEach(function (number) {

    numberObserver.observe(number);

});


// ===============================
// ЭФФЕКТ НА КНОПКАХ
// ===============================

const buttons = document.querySelectorAll(
    "button"
);


buttons.forEach(function (button) {

    button.addEventListener(
        "mouseenter",
        function () {

            button.style.transform =
                "translateY(-4px)";

        }
    );


    button.addEventListener(
        "mouseleave",
        function () {

            button.style.transform =
                "translateY(0)";

        }
    );

});


// ===============================
// ПАРАЛЛАКС ЭФФЕКТ
// ===============================

const gameCard =
    document.querySelector(".game-card");


document.addEventListener(
    "mousemove",
    function (event) {

        if (!gameCard) {
            return;
        }


        const x =
            (window.innerWidth / 2 - event.clientX)
            / 40;


        const y =
            (window.innerHeight / 2 - event.clientY)
            / 40;


        gameCard.style.transform =
            `rotate(6deg) translate(${x}px, ${y}px)`;

    }
);


// ===============================
// КНОПКА PLAY NOW
// ===============================

const playButtons =
    document.querySelectorAll(".main-button");


playButtons.forEach(function (button) {

    button.addEventListener(
        "click",
        function () {

            alert(
                "Добро пожаловать в NEXUS! 🚀"
            );

        }
    );const playButtons =
    document.querySelectorAll(".main-button");

playButtons.forEach(function (button) {

    button.addEventListener("click", function () {

        button.textContent = "WELCOME TO NEXUS";

        setTimeout(function () {

            button.textContent = "ИГРАТЬ СЕЙЧАС";

        }, 2000);

    });

});

});


// ===============================
// NAVIGATION BUTTON
// ===============================

const navButton =
    document.querySelector(".nav-button");


if (navButton) {

    navButton.addEventListener(
        "click",
        function () {

            document
                .querySelector("#game")
                .scrollIntoView({
                    behavior: "smooth"
                });

        }
    );

}