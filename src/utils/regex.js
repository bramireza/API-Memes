//Expresión regular se utiliza para buscar y extraer cadenas de texto que representan URLs de imágenes en formato jpg, jpeg, png o gif.
exports.imageUrls = /https?:\/\/.*\.(?:png|jpg|jpeg)/g;
