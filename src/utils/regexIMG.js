//Expresión regular se utiliza para buscar y extraer cadenas de texto que representan URLs de imágenes en formato jpg, jpeg, png o gif.
exports.imageUrls =
  /https?:\/\/[\w\-_]+\.[\w\-_]+\.[\w\-_]+\.(jpg|jpeg|png|gif)/gi;
