"use script";
import { promises as fs, stat } from "fs";

(async function() {
    let states = [];
    let cities = [];
    let citiesWithUF = [];

    async function init() {
        try {
            states = JSON.parse(await fs.readFile('./datas/Estados.json', 'utf-8'));
            cities = JSON.parse(await fs.readFile('./datas/Cidades.json', 'utf-8'));
            citiesWithUF = cities.map(city => {
                return { ...city, UF: states.find(uf => city.Estado === uf.ID).Sigla }
            });
        } catch (error) {
            console.error(error);
        }
    }

    function listStatesWithTotalCities() {
        return states.map(state => {
            const UF = state.Sigla;
            const totalCities = citiesWithUF.filter(city => city.UF === UF)
                                        .length;
            return { 
                UF,
                totalCities
            }
        }).sort((a, b) => b.totalCities - a.totalCities);
    }

    function listFiveStatesWithMoresCities() {
        const countCitiesForStates = listStatesWithTotalCities().slice(0, 5).map(uf => {
            return `${uf.UF} - ${uf.totalCities}`;
        });
        console.log('Estados com mais cidades:', countCitiesForStates);
    }

    function listFiveStatesWithMinorsCities() {
        const countCitiesForStates = listStatesWithTotalCities().slice(-5).map(uf => {
            return `${uf.UF} - ${uf.totalCities}`;
        });
        console.log('Estados com menos cidades:', countCitiesForStates);
    }

    function cityBiggestForState() {
        const list = states.map(state => {
            const cities = citiesWithUF.filter(city => city.UF === state.Sigla)
                                    .sort((a, b) => b.Nome.length - a.Nome.length);
            return {
                city: cities[0].Nome,
                UF: state.Sigla
            }
        });
        list.sort((a, b) => a.city.localeCompare(b.city))
                .sort((a, b) => b.city.length - a.city.length);
        console.log(list.map(state => `${state.city} - ${state.UF}`));
    }

    function citiesWithMinorsNames() {
        const list = states.map(state => {
            const cities = citiesWithUF.filter(city => city.UF === state.Sigla)
                                    .sort((a, b) => a.Nome.length - b.Nome.length);
            return {
                city: cities[0].Nome,
                UF: state.Sigla
            }
        });
        list.sort((a, b) => a.city.localeCompare(b.city))
                .sort((a, b) => a.city.length - b.city.length);
        console.log(list.map(state => `${state.city} - ${state.UF}`));
    }

    await init();

    listFiveStatesWithMoresCities();

    listFiveStatesWithMinorsCities();

    cityBiggestForState();

    citiesWithMinorsNames();
})();