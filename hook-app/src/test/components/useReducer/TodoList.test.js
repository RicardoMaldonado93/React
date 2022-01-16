import { shallow } from 'enzyme';
import React from 'react';
import { TodoList } from '../../../components/08-useReducer/components/TodoList';
import { demoTodos } from '../../fixtures/demoTodos';
import "@testing-library/jest-dom"


describe('Unitary test for <TodoList />', () => {
    
    const handleDelete = jest.fn();
    const handleToggle = jest.fn();

    const wrapper = shallow( 
        <TodoList 
            todos = { demoTodos }
            handleDelete = { handleDelete }
            handleToggle = { handleToggle }
        />);



    test('should be shown correctly ', () => {
        expect( wrapper ).toMatchSnapshot();
    });

    test('should containt two <TodoItem /> ', () => {
        const items = wrapper.find("TodoItem");
        
        expect(items.length).toBe( demoTodos.length );

        /** evaluamos que en las props contenga las funciones correspondientes */
        expect(items.at(0).prop("handleDelete")).toEqual( expect.any(Function) );
        expect(items.at(0).prop("handleToggle")).toEqual( expect.any(Function) );
    });
    
});

