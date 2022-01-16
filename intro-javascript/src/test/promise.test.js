
import heroes from '../data/heroes';
import { getHeroByIdAsync } from '../resources/promises'

describe("Pruebas con promise", () => {

    test("getHeroeByIdAsync debe de retornar un heroe async ", ( done ) => {
        const id = 1;

        getHeroByIdAsync( id )
            .then( heroe => { 
                
                expect( heroe ).toBe( heroes[0] ); 
                /** hace un resolve de la promise, siempre hay que ponerlo ya que 
                 * si hay varios expect esperara hasta el ultimo para resolver */
                done(); 
            });

    });

    test("getHeroeByIdAsync debe de retornar un error si el heroe no existe", ( done ) => {
        const id = 10;

        getHeroByIdAsync( id )
            .catch( error =>{
                expect( error ).toBe("No se pudo encontrar el Heroe.");
                done();
            } )
    });
    
})
