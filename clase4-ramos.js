//Cree un logaritmo que trata sobre la entrada a una discoteca. Y una vez alcanzado el cupo maximo del lugar,  te avisa mediante un alert, que se lleno el lugar y en console log avisa : el promedio de la gente en el local, nombre de las personas que ingresaron y nombre de las que no.

let edad = parseInt(prompt("Ingrese su edad(Ingrese -1 para salir): "))

let ingresaron = ""
let NoIngresaron = ""
let cupo = 4
let edades = 0
let cantPersonas = 0
while (cupo != 0){

    nombre = prompt ("Ingrese su nombre: ")

    if (edad >= 18){
        alert("Bienvenid@ "+nombre +", puedes ingresar al establecimiento")
        ingresaron += nombre +", "
        edades += edad
        cantPersonas += 1
        cupo -= 1
    }
    else{
        alert("Disculpe "+nombre+", no puede ingresar por que es menor de edad")
        NoIngresaron += nombre +", "
    }
    edad = parseInt(prompt("Ingrese su edad(Ingrese -1 para salir): "))
    
}

PromEdad = edades/cantPersonas



alert("Se alcanzo el cupo maximo del lugar")
console.log("Ingresaron al establecimiento:",ingresaron)
console.log("El promedio de edad dentro del local es de "+PromEdad+" anios")
console.log("No ingresaron: ", NoIngresaron)