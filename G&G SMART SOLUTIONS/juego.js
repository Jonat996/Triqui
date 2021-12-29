
let estados=0;
let jugador1;
let jugador2;


    bienvenido=()=>{  
        let textoAsignarJugadores=`<h3> Por Favor ingrese el nombre de los Jugadores para iniciar  </h3>
        <input type="text" placeholder="Jugador 1" id="Jugador1">
        <input type="text" placeholder="Jugador 2" id="Jugador2">
        <button id="nombrar" onclick= doc()>Listo!</button>`
    
        document.getElementById("asignar").innerHTML= textoAsignarJugadores;
    }
    
    
    doc =()=>{
        jugador1= document.getElementById("Jugador1").value;
        jugador2= document.getElementById("Jugador2").value;
        
            jugadores(jugador1,jugador2,1);
            
        
        
        
        document.getElementById("tabla").innerHTML=`<iframe src="tabla.html" frameborder="0"></iframe>`;
        
        
    }

const jugadores =(jugador1,jugador2,estado)=>{
    if(estado==1){
        Jugador1(jugador1);
        console.log(estado)
        estado = 2;
    }else if (estado == 2){
        Jugador2(jugador2);
        console.log(estado)
        estado=1;
    }

}
const Juego=(id,estado)=>{
    
    console.log(jugadores);
    
    if(estado==1){
        
        
        ponerFigura(id,"X")
        
    }
    else if(estado==2){
        
        ponerFigura(id, "O")
        
    }

}

const Estado=(id)=>{
    estados +=1;
    if(estados==1){
        
        Juego(id,estados);
    }
    else if(estados==2){
        
        Juego(id,estados);
        estados=0;
    }
    
}
const Jugador1=(Jugador2)=>{
    
    document.getElementById("asignar").innerHTML=`${Jugador2}:`;
}
const Jugador2=(Jugador1)=>{
    
    document.getElementById("asignar").innerHTML=`${Jugador1}:`;
}



    
    
    ponerFigura=(id, figura)=>{
        document.getElementById(id).innerHTML=figura;
    }
    
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
    
                    
                    document.write(`<span onclick="Estado(${contador})" id="${contador}"> ${contador} </span>`);
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
        Tabla=()=>{
            let Tabla = new Tabla(3);
            for (let i = 0; i < Tabla.length; i++) {
                Tabla[i]=new Tabla(3);
            }
            let contador = 0;
            for (let i = 0; i < Tabla.length; i++) {
                for(let j = 0; i<Tabla[0]; i++){
                    Tabla[i][j]= contador+=1;
                }
                
            }
        }
        
