document.addEventListener("DOMContentLoaded", () => {

    const sidebar =
        document.getElementById("sidebar");

    const menuButton =
        document.getElementById("menuButton");

    const navigationItems =
        document.querySelectorAll(
            ".navigation-item"
        );

    const sections =
        document.querySelectorAll(
            ".section-target"
        );

    const progressBar =
        document.getElementById(
            "progressBar"
        );

    const progressText =
        document.getElementById(
            "progressText"
        );

    if (menuButton && sidebar) {

        menuButton.addEventListener(
            "click",
            () => {

                sidebar.classList.toggle(
                    "open"
                );

            }
        );

    }

    navigationItems.forEach(item => {

        item.addEventListener(
            "click",
            () => {

                navigationItems.forEach(
                    nav => {

                        nav.classList.remove(
                            "active"
                        );

                    }
                );

                item.classList.add(
                    "active"
                );

                if (
                    window.innerWidth <= 850 &&
                    sidebar
                ) {

                    sidebar.classList.remove(
                        "open"
                    );

                }

            }
        );

    });

    function updateNavigation() {

        const position =
            window.scrollY + 220;

        sections.forEach(section => {

            const top =
                section.offsetTop;

            const bottom =
                top +
                section.offsetHeight;

            const id =
                section.getAttribute("id");

            if (
                position >= top &&
                position < bottom
            ) {

                navigationItems.forEach(
                    item => {

                        item.classList.remove(
                            "active"
                        );

                    }
                );

                const active =
                    document.querySelector(
                        `.navigation-item[href="#${id}"]`
                    );

                if (active) {

                    active.classList.add(
                        "active"
                    );

                }

            }

        });

    }

    window.addEventListener(
        "scroll",
        updateNavigation
    );

    function updateProgress() {

        const scrollTop =
            window.scrollY;

        const documentHeight =
            document.documentElement
                .scrollHeight -
            window.innerHeight;

        if (documentHeight <= 0) {
            return;
        }

        const percentage =
            Math.round(
                (scrollTop / documentHeight) * 100
            );

        const limited =
            Math.min(
                100,
                Math.max(0, percentage)
            );

        if (progressBar) {

            progressBar.style.width =
                `${limited}%`;

        }

        if (progressText) {

            progressText.textContent =
                `${limited}%`;

        }

    }

    window.addEventListener(
        "scroll",
        updateProgress
    );

    updateProgress();

    document.querySelectorAll(
        'a[href^="#"]'
    ).forEach(link => {

        link.addEventListener(
            "click",
            event => {

                const targetId =
                    link.getAttribute(
                        "href"
                    );

                if (
                    !targetId ||
                    targetId === "#"
                ) {

                    return;

                }

                const target =
                    document.querySelector(
                        targetId
                    );

                if (!target) {

                    return;

                }

                event.preventDefault();

                const offset =
                    window.innerWidth <= 850
                    ? 75
                    : 20;

                const targetPosition =
                    target.offsetTop -
                    offset;

                window.scrollTo({

                    top:
                        targetPosition,

                    behavior:
                        "smooth"

                });

            }
        );

    });

    const heroCard =
        document.querySelector(
            ".main-js-card"
        );

    if (heroCard) {

        document.addEventListener(
            "mousemove",
            event => {

                if (
                    window.innerWidth <= 850
                ) {

                    return;

                }

                const x =
                    (
                        window.innerWidth / 2 -
                        event.clientX
                    ) / 90;

                const y =
                    (
                        window.innerHeight / 2 -
                        event.clientY
                    ) / 90;

                heroCard.style.transform =
                    `rotate(-3deg)
                     translate(${x}px, ${y}px)`;

            }
        );

    }

    console.log(
        "%c JS//LAB ",
        "background:#7CFC00;color:#080a08;font-weight:900;padding:6px 10px;"
    );

    console.log(
        "JavaScript Tutorial loaded successfully."
    );

});