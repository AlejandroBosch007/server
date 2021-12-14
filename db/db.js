let Animales = {}
let Id = {
    cont:0
}

class Animal{
    constructor(nombre,especie){
        this.nombre = nombre
        this.especie = especie
        this.Id = Id.cont
    }
}

const nuevoAnimal = (nombre,especie) =>{
    Animales[Id.cont] = new Animal(nombre,especie)
    Id.cont++
}

module.exports = {Animales,nuevoAnimal}