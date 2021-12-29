class ImprimirTabla{

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

const a = new ImprimirTabla();
const b = new Tabla();
a.imprimirTabla();
b.Tablas();
b.ponerFigura(3,"X");
b.ponerFigura(5,"X");
b.ponerFigura(7,"X");
b.establecerGanador("X");