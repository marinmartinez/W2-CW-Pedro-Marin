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

    imprimeTablero() {
        for (let y = 0; y < this.tablero.length; y++) {
            let cadena = "";
            for (let x = 0; x < this.tablero.length; x++) {
                cadena += this.tablero[y][x].val;
                // console.log(Tablero[y][x].val);
            }
            console.log(cadena);
        }
    }
    recorreTablero() {
        for (let y = 0; y < this.tablero.length; y++) {
            for (let x = 0; x < this.tablero.length; x++) {
                this.tablero[y][x] = Celula.isCellAlive(
                    this.tablero[y][x],
                    Celula.numberofNeightbours(this.tablero[y][x], this.tablero)
                );

                // console.log(Tablero[y][x].val);
            }
        }
    }
    ShowScream(tablero) {
        Tablero.recorreTablero(tablero);

        console.log("\n");
        console.log("\n");
    }
    giveCellPosition() {
        for (let y = 0; y < this.tablero.length; y++) {
            for (let x = 0; x < this.tablero.length; x++) {
                this.tablero[y][x].positionX = x;
                this.tablero[y][x].positionY = y;
            }
        }
    }
}
