(function() {
    document.querySelector('form').addEventListener('submit', (event) => event.preventDefault());

    const namesList = [];
    const inputName = document.querySelector('#nome');
    inputName.addEventListener('keyup', handleKey);
    const div = document.querySelector('.js-list');
    let isEditing = false;

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
            isEditing = false;
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

        function createSpan(name) {
            function updateName() {
                inputName.value = name;
                isEditing = true;
                setFocus();
            }
            const span = document.createElement('span');
            span.textContent = name;
            span.classList.add('clickable');

            span.addEventListener('click', updateName);
            return span;
        }

        namesList.forEach((name, index) => {
            const li = document.createElement('li');

            li.appendChild(createDeleteButton(index));
            li.appendChild(createSpan(name));
            ul.appendChild(li);
        });
        div.appendChild(ul);
    }
})();
