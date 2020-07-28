// Importar Bibliotecas
import React from 'react';
import '@testing-library/jest-dom';
import {shallow} from 'enzyme';
import PrimeraApp from '../PrimeraApp';

describe('Testeos sobre el componente <PrimeraApp />', () => {

  // test('Debe mostrar el mensaje "Hola, soy Goku"', () => {
  //     const saludo = 'Hola, soy Goku';
  //     // Producto renderizado
  //     const {getByText} = render( <PrimeraApp saludo={saludo}/> );
  //     expect(getByText(saludo)).toBeInTheDocument();
  // })
  
  test('Debe mostrar <PrimeraApp /> correctamente', () => {
    const saludo = 'Hola, soy Goku';
    const wrapper = shallow( <PrimeraApp saludo={saludo}/> );

    expect( wrapper ).toMatchSnapshot();
  });

  test('Debe de mostrar el subtitulo enviado por props', () => {
    const saludo = 'Hola, soy Goku';
    const subTitulo = 'Soy un subtitulo';
    const wrapper = shallow( <PrimeraApp saludo={saludo} subtitulo={subTitulo}/> );

    const textoParrafo = wrapper.find('p').text();

    expect(textoParrafo).toBe(subTitulo);
  });
  
    

});