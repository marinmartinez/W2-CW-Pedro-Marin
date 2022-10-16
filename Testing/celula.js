export class Celula {
    constructor(value) {
        this.isAlive = false;
        this.positionX = 0;
        this.positionY = 0;
        this.numerodeVecinas = 0;
        this.val = "-";

        if (value === "*") {
            this.val = value;
            this.isAlive = true;
        }
    }

    static numberofNeightbours(cell, tablero) {
        let neighbours = 0;
        for (let y = cell.positionY - 1; y <= cell.positionY + 1; y++) {
            for (let x = cell.positionX - 1; x <= cell.positionX + 1; x++) {
                if (
                    y >= 0 &&
                    y <= tablero.length &&
                    x >= 0 &&
                    x <= tablero.length
                ) {
                    if (tablero[y][x].isAlive === true) {
                        neighbours++;
                    }
                }
            }
        }
        return neighbours;
    }

    static isCellAlive(cell, neighbours) {
        if (neighbours < 2) {
            cell.isAlive = false;
            cell.val = "-";
        }
        if (cell === 3) {
            cell.isAlive = true;
            cell.val = "*";
        }

        if (neighbours > 3) {
            cell.isAlive = false;
            cell.val = "-";
        }
        return cell;
    }
    //probada
}
