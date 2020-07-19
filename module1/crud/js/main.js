"use strict";
const Observer = (function() {
    function Observer() {
        this.subscribes = [];
    }

    Observer.prototype = {
        subscribe: function(subscriber) {
            this.subscribes.push(subscriber);
        },
        unsubscribe: function(registered) {
            let index = this.subscribes.indexOf(registered);
            this.subscribes.splice(index, 1);
        },
        publish: function(event, data) {
            this.subscribes
                        .filter(subscriber => subscriber.event === event)
                        .forEach(subscriber => subscriber.action(data));
        }
    }

    return Observer;
}());

(function() {
    document.querySelector('form').addEventListener('submit', (event) => event.preventDefault());

    const namesList = [];
    const inputName = document.querySelector('#nome');
    inputName.addEventListener('keyup', handleKey);
    const div = document.querySelector('.js-list');
    const add = 'add', edit = 'edit';
    let currentMode = add;
    const observable = new Observer();

    function setFocus() {
        inputName.focus();
    }
    
    function clearInput() {
        inputName.value = '';
    }
    
    setFocus();

    const addName = {
        event: 'add',
        action: function(name) {
            namesList.push(name);
        }
    }
    observable.subscribe(addName);

    function handleKey(event) {
        if (event.key === 'Enter') {
            let hasText = !!event.target.value && event.target.value.trim() !== '';
            if (!hasText) {
                clearInput();
                return;
            }
            observable.publish(currentMode, event.target.value);
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
                currentMode = edit
                setFocus();
                const editName = {
                    event: 'edit',
                    action: function(data) {
                        namesList[index] = data;
                        currentMode = add;
                        observable.unsubscribe(this);
                    }
                }
                observable.subscribe(editName);
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
})();
