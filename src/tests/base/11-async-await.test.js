import '@testing-library/jest-dom';
import { getImagen } from '../../base/11-async-await';

describe('Testeo del archivo 11-async-await.js', () => {
  test('getImagen() debe de retornar el url de la imagen', async () => {
    const url = await getImagen();
    expect(typeof(url)).toBe('string');
  })
  
});