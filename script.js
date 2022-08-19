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









// mi personaje

let cartaMiPersonaje = document.getElementsByClassName("miPersonaje")[0]
cartaMiPersonaje.innerHTML= `
    <h5 class="card-title">
        ${nombre}
    </h5>
    <div class="text-start">
        <p class="card-text">Vida: ${mivida}</p>
        <p class="card-text">Armadura: ${armadura_total}</p>
        <p class="card-text">Total: ${vida_total}</p>
        <div class="d-flex">
            <a href="#" id="ataqueBasico" class="btn btn-primary ">Q</a>
            <a href="#" id="ataqueMedio" class="btn btn-primary ">W</a>
            <a href="#" id="ataqueFuerte" class="btn btn-primary ">E</a>
        <div>
    </div>`









// Cartas de los enemigos con un boton para poder seleccionar contra quien pelearemos

let descripcion = document.getElementsByClassName("peleadorEstadisticas")[0]
descripcion.innerHTML= `
    <h5 class="card-title">
        ${arquero.nombre}
    </h5>
    <div class="text-start">
        <p class="card-text">Vida: ${arquero.vida}</p>
        <p class="card-text">Armadura: ${arquero.armadura}</p>
        <p class="card-text">Total: ${arquero.armadura + arquero.vida}</p>
        <a href="#" id="miBoton" class="btn btn-primary ">Seleccionar</a>
    </div>`


let miBoton = document.getElementById("miBoton")
miBoton.addEventListener("click",interactuar)




let descripcionGuerrero = document.getElementsByClassName("peleador3Estadisticas")[0]
descripcionGuerrero.innerHTML= `
    <h5 class="card-title">
        ${guerrero.nombre}
    </h5>
    <div class="text-start">
        <p class="card-text">Vida: ${guerrero.vida}</p>
        <p class="card-text">Armadura: ${guerrero.armadura}</p>
        <p class="card-text">Total: ${guerrero.armadura + guerrero.vida}</p>
        <a href="#" id="miBoton2" class="btn btn-primary ">Seleccionar</a>
    </div>`


let miBoton2 = document.getElementById("miBoton2")
miBoton2.addEventListener("click",enemigo2)





let descripcionAsesino = document.getElementsByClassName("arqueraEstadisticas")[0]
descripcionAsesino.innerHTML= `
    <h5 class="card-title">
        ${asesino.nombre}
    </h5>
    <div class="text-start">
        <p class="card-text">Vida: ${asesino.vida}</p>
        <p class="card-text">Armadura: ${asesino.armadura}</p>
        <p class="card-text">Total: ${asesino.armadura + asesino.vida}</p>
        <a href="#" id="miBoton3" class="btn btn-primary ">Seleccionar</a>
    </div>`


let miBoton3 = document.getElementById("miBoton3")
miBoton3.addEventListener("click",enemigo3)







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



//Empieza el juego 




// ataques que aparecen en el html

let descripcionMiAtaque = document.getElementsByClassName("ataqueMiPersonaje")[0]



let descripcionSuAtaque = document.getElementsByClassName("ataqueEnemigo")[0]





alert("Elija contra quien peleara")







