import '@testing-library/jest-dom'
const { getSaludo } = require("../../base/02-template-string");

describe('Pruebas del archivo 02-template-string.js', () => {

    test('getSaludo(nombre) debe retornar Hola Alan', () => {
        // Inicializacion
        const nombre = 'Alan';

        // Estimulo
        const saludo = getSaludo(nombre);

        // Verificacion
        expect(saludo).toBe(`Hola ${nombre}`);
    });

    test('getSaludo() debe retornar "Hola Carlos" en caso de que no se pase argumento a la funcion', () => {
        // Estimulo
        const saludo = getSaludo();

        expect(saludo).toBe('Hola Carlos');
    })
    

});