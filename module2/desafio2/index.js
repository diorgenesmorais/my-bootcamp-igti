"use stric";
import readLine from "readline";
import em from "./src/events.js";

const rl = readLine.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Digite qual evento quer executar:', event => {
    if (event) {
        em.emit(event);
    }
    rl.close();
});
