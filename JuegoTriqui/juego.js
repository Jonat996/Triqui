class ImprimirTabla{
    estadoJugador=0;
    estados=0;
constructor(jugador1,jugador2){
    this.jugador1=jugador1;
    this.jugador2=jugador2;
}
//Esta funcion se encarga de pintar la tabla 
    imprimirTabla=()=>{
        document.write("<br>");
        let Tabla = new Array (3);
        for (let i = 0; i < Tabla.length; i++) {
            Tabla[i]=new Array(3);
        }
        let contador=0;
        
        for (let i = 0; i < Tabla.length; i++) {
            
            parseInt(contador);
            for (let j = 0; j < Tabla[0].length; j++) {
                
                contador+=1;

                
                document.write(`<span onclick="a.Estado(${contador}),a.determinarJugador()" id="${contador}"> ${contador} </span>`);
                if(j<2){
                    document.write("<b>|</b>");
                }
            }
            document.write("<br/>")
            if(i<2){
                document.write("______<br/>");
            }
            
            
        }
    }
//esta funcion se encarga de pasar si el jugador es jugador 1 o 2
    Estado=(id)=>{
        this.estados +=1;
    if(this.estados==1){
        this.Juego(id,this.estados);
    }
    else if(this.estados==2){
        this.Juego(id,this.estados);
        this.estados=0;
    }
    }
    //esta funcion recibe el estado del jugador y pone la figura del jugador en el campo seleccionado
    Juego=(id,estado)=>{
        if(estado==1){
            
                document.getElementById(id).innerHTML="X";
                b.ponerFigura(id,"X")
        }
        else if(estado==2){
            document.getElementById(id).innerHTML="O";
            b.ponerFigura(id,"O")
        }
    
    }
    //esta funcion se encarga de pintar el nombre del jugador que esta por jugar
    determinarJugador=()=>{

        this.estadoJugador+=1;
        console.log(this.estadoJugador+" estado");
        console.log(this.jugador1);
        if(this.estadoJugador==1){
            document.getElementById("asignar").innerHTML=`${this.jugador1}:`;
    
        }
        else if(this.estadoJugador==2){
            document.getElementById("asignar").innerHTML=`${this.jugador2}:`;
            this.estadoJugador=0;
        }
    }
}
class Tabla{
    
    tabla = new Array(3);
    

    
    constructor(id,figura){
        this.id=id;
        this.figura=figura;
        this.tabla[0]=new Array(3);
        this.tabla[1]=new Array(3);
        this.tabla[2]=new Array(3);
    }
    
    //Este metodo se encarga de establecer un numero del 1 al 9 en cada posicion del array
    Tablas=()=>{
        let contador = 0;
            for (let i = 0; i < this.tabla.length; i++) {
                for(let j = 0; j<this.tabla[0].length; j++){
                    this.tabla[i][j]= contador+=1;
                    console.log(this.tabla[i][j]);
                }
                
            }
            return this.tabla;
    }

    //Este metodo se encarga de establecer la figura del jugador correspondiente en la posicion que seleccionó
    ponerFigura=(id,figura)=>{
        

        
        for (let i = 0; i < this.tabla.length; i++) {
            for(let j = 0; j<this.tabla[0].length; j++){
                
                
                if(id==this.tabla[i][j]){
                    this.tabla[i][j]= figura;
                    console.log("Puse la figura");
                    b.establecerGanador(figura);
                }
                else{
                    console.log("no funcionó...")
                }
                console.log(this.tabla[i][j])
            }
            
        }
        
        
    }

    establecerGanador=(figura)=>{
        
        //ganador por filas 
        let puntos =0;
        for (let i = 0; i < this.tabla.length; i++) {
            for(let j = 0; j<this.tabla[0].length; j++){
                console.log(this.tabla[j])
                if(figura==this.tabla[i][j]){
                    puntos+=1;
                    console.log(puntos);
                    if(puntos==3){
                        alert("Ganador por filas");
                    }
                }
            }
            puntos=0;
        }
        //ganador por columnas
        for (let i = 0; i < this.tabla.length; i++) {
            for(let j = 0; j<this.tabla[0].length; j++){
                if(figura == this.tabla[j][i]){
                    puntos+= 1;
                    if(puntos==3){
                        alert("Ganador por columnas");
                    }
                }
            }puntos=0;
        }

        //Ganador primera diagonal
                if(figura == this.tabla[0][0] && figura == this.tabla[1][1] && figura == this.tabla[2][2]){
                    alert("Ganador primera diagonal")
                }
                //Ganador segunda diagonal
                if(figura == this.tabla[2][0] && figura == this.tabla[1][1] && figura == this.tabla[0][2]){
                    alert("Ganador segunda diagonal")
                }

            }
        

    
}
const prueba=()=>{
alert("vesmos nea ")
}



const a = new ImprimirTabla("Jonathan","Jesus");
const b = new Tabla();


b.Tablas();
a.imprimirTabla();
a.determinarJugador();

