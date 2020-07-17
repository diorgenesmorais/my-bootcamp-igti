(function() {
    document.querySelector('form').addEventListener('submit', (event) => event.preventDefault());

    const namesList = [];
    const inputName = document.querySelector('#nome');
    inputName.addEventListener('keyup', handleKey);
    const div = document.querySelector('.js-list');

    const acceptedActions = {
        Enter(name) {
            nameEntry(name);
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

    function nameEntry(name) {
        if (name.length !== 0) {
            namesList.push(name);
            clearInput();
            console.log(namesList);
            render();
        }
    }

    function render() {
        div.innerHTML = '';

        const ul = document.createElement('ul');

        function createDeleteButton(index) {
            let button = document.createElement('button');
            button.textContent = 'x';
            button.classList.add('deleteButton');

            return button;
        }

        namesList.forEach((name, index) => {
            const li = document.createElement('li');
            const span = document.createElement('span');
            span.textContent = name;
            li.appendChild(createDeleteButton(index));
            li.appendChild(span);
            ul.appendChild(li);
        });
        div.appendChild(ul);
    }
})();
