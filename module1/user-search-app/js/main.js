"use strict";
(function() {
    document.querySelector('form').addEventListener('submit', event => {
        event.preventDefault();
        handleInput();
    });
    let peoples = [];
    const inputSearch = document.querySelector('#inputSearch');
    const btnSubmit = document.querySelector('button');
    let listOfFound = [];
    const divPeoples = document.querySelector('#peoples');
    const divStatistics = document.querySelector('#statistics');
    let numberFormat = Intl.NumberFormat('pt-BR', { maximumFractionDigits: 2 });

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
            console.info('Peoples', peoples);
        } catch(err) {
            console.info('ERROR na requisição', err);
        }
    }
    init();

    inputSearch.addEventListener('keyup', handleButton);

    function handleButton(event) {
        if (inputSearch.value.trim().length > 0) {
            btnSubmit.classList.remove('disabled');
        } else {
            btnSubmit.classList.add('disabled');
        }
    }

    function handleInput() {
        let texto = inputSearch.value;
        if (texto.trim().length !== 0) {
            listOfFound = searchName(texto.trim());
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

        let male = 0;
        let women = 0;
        let sumOfAges = 0;
        let avaregeAges = 0;

        male = listOfFound.filter(people => people.gender === 'male').length;
        women = listOfFound.filter(people => people.gender === 'female').length;
        sumOfAges = listOfFound.reduce((acc, curr) => {
            return acc + curr.age;
        }, 0);
        avaregeAges = numberFormat.format(sumOfAges / listOfFound.length);

        divStatistics.innerHTML = `
            <ul>
                <li>Sexo masculino: ${male}</li>
                <li>Sexo femilino: ${women}</li>
                <li>Soma das idade: ${sumOfAges}</li>
                <li>Média das idades: ${avaregeAges}</li>
            </ul>
        `;
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