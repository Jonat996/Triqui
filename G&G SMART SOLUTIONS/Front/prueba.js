
class Tabla{
    imprimirTabla=()=>{
        document.write("<br>");
        let Tabla = new Tabla(3);
        for (let i = 0; i < Tabla.length; i++) {
            Tabla[i]=new Tabla(3);
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
    tabla=()=>{
        let Tabla = new Tabla(3);
        for (let i = 0; i < Tabla.length; i++) {
            Tabla[i]=new Tabla(3);
        }
        let contador = 0;
        for (let i = 0; i < Tabla.length; i++) {
            for(let j = 0; i<Tabla[0]; i++){
                
                Tabla[i][j]= contador+=1;
            console.log(Tabla[i][j]);
            }
            
        }
    }
}
const a = new Tabla();
a.tabla();

