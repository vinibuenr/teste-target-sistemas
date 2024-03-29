// Exercício Fibonacci

// Variáveis
let numero = parseFloat(prompt(`Informe o número:`))
const resultado = Fibonacci(numero)

// Função de verificação
function Fibonacci(numero) {
    let fib1 = 0;
    let fib2 = 1;
    while (fib2 < numero) {
      [fib1, fib2] = [fib2, fib1 + fib2];
    }
    return fib2 === numero;
  }

  // Estrutura condicional
  if(resultado === true){
    alert(`O número informado pertence a sequência de Fibonacci`)
  } else {
    alert(`O número informado não pertence à sequência de Fibonacci`)
  }
