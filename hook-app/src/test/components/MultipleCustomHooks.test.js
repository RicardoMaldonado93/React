import React from 'react';
import { shallow } from 'enzyme';
import { MultipleCustomHooks } from '../../components/03-Examples/MultipleCustomHooks';
import { useFetch } from '../../components/hooks/useFetch';
import { useCounter } from '../../components/hooks/useCounter';

jest.mock('../../components/hooks/useFetch.js');
jest.mock('../../components/hooks/useCounter.js');

describe('Unitary test with <MultipleCustomHooks />', () => {
    
    test('should be correctly show ', () => {

        useCounter.mockReturnValue({
            counter: 1,
            imcrement: ()=>{}
        })

        useFetch.mockReturnValue({
            data:null,
            loading: true,
            error:null
        });

        const wrapper = shallow( <MultipleCustomHooks /> );

        expect( wrapper ).toMatchSnapshot();
    });
    
    
    test('should be shown information', () => {

        useFetch.mockReturnValue({
            data:[{
                author: "Ricardo",
                quote: "Hola mundo"
            }],
            loading: false,
            error: null
        });


        const wrapper = shallow( <MultipleCustomHooks /> );


        expect( wrapper.find('.alert').exists()).toBeFalsy();
        expect( wrapper.find('.mb-0').text().trim() ).toBe("Hola mundo");
        expect( wrapper.find('footer').text().trim()).toBe("Ricardo");

    });


    
})
