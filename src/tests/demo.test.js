
describe( 'Pruebas en el archivo demo.test.js' , () => {

    test('Deben ser Iguales los Strings', () => {
        const mensaje1 = 'Hola mundo';
        const mensaje2 = `Hola mundo`;
    
        expect(mensaje1).toBe(mensaje2);
    });

});

