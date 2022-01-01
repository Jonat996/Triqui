class Dom{
    bienvenido=()=>{  
        let textoAsignarJugadores=`<h3> Por Favor ingrese el nombre de los Jugadores para iniciar  </h3>
        <input type="text" placeholder="Jugador 1" id="Jugador1">
        <input type="text" placeholder="Jugador 2" id="Jugador2">
        <button id="nombrar" onclick= c.prueba(),a.pruebaTabla()>Listo!</button>`
    
        document.getElementById("asignar").innerHTML= textoAsignarJugadores;
    }
    enviarJugador1=()=>{

        let jugador1= document.getElementById("Jugador1").value;
        

        return jugador1;
    }
    enviarJugador2=()=>{

        let jugador2= document.getElementById("Jugador2").value;

        return jugador2;
    }
    prueba =()=>{
        a = new ImprimirTabla(this.enviarJugador1(),this.enviarJugador2());
        console.log(this.enviarJugador1(),this.enviarJugador2());
    }

    llamarTabla=()=>{
        document.getElementById("tabla").innerHTML=`<iframe src="tabla.html" frameborder="0"></iframe>`;
    }
}








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
    pruebaTabla=()=>{
        let Tabla=
        `
        <div id="tablaJuego">
        <span onclick="a.Estado(1),a.determinarJugador()"  id="1" class="text">1</span>
        <span>|</span>
        <span onclick="a.Estado(2),a.determinarJugador()" id="2"class="text">2</span>
        <span>|</span>
        <span onclick="a.Estado(3),a.determinarJugador()" id="3"class="text">3</span>
        <br>
        <span onclick="a.Estado(4),a.determinarJugador()" id="4"class="text">4</span>
        <span>|</span>
        <span onclick="a.Estado(5),a.determinarJugador()" id="5"class="text">5</span>
        <span>|</span>
        <span onclick="a.Estado(6),a.determinarJugador()"id="6"class="text">6 </span>
        <br>
        <span onclick="a.Estado(7),a.determinarJugador()"id="7"class="text">7</span>
        <span>|</span>
        <span onclick="a.Estado(8),a.determinarJugador()"id="8"class="text">8</span>
        <span>|</span>
        <span onclick="a.Estado(9),a.determinarJugador()"id="9"class="text">9</span>
        </div>
        `;
        document.getElementById("tabla").innerHTML=Tabla;
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
            
                document.getElementById(id).innerHTML=`<span style ="color:red;">X</span>`;
                b.ponerFigura(id,"X")
                if(b.establecerGanador("X")==true){
                    alert(`El ganador es ${this.jugador1}`)
                }
        }
        else if(estado==2){
            document.getElementById(id).innerHTML=`<span style ="color:blue;">O</span>`;
            b.ponerFigura(id,"O")
            if(b.establecerGanador("O")==true){
                alert(`El ganador es ${this.jugador2}`)
            }
        }
    
    }
    //esta funcion se encarga de pintar el nombre del jugador que esta por jugar
    determinarJugador=()=>{
        this.estadoJugador+=1;
        
        if(this.estadoJugador==1){
            document.getElementById("asignar").innerHTML=`<span style="color:red;">${this.jugador1}:</span>`;
    
        }
        else if(this.estadoJugador==2){
            document.getElementById("asignar").innerHTML=`<span style="color:blue;">${this.jugador2}:</span>`;
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
                
            }
            
        }
        
        
    }

    establecerGanador=(figura)=>{
        let ganador = false;
        
        //ganador por filas 
        let puntos =0;
        for (let i = 0; i < this.tabla.length; i++) {
            for(let j = 0; j<this.tabla[0].length; j++){
                
                if(figura==this.tabla[i][j]){
                    puntos+=1;
                    
                    if(puntos==3){
                        //alert("Ganador por filas");
                        ganador = true;
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
                        //alert("Ganador por columnas");
                        ganador = true;
                    }
                }
            }puntos=0;
        }

        //Ganador primera diagonal
                if(figura == this.tabla[0][0] && figura == this.tabla[1][1] && figura == this.tabla[2][2]){
                    //alert("Ganador primera diagonal")
                    ganador = true;
                }
                //Ganador segunda diagonal
                if(figura == this.tabla[2][0] && figura == this.tabla[1][1] && figura == this.tabla[0][2]){
                    //alert("Ganador segunda diagonal")
                    ganador = true;
                }
                return ganador;
            }
        

    
}
const prueba=()=>{
alert("vesmos nea ")
}



let a = new ImprimirTabla();
const b = new Tabla();
const c = new Dom();


b.Tablas();



