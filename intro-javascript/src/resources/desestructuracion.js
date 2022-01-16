
export const obtenerUsuario = (name) => ({ uid: "ABC2345", username: name });

console.log(obtenerUsuario("ricardo"));

const persona = {
    nombre: "Tony",
    edad: 45,
    clave: "clave1234",
    rango: "Soldado"
}

const userContext = ({ nombre, edad, rango, clave }) =>{
    return {
        nombreClave: clave,
        anios: edad
    }
}

const { nombreClave, anios } = userContext(persona);

console.log(nombreClave , anios)

const useState = ( nombre ) => {
    return [ nombre, ()=>{ console.log("Hola mundo!"); } ];
};

const [ nombre ,setNombre ] = useState("Goku")

console.log(nombre);
setNombre();
