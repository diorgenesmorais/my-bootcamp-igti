"use stric";
import { promises as fs } from "fs";

async function whichUf(uf) {
    try {
        const cities = JSON.parse(await fs.readFile(`./datas/${uf}.json`, 'utf-8'));
        console.log(cities.length);
    } catch (error) {
        console.error(error);
    }
}
whichUf(process.argv[2]);
