class MobileMenu {
    constructor(mobileMenu, list, listLinks) {
        this.mobileMenu = document.querySelector(mobileMenu);
        this.navList = document.querySelector(list);
        this.navLinks = document.querySelectorAll(listLinks);
        this.activeClass = "active";

        this.handleClick = this.handleClick.bind(this);
    }

    animateLinks() {
        this.navLinks.forEach((link, index) => {
            link.style.animation
                ? (link.style.animation = "")
                : (link.style.animation = `linksFade 0.5s ease forwards ${index / 7 + 0.3}s`);
        });
    }

    handleClick() {
        this.navList.classList.toggle(this.activeClass);
        this.animateLinks();
    }

    addClickEvent() {
        this.mobileMenu.addEventListener('click', this.handleClick);
    }

    init() {
        if (this.mobileMenu) {
            this.addClickEvent();
        }
        return this;
    }
}

const mobileNavBar = new MobileMenu(
    ".menu",
    ".list",
    ".list li"
);

mobileNavBar.init();
