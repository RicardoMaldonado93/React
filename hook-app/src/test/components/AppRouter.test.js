
import React from 'react';
import { mount } from "enzyme";
import { AppRouter } from '../../components/09-useContext/AppRouter';
import { UserContext } from '../../components/09-useContext/UseContext';

describe('Unitary test <AppRounter />', () => {

    const user ={ 
        id: 1,
        name: "ricardo",
        email: "ricardo@gmail.com"
     }
    const wrapper = mount( 
        <UserContext.Provider value={ user }>
            <AppRouter /> 
        </UserContext.Provider>);
    
    test('should be shown correctly', () => {
        expect(wrapper).toMatchSnapshot();
    })
    
})
