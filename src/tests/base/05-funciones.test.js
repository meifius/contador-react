import '@testing-library/jest-dom'
const { getUser, getUsuarioActivo } = require("../../base/05-funciones.js");

describe('testeando el archivo 05-funciones.js', () => {

  test('getUser() debe devolver un objeto JS', () => {
    // Inicializacion
    const valor1 = {
        uid: 'ABC123',
        username: 'El_Papi1502'
    };
    // estimulo
    const valor2 = getUser();
    // testeo
    expect(valor2).toEqual(valor1);
  });

  test('getUsuarioActivo() debe de devolver', () => {
    // estimulo
    const nombre = 'Alan';
    const valor2 = getUsuarioActivo(nombre);
    // Inicializacion
    const valor1 = {
      uid: 'ABC567',
      username: nombre
    };
    // testeo
    expect(valor2).toEqual(valor1);
  });

});