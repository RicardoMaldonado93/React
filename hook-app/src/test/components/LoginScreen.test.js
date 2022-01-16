import React from 'react';
import { shallow, mount } from 'enzyme'
import { LoginScreen } from '../../components/09-useContext/LoginScreen';
import { UserContext } from '../../components/09-useContext/UseContext';
import { act } from '@testing-library/react-hooks';

describe('unitary test with <LoginScreen />', () => {
    
    const setUser = jest.fn();

    const wrapper = mount( 
        <UserContext.Provider value={{ setUser }}>
            <LoginScreen /> 
        </UserContext.Provider>
    );



    test('should be shown correctly', () => {
       
        expect( wrapper ).toMatchSnapshot();
    });
    
    test('should be set user ', () => {
       

        // wrapper.find("button").at(0).simulate("click");
        wrapper.find("button").prop("onClick")();

        expect( setUser ).toHaveBeenCalledWith({
            id:123456,
            name: "Ricardo",
            email: "ricardomaldonado@gmail.com"
        })
        // console.log(wrapper)

    })
    
});