function interactuar(){
    



    nombre_personaje = lista_personajes[0].nombre //Esto dice el nombre del personaje
    console.log("Usted a elejido a: "+ nombre_personaje)



    

    vida_restante = arquero.vida

    alert("Empieza atacando usted")
    while((vida_restante > 0) && (vida_total>0)){
        


        
        let intento = parseInt(prompt("Elija un numero del 1 al 3\n1) 5 de danio\n2) 10 de danio\n3) 15 de danio"))



        let efectivo = Math.ceil(Math.random()*2) // Le agregue esta funcion para que el danio sea o no efectivo. Por ahora es un 50% 50%. Luego dependiendo de la armadura puede que esto cambie
        if (efectivo == 1){
            ataque = danio_jugador(intento)

            vida_restante = vida_restante - ataque

            descripcionMiAtaque.innerHTML += `<p>Usted le ha hecho: ${ataque} danio\nLa vida restante de ${arquero.nombre} es de: ${vida_restante}</p>`
            // console.log("Usted le ha hecho: "+ataque+" danio\nLa vida restante de "+arquero.nombre+" es de: "+vida_restante)


        }else{
            ataque = danio_jugador(0)
            
            vida_restante = vida_restante - ataque
            descripcionMiAtaque.innerHTML += `<p>EL arquero ha esquivado su ataque, usted le ha hecho: ${ataque} danio\nLa vida restante de ${arquero.nombre} es de: ${vida_restante}</p>`
            // console.log("EL arquero ha esquivado su ataque\nUsted le ha hecho: "+ataque+" danio\nLa vida restante de "+arquero.nombre+" es de: "+vida_restante)
        }



        console.log("turno arquero")

        // intento = prompt("Elija un numero del 0 al 2")


        intento = Math.ceil(Math.random()*3)

        efectivo = Math.ceil(Math.random()*2)

        if(efectivo == 1){
            
            ataque = danio_jugador(intento)
            vida_total = vida_total - ataque
            descripcionSuAtaque.innerHTML += `<p>Usted ha recibido: ${ataque} danio\nLa vida restante de ${mi_personaje.nombre} es de: ${vida_total}</p>`
            // console.log("Usted ha recibido: "+ataque+" danio\nLa vida restante de "+mi_personaje.nombre+" es de: "+vida_total)
    
        }else{
            ataque = danio_jugador(0)
            vida_total = vida_total - ataque
            // console.log("Usted ha logrado esquivar el ataque con exito\nUsted ha recibido: "+ataque+" danio\nLa vida restante de "+mi_personaje.nombre+" es de: "+vida_total)
            descripcionSuAtaque.innerHTML += `<p>Usted ha logrado esquivar el ataque con exito usted ha recibido: ${ataque} danio\nLa vida restante de ${mi_personaje.nombre} es de: ${vida_total}</p>`

        }

        console.log("Su turno")
    }
    
    if (vida_total <= 0){
        console.log("El arquero te ha derrotado")
    }
    else if(vida_restante<=0){
        console.log("El arquero ha sido derrotado")
    }

}
    


function enemigo2(){
    nombre_personaje = lista_personajes[1].nombre
    console.log("Usted a elejido a: "+ nombre_personaje)

    



    vida_restante = guerrero.vida

    alert("Empieza atacando usted")

    while((vida_restante > 0) && (vida_total>0)){
        
        
        let intento = parseInt(prompt("Elija un numero del 1 al 3\n1) 5 de danio\n2) 10 de danio\n3) 15 de danio"))

        let efectivo = Math.ceil(Math.random()*2)
        if (efectivo == 1){
            ataque = danio_jugador(intento)

            vida_restante = vida_restante - ataque
            descripcionMiAtaque.innerHTML += `<p>Usted le ha hecho: ${ataque} danio\nLa vida restante de ${guerrero.nombre} es de: ${vida_restante}</p>`
            // console.log("Usted le ha hecho: "+ataque+" danio\nLa vida restante de "+guerrero.nombre+" es de: "+vida_restante)

        }else{
            ataque = danio_jugador(0)
            
            vida_restante = vida_restante - ataque
            descripcionMiAtaque.innerHTML += `<p>EL guerrero ha esquivado su ataque, usted le ha hecho: ${ataque} danio\nLa vida restante de ${guerrero.nombre} es de: ${vida_restante}</p>`
            // console.log("EL guerrero ha esquivado su ataque\nUsted le ha hecho: "+ataque+" danio\nLa vida restante de "+guerrero.nombre+" es de: "+vida_restante)
        }



        alert("turno guerrero")

        // intento = prompt("Elija un numero del 0 al 2")


        intento = Math.ceil(Math.random()*3)

        efectivo = Math.ceil(Math.random()*2)

        if(efectivo == 1){
            
            ataque = danio_jugador(intento)
            vida_total = vida_total - ataque
            descripcionSuAtaque.innerHTML += `<p>Usted ha recibido: ${ataque} danio\nLa vida restante de ${mi_personaje.nombre} es de: ${vida_total}</p>`
            // console.log("Usted ha recibido: "+ataque+" danio\nLa vida restante de "+mi_personaje.nombre+" es de: "+vida_total)
    
        }else{
            ataque = danio_jugador(0)
            vida_total = vida_total - ataque
            descripcionSuAtaque.innerHTML += `<p>Usted ha logrado esquivar el ataque con exito usted ha recibido: ${ataque} danio\nLa vida restante de ${mi_personaje.nombre} es de: ${vida_total}</p>`
            // console.log("Usted ha logrado esquivar el ataque con exito\nUsted ha recibido: "+ataque+" danio\nLa vida restante de "+mi_personaje.nombre+" es de: "+vida_total)
        }

        alert("Su turno")
    }
    
    if (vida_total <= 0){
        alert("El guerrero te ha derrotado")
    }
    else if(vida_restante<=0){
        alert("El guerrero ha sido derrotado")
    }
}




