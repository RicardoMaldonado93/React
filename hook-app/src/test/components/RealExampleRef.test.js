import React from 'react';
import {shallow} from 'enzyme';
import {RealExampleRef} from '../../components/04-useRef/RealExampleRef'

describe('Unitary test with RealExampleRef', () => {
    
    const wrapper = shallow( <RealExampleRef /> );

    test('should be correctly show', () => {
       expect( wrapper ).toMatchSnapshot();
       expect( wrapper.find("MultipleCustomHooks").exists()).toBeFalsy();
    });
    
   
    test('should be correctly show', () => {
        wrapper.find("button").simulate("click");
        expect( wrapper.find("MultipleCustomHooks").exists() ).toBeTruthy();
    });
   

});
