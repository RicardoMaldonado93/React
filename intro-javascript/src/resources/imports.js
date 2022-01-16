import heroes, { owners } from "../data/heroes";

export const getHeroesById = (id) => heroes.find( h => h.id === id );
export const getHeroesByOwner = (owner) => heroes.filter( h => h.owner === owner );
// const { name , owner } = getHeroesById(2);

// console.log(getHeroesById(2));
// console.log(name, owner);

// console.log(getHeroesByOwner("DC"));