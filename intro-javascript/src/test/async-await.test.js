import '@testing-library/jest-dom'
import { getImagen } from '../resources/async';


describe('Pruebas con Async y Await', () => {
    
    test('Deberia de retorar la url de la imagen', async() => {
        const url = await getImagen();

        expect( url.includes("https://") ).toBe( true );
        
    })
    
})
