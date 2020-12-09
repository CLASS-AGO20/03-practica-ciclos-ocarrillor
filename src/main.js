export default class App {
    factorial(numero){
        let fact = numero;
        for(let i = numero; i > 1; i--){
            fact = fact * (i-1);
        }
        return fact;
    }

    convertirAString(numero){
        let cadena = "";
        while(numero > 0){
            cadena = cadena + "*";
            numero--;
        }
        return cadena;
    }

    obtenerDivisibles(numero){
        let div = numero, acum=0;
        do{
            if(numero % div == 0){
                acum++;
            }
            div--;
        }while(div > 0);
        return acum;
    }
}

let app = new App();

//Demostracion de la funcion factorial.
console.log(app.factorial(5));

//Demostracion de la funcion convertirAString.
console.log(app.convertirAString(5));

//Demostracion de la funcion obtenerDivisibles.
console.log(app.obtenerDivisibles(6));