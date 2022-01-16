import React from 'react';
import { shallow } from "enzyme";
import "@testing-library/jest-dom";
import { demoTodos } from '../../fixtures/demoTodos';
import { AddTodo } from '../../../components/08-useReducer/components/AddTodo';

describe('Unitary test for <AddTodo />', () => {
    const handleAddTodo = jest.fn();
    const wrapper = shallow( 
        <AddTodo 
            handleAddTodo = { handleAddTodo }
        /> 
    );

    test('should be shown correctly ', () => {
        expect( wrapper ).toMatchSnapshot();
    });
    
    test('dont should call the function handleAddTodo', () => {
        const formSubmit = wrapper.find("form").prop("onSubmit");

        formSubmit({ preventDefault(){ } });

        expect( handleAddTodo ).toBeCalledTimes(0); 
    });

    test('should call the function handleAddTodo', () => {
        const value = "Aprender SQL";
        wrapper.find("input").simulate("change",{
            target:{
                value,
                name: "description"
            }
         })

        const formSubmit = wrapper.find("form").prop("onSubmit");
        formSubmit({ preventDefault(){ } });

        expect( handleAddTodo ).toBeCalledTimes(1); 
        expect( handleAddTodo ).toHaveBeenCalledWith( expect.any(Object) ); 
        expect( handleAddTodo ).toHaveBeenCalledWith( { 
            desc: value,
            done: false,
            id: expect.any( Number )
         } ); 
         
        expect( wrapper.find("input").prop("value") ).toBe("");
    });
    
})

