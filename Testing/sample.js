export function add(a, b) {
    return +a + Number(b);
}

export function subtraction(a, b) {
    return a - b;
}

export function division(a, b) {
    const zeroError = new Error("Error: No se puede dividir por 0");
    const paramError = new Error("Error: parámetro no válido");
    if (b === 0) {
        throw zeroError;
    }
    if (a === null || b === null) {
        throw paramError;
    }
    if (isNaN(a) || isNaN(b)) {
        throw paramError;
    }
    return a / b;
}
