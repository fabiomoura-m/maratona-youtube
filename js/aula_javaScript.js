// console.log('Ola mundo')

// VARIÁVEIS COM LET
let nomePessoa = 'Hudson Carolino'
let idade = 45

// VARIAVEIS COM CONST
const nome = 'Maria'

// TIPOS DE DADOS
// "Hudson Carolino" => STRING
// TIPO DE DADO INTEIRO => let numero = 12

// BOOLEAN
// (true => verdadeiro) e (false => falso)

// MAIS SOBRE STRINGS
let primeiroNome = 'Hudson'
let sobrenome = 'Carolino'

// let numero1 = '1'
// let numero2 = 5
// console.log(primeiroNome + sobrenome)
// console.log(numero1 + numero2)

// OPERADORES BÁSICOS
let numero1 = '1'
let numero2 = 5

// console.log(numero1 + numero2)

// (+) SOMA
// (-) SUBTRAÇÃO
// (/) DIVISÃO
// (*) MULTIPLICAÇÃO
// (+=) MAIS IGUAL
// (-=) MENOS IGUAL

// let contador = 0
// console.log(contador)

// contador += 1
// console.log(contador)

// contador += 1
// console.log(contador)

// contador += 1
// console.log(contador)

// ESTRUTURAS CONDICIONAIS
// OPERADORES DE COMPARAÇÃO E / RELACIONAIS
// VERIFICAÇÃO DE IGUALDADE (1 == 1) => TRUE
// VERIFICAÇÃO IGUALDADE/TIPO DE DADO (1 === "1") => FALSE
// VERIFICAÇÃO DE MAIOR ( 1 > 10) => FALSE
// VERIFICAÇÃO DE MENOR ( 1 < 10) => TRUE

// OPERADORES LÓGICOS

// E
// (1 == 1 && 2 == 2) => TRUE
// (1 == 1 && 4 == 2) => FALSE

// let hudson = 'Hudson'
// let idadeHudson = 25

// console.log(hudson == 'Hudson' && idadeHudson == 25)

// OU
// ( 1 == 1 || 4 == 2) => TRUE

// NEGAÇÃO
// 1 !== 2 => TRUE
// 1 !== 1 => FALSE
// !(1 === 1) => FALSE

//----------------------------//

//CONDICIONAIS

//SE (TRUE) FAÇA ALGUMA COISA | FAÇA OUTRA COISA

// if (10 >= 10) {
//   console.log('Verdadeiro')
// } else {
//   console.log('False')
// }

//FUNÇÕES

//DECLARANDO FUNÇÃO
// function retornarNomeCompleto() {
//   let nome = 'Hudson'
//   let sobreNome = 'Carolino'
//   let idade = 25
//   let profissão = 'Desenvolvedor'

//   console.log(`Meu nome é: ${nome}`)
//   console.log(`Meu sobrenome é: ${sobrenome}`)
//   console.log(`Minha idade: ${idade}`)
//   console.log(`Minha profissão: ${profissão}`)
// }

// //ESTOU CHAMANDO MINHA FUNÇÃO
// retornarNomeCompleto()

function soma(numero1, numero2) {
  // RECEBER PARÂMETROS
  let resultado = numero1 + numero2
  return resultado
}

let resultadoFuncaoSoma = soma(5, 10) // ARGUMENTOS
// console.log(resultadoFuncaoSoma)

// ESTRUTURA DE REPETIÇÃO

// ARRAY
// let listaNomes = ['Hudson', 'Maria', 'Daniel', 'Nicholas', 'Pedro']
// console.log(listaNomes)

//ALTERANDO O VALOR DE UMA POSIÇÃO
// listaNomes[0] = 'Larissa'
// console.log(listaNomes)

// //ADICIONANDO ITEM
// listaNomes.push('Jardel')
// console.log(listaNomes)

//OBJETO
const Hudson = {
  nome: 'Hudson',
  telefone: '00 000000',
  empresa: 'Kenzie Academy',
  email: 'exemplo@gmail.com'
}

const maria = {
  nome: 'Maria',
  telefone: '00 000000',
  empresa: 'Kenzie Academy',
  email: 'maria@gmail.com'
}

const arrayPessoas = []
arrayPessoas.push(Hudson)
arrayPessoas.push(maria)

// console.log(arrayPessoas[0].email)