function enemigo3(){
    nombre_personaje = lista_personajes[2].nombre
    console.log("Usted a elejido a: "+ nombre_personaje)





    vida_restante = asesino.vida

    alert("Empieza atacando usted")

    while((vida_restante > 0) && (vida_total>0)){
        
        
        let intento = parseInt(prompt("Elija un numero del 1 al 3\n1) 5 de danio\n2) 10 de danio\n3) 15 de danio"))

        let efectivo = Math.ceil(Math.random()*2)
        if (efectivo == 1){
            ataque = danio_jugador(intento)

            vida_restante = vida_restante - ataque
            descripcionMiAtaque.innerHTML += `<p>Usted le ha hecho: ${ataque} danio\nLa vida restante de ${asesino.nombre} es de: ${vida_restante}</p>`
            // console.log("Usted le ha hecho: "+ataque+" danio\nLa vida restante de "+asesino.nombre+" es de: "+vida_restante)

        }else{
            ataque = danio_jugador(0)
            
            vida_restante = vida_restante - ataque
            descripcionMiAtaque.innerHTML += `<p>EL asesino ha esquivado su ataque, usted le ha hecho: ${ataque} danio\nLa vida restante de ${guerrero.nombre} es de: ${vida_restante}</p>`
            // console.log("El asesino ha esquivado su ataque\nUsted le ha hecho: "+ataque+" danio\nLa vida restante de "+asesino.nombre+" es de: "+vida_restante)
        }



        alert("turno Asesino")

        // intento = prompt("Elija un numero del 0 al 2")


        intento = Math.ceil(Math.random()*3)

        efectivo = Math.ceil(Math.random()*2)

        if(efectivo == 1){
            
            ataque = danio_jugador(intento)
            vida_total = vida_total - ataque
            descripcionSuAtaque.innerHTML += `<p>Usted ha recibido: ${ataque} danio\nLa vida restante de ${mi_personaje.nombre} es de: ${vida_total}</p>`
            // console.log("Usted ha recibido: "+ataque+" danio\nLa vida restante de "+mi_personaje.nombre+" es de: "+vida_total)
    
        }else{
            ataque = danio_jugador(0)
            vida_total = vida_total - ataque
            descripcionSuAtaque.innerHTML += `<p>Usted ha logrado esquivar el ataque con exito usted ha recibido: ${ataque} danio\nLa vida restante de ${mi_personaje.nombre} es de: ${vida_total}</p>`
            // console.log("Usted ha logrado esquivar el ataque con exito\nUsted ha recibido: "+ataque+" danio\nLa vida restante de "+mi_personaje.nombre+" es de: "+vida_total)
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



// Fin del juego