const apiKey = "vKfwJNhSL2NuLAAq5oJC4RLvtQPCY9FT";

const request = fetch(`http://api.giphy.com/v1/gifs/random?api_key=${apiKey}`);

request
    .then( resp => resp.json(resp))
    .then( ({data}) =>{ 
        const { url } = data.images.original;
        
        const img = document.createElement("img");
        img.src = url;

        document.body.append(img);
    })
    .catch( console.error )
