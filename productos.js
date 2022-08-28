class Cafes{
    constructor(id,imagen,nombre,descripcion,precio){
        this.id = id
        this.imagen = imagen
        this.nombre = nombre
        this.descripcion = descripcion
        this.precio = precio
    }
}

class CapsulaCafe{
    constructor(id,imagen,nombre,descripcion,precio){
        this.id = id
        this.imagen = imagen
        this.nombre = nombre
        this.descripcion = descripcion
        this.precio = precio
    }
}


//Capsula de cafes
let americano = new CapsulaCafe(4,"multimedia/capsula-americano.jpg","Capsula Americano","Cafe rico dulce y tostado",450)
let cortado = new CapsulaCafe(5,"multimedia/capsula-cortado.jpg","Capsula Cortado","Cafe rico dulce y tostado",450)
let ginseng = new CapsulaCafe(6,"multimedia/capsula-ginseng.jpg","Capsula Ginseng","Cafe rico dulce y tostado",450)

// Cafes

let expresso = new Cafes(1,"multimedia/cafemolido-expresso.jpg","Expresso","Cafe rico dulce y tostado",500)
let houseBlend = new Cafes(2,"multimedia/cafemolido-HouseBlend.jpg","House Blend","Cafe rico dulce y tostado",500)
let mocha = new Cafes(3,"multimedia/cafemolido-mocha.jpg","Mocha","Cafe rico dulce y tostado",500)