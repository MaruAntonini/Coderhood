//Hacer una función que reciba un numero y que retorne verdadero si es par o falso en caso contrario.
//Hacer una función que reciba una serie de palabras separadas por espacios y 
//que imprima la misma frase pero en orden inverso.
//Hacer una función que reciba como parámetro tres números enteros y que lo ordene de mayor a menor.
function par(n) {
    if (n % 2 === 0) {
      return true;
    } else {
      return false;
    }
  }
  
  console.log(par(5)); //false
//invertir alguna frase
function invertirFrase(n) {
    let frase = "";
    for (let i = n.length - 1; i >= 0; i--) {
      frase += n[i];
    }
    return frase;
  }
  
  console.log(invertirFrase("buenas tardes")); 
  //ordenar numeros de menor a mayor
function OrdenarDeMenorAManor(num1, num2, num3) {
    if (num1 < num2 && num1 < num3) {
      if (num2 < num3) {
        console.log(num1, num2, num3);
      } else {
        console.log(num1, num3, num2);
      }
    }
    if (num2 < num1 && num2 < num3) {
      if (num1 < num3) {
        console.log(num2, num1, num3);
      } else {
        console.log(num2, num3, num1);
      }
    }
    if (num3 < num1 && num3 < num2) {
      if (num1 < num2) {
        console.log(num3, num1, num2);
      } else {
        console.log(num3, num2, num1);
      }
    }
  }
  OrdenarDeMenorAManor(5, 3, 1);
  //numero menor
  function minNum(num_1, num_2, num_3) {
    let min = 0;
    if (num_1 > num_2) {
      if (num_3 > num_2) {
        min = num_2;
      } else {
        min = num_3;
      }
    } else {
      if (num_3 > num_1) {
        min = num_1;
      } else {
        min = num_3;
      }
    }
    return min;
  }