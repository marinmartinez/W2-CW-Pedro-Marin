import { Celula } from "./celula.js";
export class Tablero {
    constructor() {
        this.tablero = [
            [
                new Celula(),
                new Celula(),
                new Celula("*"),
                new Celula(),
                new Celula("*"),
                new Celula(),
                new Celula("*"),
                new Celula(),
                new Celula(),
            ],
            [
                new Celula("*"),
                new Celula("*"),
                new Celula("*"),
                new Celula("*"),
                new Celula("*"),
                new Celula("*"),
                new Celula("*"),
                new Celula("*"),
                new Celula("*"),
            ],
            [
                new Celula(),
                new Celula(),
                new Celula(),
                new Celula("*"),
                new Celula(),
                new Celula(),
                new Celula("*"),
                new Celula(),
                new Celula("*"),
            ],
            [
                new Celula(),
                new Celula(),
                new Celula("*"),
                new Celula(),
                new Celula(),
                new Celula("*"),
                new Celula(),
                new Celula("*"),
                new Celula(),
            ],
            [
                new Celula(),
                new Celula("*"),
                new Celula(),
                new Celula("*"),
                new Celula(),
                new Celula("*"),
                new Celula(),
                new Celula("*"),
                new Celula(),
            ],
            [
                new Celula("*"),
                new Celula(),
                new Celula("*"),
                new Celula(),
                new Celula("*"),
                new Celula(),
                new Celula("*"),
                new Celula(),
                new Celula(),
            ],
            [
                new Celula(),
                new Celula(),
                new Celula(),
                new Celula(),
                new Celula(),
                new Celula(),
                new Celula(),
                new Celula(),
                new Celula("*"),
            ],
            [
                new Celula("*"),
                new Celula(),
                new Celula(),
                new Celula("*"),
                new Celula(),
                new Celula("*"),
                new Celula(),
                new Celula("*"),
                new Celula("*"),
            ],
            [
                new Celula(),
                new Celula("*"),
                new Celula(),
                new Celula(),
                new Celula("*"),
                new Celula(),
                new Celula(),
                new Celula(),
                new Celula(),
            ],
        ];
    }

    static imprimeTablero(tablero) {
        for (let y = 0; y < tablero.length; y++) {
            let cadena = "";
            for (let x = 0; x < tablero.length; x++) {
                cadena += tablero[y][x].val;
                // console.log(Tablero[y][x].val);
            }
            console.log(cadena);
        }
    }
    static recorreTablero(tablero) {
        for (let y = 0; y < tablero.length; y++) {
            for (let x = 0; x < tablero.length; x++) {
                Celula.isCellAlive(
                    tablero[y][x],
                    Celula.numberofNeightbours(tablero[y][x], tablero)
                );

                // console.log(Tablero[y][x].val);
            }
        }
    }
    static ShowScream(tablero) {
        Tablero.recorreTablero(tablero);

        console.log("\n");
        console.log("\n");
    }
}
