



class PonerFigura{
    ponerFigura(id,figura){
        document.getElementById(id).innerHTML=figura;
    }
}
let Jugador1=prompt("Ingrese aqui el nombre del primer jugador","X");
let Jugador2=prompt("ingrese aquí el nombre del segundo jugador","O");
const asignar=()=>{
    document.getElementById("Jugador1").innerHTML= Jugador1;
    document.getElementById("Jugador2").innerHTML = Jugador2;
}
const ponerFigura=(id)=>{
    document.getElementById(id).innerHTML="X";
}
const Juego=()=>{

}
class mostrarTabla{
    
    imprimirTabla(){
        document.write(".<br>");
        let Tabla = new Array(3);
        for (let i = 0; i < Tabla.length; i++) {
            Tabla[i]=new Array(3);
        }
        for (let i = 0; i < Tabla.length; i++) {
            let contador=0;
            parseInt(contador);
            for (let j = 0; j < Tabla[0].length; j++) {
                
                contador+=1;
                
                document.write(` ${contador} `)
                if(j<2){
                    document.write("<b>|</b>")
                }
            }
            document.write("<br/>")
            if(i<2){
                document.write("______<br/>")
            }
            
            
        }
    }
    
    
}
const a = new mostrarTabla();

a.imprimirTabla();


