// Se creo un juego que se basa se en elejir un enemigo, el cual vendra con una vida deteminada. Nosotros tendremos que vencerlo, dependiendo el tipo de ataque que elijamos,nuestro personaje hara mas danio o menos danio, pero existe la posibilidad que este ataque sea esquivado o no.


// construccion personajes
class Peleador{
    constructor(nombre,vida,armadura){
        this.nombre = nombre
        this.vida = vida
        this.armadura = armadura
    }

}


// creacion de enemigos
let arquero = new Peleador ("Robin",100,10)
let guerrero = new Peleador ("Teseo",140,20)
let asesino = new Peleador("Ivar",120,15)


let lista_personajes = [arquero,guerrero,asesino] // hago una lista con los enemigos creados. Se iran agregando mas



// Construccion de armadura
class Armadura{
    constructor(casco,pecho,pantalon){
        this.casco = casco
        this.pecho = pecho
        this.pantalon = pantalon
    }
}


// creacion de armaduras
let armadura_pesada = new Armadura(15,30,15)
let armadura_ligera = new Armadura(10,20,10)


 


// Eleccion de armadura
let armadura_eleccion = prompt("Elija su armadura:\n1) Armadura Pesada\n2) Armadura Ligera")



    if((armadura_eleccion == "1") || (armadura_eleccion == "2")){
        if(armadura_eleccion == "1"){
            armadura_total = armadura_pesada.casco + armadura_pesada.pecho + armadura_pesada.pantalon
        }else{
            armadura_total = armadura_ligera.casco + armadura_ligera.pecho + armadura_ligera.pantalon
        }
        console.log(armadura_total)
        
    }








// Creacion nuestro personaje

let nombre = prompt ("Elija el nombre de su personaje")


let mivida = 50

let mi_personaje = new Peleador(nombre,mivida)








vida_total = mivida + armadura_total // esta es la vida total, la suma entre la vida y armadura dependiendo que tipo de armadura se elija

alert("Su vida base es de: "+mivida+"\nSu poder de proteccion por la armadura es de: "+armadura_total+"\nSu vida total es de: "+vida_total)


let estadisticas = [mivida,armadura_total,vida_total]




// carta que muestra nuestro personaje con nuestras estadisticas
console.dir(document)
let carta = document.getElementById("estadisticas")

carta.innerHTML = `
    <h5>Nombre: ${nombre}</h5>
    <h6>Su vida base: ${estadisticas[0]}</h6>
    <h6>Su armadura total: ${estadisticas[1]}</h6>
    <h6>Su vida total: ${estadisticas[2]}</h6>`








// Funcion

//Funcion con una lista de los posibles danios que se pueden hacer
function danio_jugador(eleccion){
    let mi_danio = [0,5,10,15]
    if (eleccion == 0){
        golpe = mi_danio[0]
    }else if (eleccion == 1){
        golpe = mi_danio[1]
    }else if(eleccion == 2){
        golpe = mi_danio[2]
    }
    else{
        golpe = mi_danio[3]
    }

    return golpe
}



// Carta que muestra el enemigo y sus estadisticas dependiendo de cual elijas

let contenedor = document.getElementsByTagName("section")[0]
let cartaEnemigo = document.createElement("div")
cartaEnemigo.className = "card"
cartaEnemigo.setAttribute("width", "18rem;");





//Empieza el juego 

let personaje_a_derrotar = prompt("elije un personaje contra el que pelearas:\n0) arquero \n1) guerrero\n2)Asesino")


