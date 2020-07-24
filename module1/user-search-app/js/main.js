"use strict";
(function() {
    let peoples = [];
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

})();