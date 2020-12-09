import App from "../src/main";

test("obtenerDivisibles()", () => {
  let myApp = new App();
  let numero = [6, 9, 50];
  let divisible = [4, 3, 6];

  for (let i = 0; i < divisible.length; i++) {
    expect(myApp.obtenerDivisibles(numero[i])).toBe(divisible[i]);
  }
});
