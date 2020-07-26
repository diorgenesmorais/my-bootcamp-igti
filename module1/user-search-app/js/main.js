"use strict";
(function() {
    document.querySelector('form').addEventListener('submit', event => {
        event.preventDefault();
        handleInput();
    });
    let peoples = [];
    const inputSearch = document.querySelector('#inputSearch');
    let listOfFound = [];

    async function init() {
        try {
            const response = await fetch('https://randomuser.me/api/?seed=javascript&results=100&nat=BR&noinfo')
            const data = await response.json();
            const list = [ ...data.results ];
            peoples = list.map(people => {
                const { name, picture, dob, gender } = people;
                return {
                    name: `${name.first} ${name.last}`,
                    picture,
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
        }
    }

    function searchName(sample) {
        return peoples.filter(people => {
            return people.name.toUpperCase().includes(sample.toUpperCase());
        });
    }
})();