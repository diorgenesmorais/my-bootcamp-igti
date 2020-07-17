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
    let status = 'add';
    let editIndex = null;
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

    const editName = {
        event: 'edit',
        action: function(data) {
            namesList[editIndex] = data;
            status = 'add';
        }
    }
    observable.subscribe(editName);

    function handleKey(event) {
        if (event.key === 'Enter') {
            let hasText = !!event.target.value && event.target.value.trim() !== '';
            if (!hasText) {
                clearInput();
                return;
            }
            observable.publish(status, event.target.value);
            clearInput();
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

        function createSpan(name, index) {
            function editItem() {
                inputName.value = name;
                status = 'edit'
                editIndex = index;
                setFocus();
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
