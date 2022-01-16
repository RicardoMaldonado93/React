import '@testing-library/jest-dom';
import { obtenerUsuario } from '../resources/desestructuracion';

describe("Pruebas unitarias", ()=>{
    
    test("Pruebas con Equals", ()=>{

        const userTest ={ uid: "ABC2345", username: "Ricardo" };
        const user = obtenerUsuario("Ricardo");
    
        expect( userTest ).toEqual( user );
    })
});