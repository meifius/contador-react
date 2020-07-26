import heroes from '../../data/heroes';
import '@testing-library/jest-dom'
const { getHeroeByIdAsync } = require("../../base/09-promesas");

describe('Testeando el archivo 09-promesas.js', () => {

  test('getHeroeByIdAsync() debe retornar un heroe async', (done) => {
    const id = 1;
    getHeroeByIdAsync(id)
      .then( heroe => {
        expect(heroe).toEqual(heroes[0]);
        done();
      });
  });

  test('getHeroeByIdAsync() debe retornar un error por id no existe', (done) => {
    const id = 10;
    getHeroeByIdAsync(id)
      .catch( error => {
        expect(error).toBe('No se pudo encontrar el héroe');
        done();
      });
  })
  
    

});