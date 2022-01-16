import '@testing-library/jest-dom';
import { shallow } from 'enzyme';
import React from 'react';
import HookApp from '../components/HookApp';

describe('Unitary test for HookApp', () => {
   
    test('should do match with snapshot', () => {
        const wrapper = shallow( <HookApp /> );

        expect( wrapper ).toMatchSnapshot();
    });
    
});
