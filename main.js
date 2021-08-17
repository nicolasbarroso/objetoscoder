class Mascosta {
    constructor(nombre, edad){
        this.nombre = nombre;
        this.edad = edad;
    }
    cumplirAños(){
        this.edad++;
        console.log(this.nombre+" tiene "+this.edad+" años!");
    }
}

class Persona{
    constructor(nombre, sueldo, mascota){
        this.nombre = nombre;
        this.sueldo = sueldo;
        this.mascota = mascota;
    }

    obtenerDetalles(){
        return "Nombre: "+this.nombre+"\nsueldo: $"+this.sueldo+"\nnombre de mascota: "+this.mascota.nombre + "\nedad de mascota: "+this.mascota.edad;
    }
    obtenerSueldo(){
        return "El sueldo de "+this.nombre+" es $"+this.sueldo;
    }
    presentarme(){
        console.log("Hola mi nombre es "+this.nombre+" un gusto!");
    }
}
let mascota1 = new Mascosta('Tomy', 2);
let persona1 = new Persona('Juan', 3000, mascota1);
console.log(persona1.obtenerDetalles());
console.log(persona1.obtenerSueldo());
persona1.presentarme();
mascota1.cumplirAños();
mascota1.cumplirAños();