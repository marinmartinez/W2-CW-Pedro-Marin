import { Cell } from "./celula.js";
export class Tablero {
    constructor() {
        this.table = [
            [
                new Cell(),
                new Cell(),
                new Cell("*"),
                new Cell(),
                new Cell("*"),
                new Cell(),
                new Cell("*"),
                new Cell(),
                new Cell(),
            ],
            [
                new Cell("*"),
                new Cell("*"),
                new Cell("*"),
                new Cell("*"),
                new Cell("*"),
                new Cell("*"),
                new Cell("*"),
                new Cell("*"),
                new Cell("*"),
            ],
            [
                new Cell(),
                new Cell(),
                new Cell(),
                new Cell("*"),
                new Cell(),
                new Cell(),
                new Cell("*"),
                new Cell(),
                new Cell("*"),
            ],
            [
                new Cell(),
                new Cell(),
                new Cell("*"),
                new Cell(),
                new Cell(),
                new Cell("*"),
                new Cell(),
                new Cell("*"),
                new Cell(),
            ],
            [
                new Cell(),
                new Cell("*"),
                new Cell(),
                new Cell("*"),
                new Cell(),
                new Cell("*"),
                new Cell(),
                new Cell("*"),
                new Cell(),
            ],
            [
                new Cell("*"),
                new Cell(),
                new Cell("*"),
                new Cell(),
                new Cell("*"),
                new Cell(),
                new Cell("*"),
                new Cell(),
                new Cell(),
            ],
            [
                new Cell(),
                new Cell(),
                new Cell(),
                new Cell(),
                new Cell(),
                new Cell(),
                new Cell(),
                new Cell(),
                new Cell("*"),
            ],
            [
                new Cell("*"),
                new Cell(),
                new Cell(),
                new Cell("*"),
                new Cell(),
                new Cell("*"),
                new Cell(),
                new Cell("*"),
                new Cell("*"),
            ],
            [
                new Cell(),
                new Cell("*"),
                new Cell(),
                new Cell(),
                new Cell("*"),
                new Cell(),
                new Cell(),
                new Cell(),
                new Cell(),
            ],
        ];
    }

    printTable() {
        for (let y = 0; y < this.table.length; y++) {
            let cadena = "";
            for (let x = 0; x < this.table.length; x++) {
                cadena += this.table[y][x].val;
            }
            console.log(cadena);
        }
    }
    traversTable() {
        for (let y = 0; y < this.table.length; y++) {
            for (let x = 0; x < this.table.length; x++) {
                this.table[y][x] = Cell.isCellAlive(
                    this.table[y][x],
                    Cell.numberofNeightbours(this.table[y][x], this.table)
                );
                console.log(this.table[y][x]);
            }
        }
    }
    showScream(table) {
        table.traversTable();
        table.printTable();
        console.log("\n");
        console.log("\n");
    }
    giveCellPosition() {
        for (let y = 0; y < this.table.length; y++) {
            for (let x = 0; x < this.table.length; x++) {
                this.table[y][x].positionX = x;
                this.table[y][x].positionY = y;
                console.log(
                    "" +
                        this.table[y][x].positionY +
                        "  " +
                        this.table[y][x].positionX
                );
            }
        }
    }
}
