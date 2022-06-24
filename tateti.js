/*Tateti */

const jugador1='X'
const jugador2='O'

let turno = 0;
let arrayTablero=[null,null,null,null,null,null,null,null,null];

const tablero = document.getElementById('tablero');
const casillero = document.getElementsByClassName('casillero');
let arrayCasilleros=Array.from(casillero);



function iniciarJuego(){
    for (let i = 0; i < arrayCasilleros.length; i++) {
       

        arrayCasilleros[i].addEventListener('click', function(){

            
            if(arrayCasilleros[i].innerHTML=='' && checkWinner()==null){
                if(turno%2==0){
                    arrayCasilleros[i].innerHTML=jugador1;
                    arrayTablero[i]=jugador1;
                    turno++; 
                    
                }else{
                    arrayCasilleros[i].innerHTML=jugador2;
                    arrayTablero[i]=jugador2;
                    turno++;
                   
                }
            }if(checkWinner()!==null){
                
            }


            
            }
        )

        



    }
}
const combinacionesGanadoras = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];
checkWinner = () => {
    
    for (let i = 0; i < combinacionesGanadoras.length; i++) {
        const [a, b, c] = combinacionesGanadoras[i];
        if (arrayTablero[a] && arrayTablero[a] === arrayTablero[b] && arrayTablero[a] === arrayTablero[c]) {
            casillero[c].style.backgroundColor = 'green';
            casillero[a].style.backgroundColor = 'green';
            casillero[b].style.backgroundColor = 'green';
            return arrayTablero[a]; // Si encuentra una combinación ganadora, retorna el valor del ganador
        }
    }
    return null; // Si no encuentra ninguna combinación ganadora, retorna null

}



iniciarJuego()



