// Importar Bibliotecas
import React from 'react';
import '@testing-library/jest-dom';
import {shallow} from 'enzyme';
import CounterApp from '../CounterApp';

describe('Testeo del componente <CounterApp />', () => {

  let wrapper = shallow( <CounterApp /> );

  beforeEach( () => {
    wrapper = shallow( <CounterApp /> );
  } );
  

  test('Debe de mostrar <CounterApp /> correctamente', () => {
    expect( wrapper ).toMatchSnapshot();
  });

  test('Debe de mostrar por defecto el valor de 100', () => {
    const value = 100;
    const wrapper = shallow( <CounterApp value={value}/> );
    const valor = wrapper.find('h2').text().trim();

    expect( valor ).toBe( `${value}` );
  });

  test('Debe de incrementar con el boton +1', () => {
    wrapper.find('button').at(0).simulate('click');
    const counterText = wrapper.find('h2').text().trim();
    expect( counterText ).toBe( '11' );
  });
  
  test('Debe de decrementar con el boton -1', () => {
    wrapper.find('button').at(1).simulate('click');
    const counterText = wrapper.find('h2').text().trim();
    expect( counterText ).toBe( '9' );
  });
  
  test('Debe de restear con el boton Reset', () => {
    const value = 100;
    const wrapper = shallow( <CounterApp value={value}/> );

    wrapper.find('button').at(1).simulate('click');
    wrapper.find('button').at(2).simulate('click');
    const counterText = wrapper.find('h2').text().trim();
    expect( counterText ).toBe( `${value}` );
  });
    

});
