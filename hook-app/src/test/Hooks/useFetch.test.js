import { renderHook, act } from '@testing-library/react-hooks';
import '@testing-library/jest-dom';
import { useFetch } from '../../components/hooks/useFetch'

describe('Unitary test with useFetch', () => {
   
    test('should be return default info', () => {
        const counter = 1;
        const { result  } = renderHook( ()=> useFetch(`https://www.breakingbadapi.com/api/quotes/${counter}`))

        const { data, loading, error } = result.current;

        expect( data ).toBe( null );
        expect( loading ).toBe( true );
        expect( error ).toBe( null );
    });
    
    test('should be return info', async() => {
        const counter = 1;
        const { result, waitForNextUpdate} = renderHook( ()=> useFetch(`https://www.breakingbadapi.com/api/quotes/${counter}`))

        await waitForNextUpdate();


        const { data, loading, error } = result.current;

        expect( data.length ).toBe(1);
        expect( loading ).toBeFalsy();
        expect( error ).toBe(null);
    });
    
    test("on error should be return error message", async() => {
        const { result, waitForNextUpdate} = renderHook( ()=> useFetch(`https://reqres.in/apid/users?page=2`))

        await waitForNextUpdate();


        const { data, loading, error } = result.current;

        expect( data ).toBe( null );
        expect( loading ).toBeFalsy();
        expect( error ).toBe( "No se pudo cargar la info" );
    });
    

});
