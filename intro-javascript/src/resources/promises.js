import { getHeroesById, getHeroesByOwner } from './imports';

// const promise = new Promise((resolve, reject) =>{
//     setTimeout(()=>{
//         const hero = getHeroesById(2);
//         resolve(hero);
//     }, 2000);
// });

export const getHeroByIdAsync = ( id ) =>{
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            const hero = getHeroesById(id);
            
            hero ? resolve(hero) : reject("No se pudo encontrar el Heroe.");
        },1500);
    });
}

// console.log(promise.then( value => console.log(value) ));
const viewMessage = ( msg ) => console.log;

// getHeroByIdAsync(4)
//     .then( viewMessage() )
//     .catch( console.error )