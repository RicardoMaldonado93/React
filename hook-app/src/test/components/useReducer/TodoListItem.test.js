import React from 'react';
import {shallow} from 'enzyme';
import { TodoItem } from '../../../components/08-useReducer/components/TodoItem';
import { demoTodos } from '../../fixtures/demoTodos';
import "@testing-library/jest-dom";
import { todoReducer } from "../../../components/08-useReducer/todoReducer";

describe('Unitary test with TodoListItem', () => {
    const handleDelete = jest.fn();
    const handleToggle = jest.fn();

    const wrapper = shallow( 
        <TodoItem 
            todo = { demoTodos[0] }
            index = { 0 }
            handleDelete = { handleDelete }
            handleToggle = { handleToggle }
        />);

    test('should load correctly', () => {
        expect( wrapper ).toMatchSnapshot();
    });

    test('should be call to function HandleDelete', () => {
        const button = wrapper.find("button");
        button.simulate("click");

        expect( handleDelete ).toHaveBeenCalledWith( demoTodos[0].id );
    });

    test('should be call to function HandleToggle', () => {
        const p = wrapper.find("p");
        p.simulate("click");

        expect( handleToggle ).toHaveBeenCalledWith( demoTodos[0].id );
    });

    test('should be contain text', () => {
        const p = wrapper.find("p");

        expect( p.text().trim() ).toBe( `${ 0 + 1 }. ${ demoTodos[0].desc }` );
    });
    
    test('should be contain the class complete', () => {

        const todo = demoTodos[0];
        todo.done = true;

        const wrapper = shallow( 
            <TodoItem 
                todo = { todo }
            />);

        const p = wrapper.find("p");
        
        expect( p.hasClass("complete") ).toBeTruthy();
    });
    
    
})
