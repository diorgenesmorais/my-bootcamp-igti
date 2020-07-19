"use strict";
(function() {
    document.querySelector('form').addEventListener('submit', (event) => event.preventDefault());

    const namesList = [];
    const inputName = document.querySelector('#nome');
    inputName.addEventListener('keyup', handleKey);
    const div = document.querySelector('.js-list');
    let currentMode = {};

    function changeCurrentMode(current) {
        currentMode = current;
    }

    function setFocus() {
        inputName.focus();
    }
    
    function clearInput() {
        inputName.value = '';
    }

    const addName = {
        action: function(name) {
            namesList.push(name);
        }
    }

    function handleKey(event) {
        if (event.key === 'Enter') {
            if (event.target.value.trim().length === 0) {
                clearInput();
                return;
            }
            currentMode.action(event.target.value);
            clearInput();
            render();
        }
    }

    function render() {
        div.innerHTML = '';

        const ul = document.createElement('ul');

        function createDeleteButton(index) {
            function deleteItem() {
                namesList.splice(index, 1);
                render();
            }
            let button = document.createElement('button');
            button.textContent = 'x';
            button.classList.add('deleteButton');
            button.addEventListener('click', deleteItem);

            return button;
        }

        function createSpan(name, index) {
            function editItem() {
                inputName.value = name;
                setFocus();
                const editName = {
                    action: function(data) {
                        namesList[index] = data;
                        changeCurrentMode(addName);
                    }
                }
                currentMode = editName;
            }
            const span = document.createElement('span');
            span.textContent = name;
            span.classList.add('clickable');

            span.addEventListener('click', editItem);
            return span;
        }

        namesList.forEach((name, index) => {
            const li = document.createElement('li');

            li.appendChild(createDeleteButton(index));
            li.appendChild(createSpan(name, index));
            ul.appendChild(li);
        });
        div.appendChild(ul);
    }

    setFocus();
    changeCurrentMode(addName);
})();
