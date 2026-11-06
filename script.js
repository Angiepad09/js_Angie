
const usuario = {nombre:"Maria", apellido:"Gomez", edad:25, 
    direccion:{calle:"Calle 12", ciudad:"Bogota", pais:"Colombia"},
    presentarse(){
    return "Hola, Soy" + this.nombre + this.apellido + "tengo" + usuario.edad +"años y vivo en" + usuario.direccion.ciudad + "," +usuario.direccion.ciudad;
}

};
console.log(usuario.presentarse);


const {ciudad, pais} =usuario;







