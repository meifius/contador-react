
export const getImagen = async() => {
  try {
    const apiKey = 'MJ5qgaP55Z1yJ5QFnGgJRth5aqM2N9F8';
    const resp   = await fetch(`http://api.giphy.com/v1/gifs/random?api_key=${ apiKey }`);
    const { data } = await resp.json(); 
    const { url } = data.images.original;
    return url;
  } catch (error) {
    return 'No existe';
  }
}

//  getImagen();



