import heroes from "../data/heroes";
import { getHeroesById, getHeroesByOwner } from "../resources/imports";


describe("Pruebas en funciones de Heroes", ()=>{

    test("debe de retornar un heroe por ID", ()=>{
        const id = 1;
        const heroe = getHeroesById(id);
        
        const heroeData = heroes.find( h => h.id === id );

        expect( heroe ).toEqual( heroeData );

    });
    
    test("debe de retornar un 'undefined' si el heroe no existe", ()=>{
        const id = 80;
        const heroe = getHeroesById(id);
        
        const heroeData = heroes.find( h => h.id === id );

        expect( heroe ).toBe( undefined )

    });
   
    test("debe de retornar un arreglo con los heroes de 'DC'", ()=>{
        const owner = "DC";
        const heroe = getHeroesByOwner(owner);
        
        const heroeData = heroes.filter( h => h.owner == owner );

        expect( heroe ).toEqual( heroeData );

    });

    test("debe de retornar un arreglo con los heroes de 'Marvel'", ()=>{
        const owner = "Marvel";
        const heroe = getHeroesByOwner(owner);
        
        const heroeData = heroes.filter( h => h.owner == owner );

        expect( heroe.length ).toBe(2);

    });

    
})
