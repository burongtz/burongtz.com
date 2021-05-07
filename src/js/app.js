const toggleTheMenu = () => {
    const theMenu = document.querySelector('#the-menu');
    const theMenuToggler = document.querySelector('#the-menu-toggler');

    if (theMenu == null || theMenuToggler == null) {
        return;
    }

    theMenuToggler.addEventListener(
        'click',
        () => theMenu.classList.toggle('d-block'),
        false
    );
};

(function () {
    toggleTheMenu();
})();
