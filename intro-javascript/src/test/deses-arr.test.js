import '@testing-library/jest-dom';
import { retornarArreglo } from '../resources/deses-arr';

describe("Prueba de arreglos", ()=>{
    
    const [ letras, numero ] = retornarArreglo();

    test("Desestructuracion de letras", ()=>{ expect( letras ).toEqual( "ABC" ); });

    test("Desestructuracion de numeros", ()=>{ expect( numero ).toEqual( 123 ); }); 

    test("'Letras' deberia ser del tipo 'string'", ()=>{ expect( letras ).toEqual( "ABC" ); });

    test("'numero' deberia ser del tipo 'number'", ()=>{ expect( typeof numero ).toEqual( "number" ); 
    });

}); 