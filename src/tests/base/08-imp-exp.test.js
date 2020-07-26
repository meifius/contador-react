import "@testing-library/jest-dom"
import { getHeroeById, getHeroesByOwner } from "../../base/08-imp-exp";


describe('Testeo del archivo 08-imp-exp', () => {

  test('getHeroeById(id=10) debe devolver un Hereo por id', () => {
    // Inicializacion
    const id = 1;
    // Estimulo
    const heroe = getHeroeById(id);
    // Testeo
    expect(heroe).toEqual({
      id: 1,
      name: 'Batman',
      owner: 'DC'
    });
  });
  
  test('getHeroeById(id) debe devolver un undefined', () => {
    // Inicializacion
    const id = 10;
    // Estimulo
    const heroe = getHeroeById(id);
    // Testeo
    expect(heroe).toBe(undefined);
  });

  test('getHeroesByOwner(owner) debe retornar un arreglo con los heores de DC', () => {
    // Inicializacion
    const owner = 'DC';
    // Estimulo
    const heoresDC = getHeroesByOwner(owner);
    const heoresData = heoresDC.filter(h => h.owner == owner);
    //Testeo
    expect(heoresDC).toEqual(heoresData);  
  })

  test('getHeroesByOwner(owner) debe retornar una longitud de 2 de los heores de Marvel', () => {
    // Inicializacion
    const owner = 'Marvel';
    const largoEspereado = 2;
    // Estimulo
    const heroesMarvel = getHeroesByOwner(owner);
    // Testeo
    expect(heroesMarvel.length).toBe(largoEspereado)
  })
  
    
});