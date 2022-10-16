import { add, subtraction, division } from "./sample.js";

describe("Testing add", () => {
    test("if a = 2 and b = 2 add should be", () => {
        let a = 2;
        let b = 2;
        expect(add(a, b)).toBe(4);
    });

    test("if a = 2 and b = 2 add should be", () => {
        let a = 2;
        let b = 2;
        expect(add(a, b)).toBeLessThan(5);
    });
});

describe("Testing subtraction", () => {
    test("if a = 2 and b = 2 result should be 0", () => {
        let a = 2;
        let b = 2;
        expect(subtraction(a, b)).toBe(0);
    });
});

describe("Testing division", () => {
    test("if a = 4 and b = 2 result should be 2", () => {
        let a = 4;
        let b = 2;
        expect(division(a, b)).toBe(2);
    });

    test('if b = 0 , return should be "Error"', () => {
        let a = 2;
        let b = 0;
        expect(() => {
            division(a, b);
        }).toThrow();
    });
    test('if a = null , return should be "Error"', () => {
        let a = null;
        let b = 5;
        try {
            division(a, b);
        } catch (e) {
            expect(e.message).toBe("Error: parámetro no válido");
        }
    });
});
