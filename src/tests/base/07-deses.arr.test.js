import '@testing-library/jest-dom'
const { retornaArreglo } = require("../../base/07-deses-arr.js");

describe('Testeo del archivo', () => {

    test('retornaArreglo() se testea el tipo de retorno y algun campo', () => {
        // Inicializamos
        const letra1 = 'ABC';
        const numero1 = '123'

        // Estimulo
        const [letra, numero] = retornaArreglo();

        // Test
        expect(letra).toBe(letra1);
        expect(typeof(numero)).toBe('number');

    });

    
});