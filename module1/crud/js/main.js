(function() {
    document.querySelector('form').addEventListener('submit', (event) => event.preventDefault());

    const namesList = [];
    const inputName = document.querySelector('#nome');
    inputName.addEventListener('keyup', handleKey);

    const acceptedActions = {
        Enter(name) {
            addNames(name);
        }
    }

    function setFocus() {
        inputName.focus();
    }

    function clearInput() {
        inputName.value = '';
    }

    setFocus();

    function handleKey(event) {
        const action = acceptedActions[event.key];
        if (action) {
            action(event.target.value);
        }
    }

    function addNames(name) {
        namesList.push(name);
        clearInput();
        console.log(namesList);
    }
})();
