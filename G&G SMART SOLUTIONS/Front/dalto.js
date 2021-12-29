let asignar=class asignarJugadores{
    Nombrar() {
    let Jugador1 = prompt("Ingrese nombre del jugador 1");
    let Jugador2 = prompt("Ingrese numbre del jugador 2");
    document.write(Jugador1);
    }
    

}
const p=new asignar();


class celular{
    constructor(color,peso,resolucion,camara,ram){

this.color=color;
this.peso=peso;
this.resolucion=resolucion;
this.camara=camara;
this.ram=ram;

    }

setColor(color){
    this.color=color
}
getColor(){
    return this.color
}

prender(){
    document.write("prendí")
}
reiniciar(){
    document.write("reinicie")
}
apagar(){
    document.write("apagué");
}
tomarFoto(){
    document.write("foto")
}
grabar(){
    document.write("grabando..")
}


}
const cel1=new celular();
cel1.apagar();
const cel2=new celular();
cel1.setColor("Rojo");
cel2.setColor("Verde");
document.write(cel1.color)
document.write(cel2.getColor())

let Tabla = new Array(9);
    for ( i = 0; i < Tabla.length; i++) {
        const element = Tabla[i];
        document.write(`${element} <br/>`)
    }