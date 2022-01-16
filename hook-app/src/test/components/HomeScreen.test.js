import { mount, shallow } from "enzyme";
import { HomeScreen } from "../../components/09-useContext/HomeScreen";
import React from 'react';
import { UserContext } from "../../components/09-useContext/UseContext";

describe('Unitary test with <HomeScreen />', () => {
    
    const user ={
        user: "Ricardo",
        email: "demo@demo.com"
    }

    const wrapper = mount(
        <UserContext.Provider value={{ user }}>
            <HomeScreen /> 
        </UserContext.Provider>
    );

    test('should be shown correctly', () => {
        
        expect( wrapper ).toMatchSnapshot();
    });
    
})
