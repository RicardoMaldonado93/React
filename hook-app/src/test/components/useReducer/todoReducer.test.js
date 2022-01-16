import { todoReducer } from '../../../components/08-useReducer/todoReducer'
import { demoTodos } from '../../fixtures/demoTodos';

describe('Unitary test for useReducer', () => {
    
    test('should be return demoTodos ', () => {
        
        const state = todoReducer( demoTodos, {} );
        expect( state ).toEqual( demoTodos );
    });


    test('should add new todo ', () => {

        const newTodo = { id:3, desc:"Aprender Angular", done:false };

        const action = {
            type: "add",
            payload: newTodo
        }

        const todos = todoReducer( demoTodos, action);
        const [ ,,angular ] = todos;

        expect( todos.length ).toBe( 3 );
        expect( angular ).toEqual( newTodo );
        expect( todos ).toEqual( [ ...demoTodos, newTodo ] );

    });
   
    test('should delete todo ', () => {


        const action = {
            type: "delete",
            payload: 1
        }

        const todos = todoReducer( demoTodos, action);

        expect( todos.length ).toBe( 1 );
        expect( todos.includes({ id:1, desc:"Aprender React", done:false }) ).toBeFalsy();
        expect( todos ).toEqual( [ demoTodos[1] ] );

    });
  
    test('should toggle todo ', () => {


        const action = {
            type: "toggle",
            payload: 1
        }

        const todos = todoReducer( demoTodos, action);
        const [ react, mongo ] = todos;

        expect( react.done ).toBeTruthy();
        expect( mongo.done ).toBeFalsy();

    });

    
})
