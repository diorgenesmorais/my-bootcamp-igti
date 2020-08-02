"use strict";
import { promises as fs } from "fs";

async function createGroup() {
    try {
        const ufs = JSON.parse(await fs.readFile('./datas/Estados.json', 'utf-8'));
        const cities = JSON.parse(await fs.readFile('./datas/Cidades.json', 'utf-8'));
        const citiesMap = cities.map(city => {
            return { ...city, UF: ufs.find(uf => city.Estado === uf.ID).Sigla};
        });
        ufs.forEach(uf => {
            const citiesFiltered = citiesMap.filter(city => {
                return city.Estado === uf.ID;
            });
            fs.writeFile(`./datas/${uf.Sigla}.json`, JSON.stringify(citiesFiltered));
        });
    } catch (error) {
        console.error(error);
    }
}

export default createGroup;
