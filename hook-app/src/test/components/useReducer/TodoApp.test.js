const { shallow, mount } = require("enzyme");
const { TodoApp } = require("../../../components/08-useReducer/TodoApp");
import { act } from '@testing-library/react';
import React from 'react';
import { demoTodos } from '../../fixtures/demoTodos';

describe('Unitary test for <TodoApp />', () => {
    const wrapper = shallow(<TodoApp />);
    Storage.prototype.setItem = jest.fn(()=>{});


    test('should be show correctly', () => {
        expect( wrapper ).toMatchSnapshot();
   });

   test("should add a TODO", ()=>{

        const wrapper = mount( <TodoApp /> );

        act( ()=>{
            wrapper.find("AddTodo").prop("handleAddTodo")(demoTodos[0]);
            wrapper.find("AddTodo").prop("handleAddTodo")(demoTodos[1]);
        })

        expect( wrapper.find("h1").text( ).trim() ).toBe("TodoApp (2)");
        expect( localStorage.setItem ).toHaveBeenCalledTimes(2);

   });


   test('should delete a TODO', () => {
       wrapper.find("AddTodo").prop("handleAddTodo")( demoTodos[0] );
       const algo = wrapper.find("TodoList").prop("handleDelete")( demoTodos[0].id );

       expect( wrapper.find("h1").text( ).trim()).toBe("TodoApp (0)");
   })
   
    
});
