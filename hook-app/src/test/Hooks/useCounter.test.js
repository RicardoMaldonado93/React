import '@testing-library/jest-dom';
import { renderHook, act } from '@testing-library/react-hooks';
import { useCounter } from '../../components/hooks/useCounter';



describe("Unitary test for 'useCounter'", () => {
   
    test('should return default values', () => {
       
        const { result } = renderHook( ()=> useCounter() );
        const { counter, increment, decrement, reset } = result.current;

        expect( counter ).toBe(10);
        expect( typeof increment ).toBe("function");
        expect( typeof decrement ).toBe("function");
        expect( typeof reset ).toBe("function");
    });

    test('should return the input value', () => {
       
        const inputValue = 100;
        const { result } = renderHook( ()=> useCounter(inputValue) );
        const { counter} = result.current;

        expect( counter ).toBe(100);
    });

    test("should increment the value when call function 'increment()'", () => {
       
        const { result } = renderHook( ()=> useCounter(100) );
        const { increment } = result.current;

        act( ()=> increment() );

        const { counter } = result.current;

        expect( counter ).toBe(101);
    });

    test("should decrement the value when call function 'decrement()'", () => {
       
        const { result } = renderHook( ()=> useCounter(100) );
        const { decrement } = result.current;

        act( ()=> decrement() );

        const { counter } = result.current;

        expect( counter ).toBe(99);
    });

    test("should reset to the default value when call function 'reset()'", () => {
       
        const { result } = renderHook( ()=> useCounter(100) );
        const { increment, reset } = result.current;

        act( ()=>{ 
            increment(8);
            reset();
        });

        const { counter } = result.current;

        expect( counter ).toBe(100);
    });
    
});