if (personaje_a_derrotar == "0"){
    nombre_personaje = lista_personajes[0].nombre //Esto dice el nombre del personaje
    console.log("Usted a elejido a: "+ nombre_personaje)




    // let cartaEnemigo = document.getElementById("estadisticas2")
    // cartaEnemigo.innerHTML=`
    // <h5>Nombre: ${arquero.nombre}</h5>
    // <h6>Su vida base: ${arquero.vida}</h6>
    // <h6>Su armadura: ${arquero.armadura}</h6>`

    

    cartaEnemigo.innerHTML = `
        
        <img src="arquera.gif" class="card-img-top" alt="...">
        <div class="card-body" id="estadisticas2">
            <h5>Nombre: ${arquero.nombre}</h5>
            <h6>Su vida base: ${arquero.vida}</h6>
            <h6>Su armadura: ${arquero.armadura}</h6>
        </div>
        `
    contenedor.append(cartaEnemigo)









    vida_restante = arquero.vida

    alert("Empieza atacando usted")
    while((vida_restante > 0) && (vida_total>0)){
        
        
        let intento = parseInt(prompt("Elija un numero del 1 al 3\n1) 5 de danio\n2) 10 de danio\n3) 15 de danio"))

        let efectivo = Math.ceil(Math.random()*2) // Le agregue esta funcion para que el danio sea o no efectivo. Por ahora es un 50% 50%. Luego dependiendo de la armadura puede que esto cambie
        if (efectivo == 1){
            ataque = danio_jugador(intento)

            vida_restante = vida_restante - ataque
            console.log("Usted le ha hecho: "+ataque+" danio\nLa vida restante de "+arquero.nombre+" es de: "+vida_restante)

        }else{
            ataque = danio_jugador(0)
            
            vida_restante = vida_restante - ataque
            console.log("EL arquero ha esquivado su ataque\nUsted le ha hecho: "+ataque+" danio\nLa vida restante de "+arquero.nombre+" es de: "+vida_restante)
        }



        alert("turno arquero")

        // intento = prompt("Elija un numero del 0 al 2")


        intento = Math.ceil(Math.random()*3)

        efectivo = Math.ceil(Math.random()*2)

        if(efectivo == 1){
            
            ataque = danio_jugador(intento)
            vida_total = vida_total - ataque
    
            console.log("Usted ha recibido: "+ataque+" danio\nLa vida restante de "+mi_personaje.nombre+" es de: "+vida_total)
    
        }else{
            ataque = danio_jugador(0)
            vida_total = vida_total - ataque
            console.log("Usted ha logrado esquivar el ataque con exito\nUsted ha recibido: "+ataque+" danio\nLa vida restante de "+mi_personaje.nombre+" es de: "+vida_total)
        }

        alert("Su turno")
    }
    
    if (vida_total <= 0){
        alert("El arquero te ha derrotado")
    }
    else if(vida_restante<=0){
        alert("El arquero ha sido derrotado")
    }


}else if(personaje_a_derrotar == "1"){
    nombre_personaje = lista_personajes[1].nombre
    console.log("Usted a elejido a: "+ nombre_personaje)

    // let cartaEnemigo = document.getElementById("estadisticas2")
    // cartaEnemigo.innerHTML=`
    // <h5>Nombre: ${guerrero.nombre}</h5>
    // <h6>Su vida base: ${guerrero.vida}</h6>
    // <h6>Su armadura: ${guerrero.armadura}</h6>`


    

    cartaEnemigo.innerHTML = `
        
        <img src="peleador3.gif" class="card-img-top" alt="...">
        <div class="card-body" id="estadisticas2">
            <h5>Nombre: ${guerrero.nombre}</h5>
            <h6>Su vida base: ${guerrero.vida}</h6>
            <h6>Su armadura: ${guerrero.armadura}</h6>
        </div>
        `
    contenedor.append(cartaEnemigo)








    vida_restante = guerrero.vida

    alert("Empieza atacando usted")

    while((vida_restante > 0) && (vida_total>0)){
        
        
        let intento = parseInt(prompt("Elija un numero del 1 al 3\n1) 5 de danio\n2) 10 de danio\n3) 15 de danio"))

        let efectivo = Math.ceil(Math.random()*2)
        if (efectivo == 1){
            ataque = danio_jugador(intento)

            vida_restante = vida_restante - ataque
            console.log("Usted le ha hecho: "+ataque+" danio\nLa vida restante de "+guerrero.nombre+" es de: "+vida_restante)

        }else{
            ataque = danio_jugador(0)
            
            vida_restante = vida_restante - ataque
            console.log("EL guerrero ha esquivado su ataque\nUsted le ha hecho: "+ataque+" danio\nLa vida restante de "+guerrero.nombre+" es de: "+vida_restante)
        }



        alert("turno guerrero")

        // intento = prompt("Elija un numero del 0 al 2")


        intento = Math.ceil(Math.random()*3)

        efectivo = Math.ceil(Math.random()*2)

        if(efectivo == 1){
            
            ataque = danio_jugador(intento)
            vida_total = vida_total - ataque
    
            console.log("Usted ha recibido: "+ataque+" danio\nLa vida restante de "+mi_personaje.nombre+" es de: "+vida_total)
    
        }else{
            ataque = danio_jugador(0)
            vida_total = vida_total - ataque
            console.log("Usted ha logrado esquivar el ataque con exito\nUsted ha recibido: "+ataque+" danio\nLa vida restante de "+mi_personaje.nombre+" es de: "+vida_total)
        }

        alert("Su turno")
    }
    
    if (vida_total <= 0){
        alert("El guerrero te ha derrotado")
    }
    else if(vida_restante<=0){
        alert("El guerrero ha sido derrotado")
    }

}else{
    nombre_personaje = lista_personajes[2].nombre
    console.log("Usted a elejido a: "+ nombre_personaje)


    // let cartaEnemigo = document.getElementById("estadisticas2")
    // cartaEnemigo.innerHTML=`
    // <h5>Nombre: ${asesino.nombre}</h5>
    // <h6>Su vida base: ${asesino.vida}</h6>
    // <h6>Su armadura: ${asesino.armadura}</h6>`

    

    cartaEnemigo.innerHTML = `
        
        <img src="peleador.gif" class="card-img-top" alt="...">
        <div class="card-body" id="estadisticas2">
            <h5>Nombre: ${asesino.nombre}</h5>
            <h6>Su vida base: ${asesino.vida}</h6>
            <h6>Su armadura: ${asesino.armadura}</h6>
        </div>
        `
    contenedor.append(cartaEnemigo)






    vida_restante = asesino.vida

    alert("Empieza atacando usted")

    while((vida_restante > 0) && (vida_total>0)){
        
        
        let intento = parseInt(prompt("Elija un numero del 1 al 3\n1) 5 de danio\n2) 10 de danio\n3) 15 de danio"))

        let efectivo = Math.ceil(Math.random()*2)
        if (efectivo == 1){
            ataque = danio_jugador(intento)

            vida_restante = vida_restante - ataque
            console.log("Usted le ha hecho: "+ataque+" danio\nLa vida restante de "+asesino.nombre+" es de: "+vida_restante)

        }else{
            ataque = danio_jugador(0)
            
            vida_restante = vida_restante - ataque
            console.log("El asesino ha esquivado su ataque\nUsted le ha hecho: "+ataque+" danio\nLa vida restante de "+asesino.nombre+" es de: "+vida_restante)
        }



        alert("turno Asesino")

        // intento = prompt("Elija un numero del 0 al 2")


        intento = Math.ceil(Math.random()*3)

        efectivo = Math.ceil(Math.random()*2)

        if(efectivo == 1){
            
            ataque = danio_jugador(intento)
            vida_total = vida_total - ataque
    
            console.log("Usted ha recibido: "+ataque+" danio\nLa vida restante de "+mi_personaje.nombre+" es de: "+vida_total)
    
        }else{
            ataque = danio_jugador(0)
            vida_total = vida_total - ataque
            console.log("Usted ha logrado esquivar el ataque con exito\nUsted ha recibido: "+ataque+" danio\nLa vida restante de "+mi_personaje.nombre+" es de: "+vida_total)
        }

        alert("Su turno")
    }
    
    if (vida_total <= 0){
        alert("El Asesino te ha derrotado")
    }
    else if(vida_restante<=0){
        alert("El Asesino ha sido derrotado")
    }

}



//Fin del juego