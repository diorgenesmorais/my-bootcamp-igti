"use strict";
(function() {
    const countCountCountries = document.querySelector('#countCountCountries');
    const totalPopulation = document.querySelector('#totalPopulation');
    const tabCountries = document.querySelector('#tabCountries');

    const countFavorites = document.querySelector('#countFavorites');
    const totalSelection = document.querySelector('#totalSelection');
    const tabFavorites = document.querySelector('#tabFavorites');

    let allCountries = [];

    async function init() {
        const res = await fetch('https://restcountries.eu/rest/v2/all');
        const list = await res.json();
        allCountries = list.map(country => {
            const { numericCode, translations: { pt }, population, flag } = country;
            return {
                id: numericCode,
                name: pt,
                population,
                flag
            }
        });
    }

    init();
})();
