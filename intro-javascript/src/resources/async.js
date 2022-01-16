export const getImagen = async ()=>{
    try{
        
        const apiKey = "vKfwJNhSL2NuLAAq5oJC4RLvtQPCY9FT";
        const resp = await fetch(`http://api.giphy.com/v1/gifs/random?api_key=${apiKey}`);
        const { data } = await resp.json();
        const { url } = data.images.original;
        return url;
    }
    catch( error ){
        throw "hubo un error";
    }
}    


// getImagen()
//     .then(resp =>{
//         const img = document.createElement("img");
//         img.src = resp;
//         document.body.append(img);
//     })
//     .catch( console.error );

