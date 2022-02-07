const { sumar } = require("../src/sumar");
const { restar } = require("../src/restar")
const { multiplicar } = require("../src/multiplicar")
const { dividir } = require("../src/dividir");

describe("Funcion sumar", () => {
    it("sumar 1+1 va a retornar 2", () => {
        //arrange
        const operador1 = 1;
        const operador2 = 1;

        //act
        const resultado = sumar(operador1, operador2);

        //assert
        expect(resultado).toBe(2)
    });

    it("sumar a+1 va a arrojar error", () => {
        //arrange
        const operador1 = 'a';
        const operador2 = 1;
        expect(() => sumar(operador1, operador2)).toThrow();
    })

    it("sumar 1+a va a arrojar error", () => {
        const operador1 = 1;
        const operador2 = 'a';
        expect(() => sumar(operador1, operador2)).toThrow();
    });

    it("Sumar sin parametros va a arrojar un error", () => {
        expect(() => sumar()).toThrow("Error");
    });
});

describe("Funcion restar", () => {
    it("restar 2-1 va a retornar 1", () => {
        //arrange
        const operador1 = 2;
        const operador2 = 1;

        //act

        const resultado = restar(2, 1);

        //assert
        expect(resultado).toBe(1)
    });

    it("restar a-1 va a arrojar error", () => {
        const operador1 = 'a';
        const operador2 = 1;
        expect(() => restar(operador1, operador2)).toThrow();
    });

    it("Restar 1-a va a arrojar error", () => {
        const operador1 = 1;
        const operador2 = 'a';
        expect(() => restar(operador1, operador2)).toThrow();
    })

    it("Restar sin parametros va a arrojar un error", () => {
        expect(() => restar()).toThrow("Error");
    });

});

describe("Funcion multiplicar", () => {
    it("Multiplicar 1 por 1 va a retornar 1", () => {
        const resultado = multiplicar(1, 1);
        expect(resultado).toBe(1);
    })

    it("Multiplicar 50 por 2 va a retornar 100", () => {
        const resultado = multiplicar(50, 2);
        expect(resultado).toBe(100)
    })

    it("Multiplicar a por 1 va a arrojar un error", () => {
        const operador1 = 'a';
        const operador2 = 1;
        expect(() => multiplicar(operador1, operador2)).toThrow("Error");
    })

    it("Multiplicar 1 por a va a arrojar un error", () => {
        const operador1 = 1;
        const operador2 = 'a';
        expect(() => multiplicar(operador1, operador2)).toThrow("Error");
    })

    it("Multiplicar sin parametros va a arrojar un error", () => {
        expect(() => multiplicar()).toThrow("Error");
    })
})

describe("Funcion dividir", () => {
    it("Dividir 2 por 1 retorna 2", () => {
        const resultado = dividir(2, 1);
        expect(resultado).toBe(2);
    })

    it("Divivir a por 1 va a retornar un error", () => {
        const operador1 = 'a';
        const operador2 = 1;
        expect(() => dividir(operador1, operador2)).toThrow("Error");
    })
    
    it("Divivir 1 por a va a retornar un error", () => {
        const operador1 = 1;
        const operador2 = 'a';
        expect(() => dividir(operador1, operador2)).toThrow("Error");
    })

    it("Divivir 0 por 1 va a retornar un 0", () => {
        const operador1 = 0;
        const operador2 = 1;
        const resultado = dividir(operador1, operador2)
        expect(resultado).toBe(0);
    })
    it("Divivir 1 por 0 va a retornar un error", () => {
        const operador1 = 1;
        const operador2 = 0;
        expect(() => dividir(operador1, operador2)).toThrow("Error");
    })
})