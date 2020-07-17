(function() {
    document.querySelector('form').addEventListener('submit', (event) => event.preventDefault());

    const inputName = document.querySelector('#nome');

    function setFocus() {
        inputName.focus();
    }

    setFocus();
})();
