"use strict";
(function() {
    document.querySelector('form').addEventListener('submit', event => {
        event.preventDefault();
        handleInput();
    });
    let peoples = [];
    const inputSearch = document.querySelector('#inputSearch');
    let listOfFound = [];
    const divPeoples = document.querySelector('#peoples');

    async function init() {
        try {
            const response = await fetch('https://randomuser.me/api/?seed=javascript&results=100&nat=BR&noinfo')
            const data = await response.json();
            const list = [ ...data.results ];
            peoples = list.map(people => {
                const { name, picture, dob, gender } = people;
                return {
                    name: `${name.first} ${name.last}`,
                    picture: picture.thumbnail,
                    age: dob.age,
                    gender
                }
            });
            console.info('Total de peoples', peoples.length);
        } catch(err) {
            console.info('ERROR na requisição', err);
        }
    }
    init();

    function handleInput() {
        let texto = inputSearch.value;
        if (texto.trim().length !== 0) {
            listOfFound = searchName(texto.trim());
            console.log(listOfFound);
            render();
        }
    }

    function searchName(sample) {
        return peoples.filter(people => {
            return people.name.toUpperCase().includes(sample.toUpperCase());
        });
    }

    function renderSummary() {
        let h2TotalUsers = document.querySelector('section h2');
        h2TotalUsers.textContent = `${listOfFound.length} Usuário(s) encontrado(s)`;
    }

    function render() {
        renderSummary();
        let peoplesHTML = '';

        listOfFound.forEach(people => {
            const { name, picture, age, gender } = people;

            peoplesHTML += `
                <div class="people">
                    <div>
                        <img src="${picture}" alt="${name}" title="${name}">
                    </div>
                    <div>
                        <span>${name}, ${age} anos</span>
                    </div>
                </div>
            `;

        });

        divPeoples.innerHTML = peoplesHTML;
    }
})();