const { sumar } = require("../src/sumar");
const { restar } = require("../src/restar");
const { multiplicar } = require("../src/multiplicar");
const { dividir } = require("../src/dividir");
const { isPalindrome } = require("../src/isPalindrome");

describe("Funcion sumar", () => {
    it("sumar 1+1 va a retornar 2", () => {
        //arrange
        const operador1 = 1;
        const operador2 = 1;

        //act
        const resultado = sumar(operador1, operador2);

        //assert
        expect(resultado).toBe(2);
    });

    it("sumar a+1 va a arrojar error", () => {
        //arrange
        const operador1 = 'a';
        const operador2 = 1;

        //act
        const expectedResult = () => sumar(operador1, operador2);

        //assert
        expect(expectedResult).toThrowError();
    })

    it("sumar 1+a va a arrojar error", () => {
        const operador1 = 1;
        const operador2 = 'a';
        
        //act
        const expectedResult = () => sumar(operador1, operador2);

        //assert
        expect(expectedResult).toThrowError();
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

        const resultado = restar(operador1, operador2);

        //assert
        expect(resultado).toBe(1)
    });

    it("restar a-1 va a arrojar error", () => {
        //arrange
        const operador1 = 'a';
        const operador2 = 1;

        //act
        const expectedResult = () => restar(operador1, operador2);

        //assert
        expect(expectedResult).toThrowError();
    });

    it("Restar 1-a va a arrojar error", () => {
        //arrange
        const operador1 = 1;
        const operador2 = 'a';

        //act
        const expectedResult = () => restar(operador1, operador2);

        //assert
        expect(expectedResult).toThrowError();
    })

    it("Restar sin parametros va a arrojar un error", () => {
        expect(() => restar()).toThrow("Error");
    });

});

describe("Funcion multiplicar", () => {
    it("Multiplicar 1 por 1 va a retornar 1", () => {
        //Arrange
        const operador1 = 1;
        const operador2 = 1;

        //act
        const resultado = multiplicar(operador1, operador2);

        //assert
        expect(resultado).toBe(1);
    })

    it("Multiplicar 50 por 2 va a retornar 100", () => {
        //Arrange
        const operador1 = 50;
        const operador2 = 2;

        //act
        const resultado = multiplicar(operador1, operador2);

        //Assert
        expect(resultado).toBe(100);
    })

    it("Multiplicar a por 1 va a arrojar un error", () => {
        //arrange
        const operador1 = 'a';
        const operador2 = 1;
        
        //act
        const expectedResult = () => multiplicar(operador1, operador2);

        //assert
        expect(expectedResult).toThrowError();
    })

    it("Multiplicar 1 por a va a arrojar un error", () => {
        //arrange
        const operador1 = 1;
        const operador2 = 'a';
        
        //act
        const expectedResult = () => multiplicar(operador1, operador2);

        //assert
        expect(expectedResult).toThrowError();
    })

    it("Multiplicar sin parametros va a arrojar un error", () => {
        expect(() => multiplicar()).toThrow("Error");
    })
})

describe("Funcion dividir", () => {
    it("Dividir 2 por 1 retorna 2", () => {
        
        //arrange
        const operador1 = 2;
        const operador2 =1;

        //act
        const resultado = dividir(operador1, operador2);

        //assert
        expect(resultado).toBe(2);
    })

    it("Divivir a por 1 va a retornar un error", () => {
        //arrange
        const operador1 = 'a';
        const operador2 = 1;
        
        //act
        const expectedResult = () => dividir(operador1, operador2);

        //assert
        expect(expectedResult).toThrowError();
    })
    
    it("Divivir 1 por a va a retornar un error", () => {
        //arrange
        const operador1 = 1;
        const operador2 = 'a';

        //act
        const expectedResult = () => dividir(operador1, operador2);

        //assert
        expect(expectedResult).toThrowError();
    })

    it("Divivir 0 por 1 va a retornar un 0", () => {
        //arrange
        const operador1 = 0;
        const operador2 = 1;

        //act
        const resultado = dividir(operador1, operador2)

        //assert
        expect(resultado).toBe(0);
    })
    it("Divivir 1 por 0 va a retornar un error", () => {
        //arrange
        const operador1 = 1;
        const operador2 = 0;

        //act
        const expectedResult = () => dividir(operador1, operador2);

        //assert
        expect(expectedResult).toThrowError();
    });
});

describe ("Funci??n isPalindrome", () => {
    it("Debe retornar true para oso", () => {
        //arrange
        const someString = "oso";

        //act
        const resultado = isPalindrome(someString);

        //assert
        expect(resultado).toBe(true);
    });

    it("Debe retornar false para gato", () => {
        //arrange
        const someString = "gato";

        //act
        const resultado = isPalindrome(someString);

        //assert
        expect(resultado).toBe(false);
    });

    it("Si se ingresa un numero debe arrojar error", () => {
        //arrange
        const someString = 4;

        //act
        const expectedResult = () => isPalindrome(someString);

        //assert
        expect(expectedResult).toThrowError();
    })

    it("La funci??n sin parametros va a arrojar un error", () => {
        expect(() => isPalindrome()).toThrow("Error");
    })
});