export default class App {
    factorial(numero){
        let fact = numero;
        for(let i = numero; i > 1; i--){
            fact = fact * (i-1);
        }
        return fact;
    }
}

let app = new App();

//Demostracion de la funcion factorial.
console.log(app.factorial(5));