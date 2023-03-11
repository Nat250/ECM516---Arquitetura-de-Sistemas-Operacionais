//funções


// const dobro = valor => valor * 2
// console.log(dobro(2))

// const ehPar = (n) =>
//   n % 2 === 0


console.log(ehPar(3))

// const hello = () => console.log("Hello")
// hello()
// console.log(hello()) //Devolve undefined

// const teste = (a, b, c) => {return a * b * c} //Forma opcional: Sem chave e sem return, o return fica implícito
// console.log(teste(1, 2, 3))
// a =>{console.log(a)}
// (a, b) => {console.log(a + b)}


//valor padrão para um parâmetro
// const triplo = function(n = 5){
//     return n*3
// }
// console.log(triplo())
// console.log(triplo(7))

// const dobro = function (n){
//     return 2 * n
// }
// const res = dobro(5)
// const res2 = dobro(15)
// console.log(res)

// function soma(a, b){
//     return a + b
// }
// console.log(soma(2, 3))
// function hello(){
//     console.log('hello')
// }
// hello()

// function hello(nome){
//     console.log('Hello ' + nome)
// }
// hello('Flavia')

// public class Teste{
//   public void hello(){

//   }
//   public void hello(){

//   }
// }

// Teste t = new Teste();
// t.hello();

// const valores = [1, 2, 3, 4]
// const soma = valores.reduce((ac, v) => {return ac + v})
// console.log(soma)

// const nomes = ['Ana Maria', 'Antonio', 'Rodrigo', 'Alex', 'Cristina']
// const letrasIniciais = nomes.map((nome) => {return nome.chatAt(0)})
// console.log(letrasIniciais)

// const numeros = [1, 2, 3, 4, 5]
// console.log(numeros.map((n) => {return n * n}))
//[1, 2, 3, 4, 5] => [1, 4, 9, 16, 25]

// const resultado = nomes.filter((nome) => {return nome.startsWith("A")}) //Exemplo de filter
// console.log(resultado)
//mapeamento
//['Ana','Pedro'] => ['A','P']

// const n1 = 'Flavia'
// const n2 = "Rodrigo"
// const n3 = `Silvia`

//filter
//arrow function
// const teste = () => {console.log("Minha arrow function")} //Exemplo de arrow function
// teste()

// const a = 1

// function soma(a, b){
//     return
//      a + b; //funciona assim em java e c
// }
// console.log(soma(2,3))

// v = [2, 'abc', true]

//1.5 vetores
// v1 = []
// v1[0] = 3.4
// v1[10] = 2
// console.log(v1)
// for (let i = 0; i < v1.length; i++)
//   console.log(v1[i])


// console.log(true == 1)
// console.log(1 == [1])
// console.log(null == null)
// console.log(null == undefined)
// console.log([] == false)
// console.log([] == [])
// console.log(new Object() == new Object())


// console.log(1 == 1)
// console.log(1 == "1")
// console.log(1 === 1)
// console.log(1 === '1')


// const n1 = 2
// const n2 = '3'
// //coerção implícita
// const n3 = n1 + n2
// //coerção explícita
// const n4 = n1 + Number(n2)
// int a;
// let a

// var a;

// @Deprecated

// Thread.stop()
// var idade = 18
// // console.log ("Oi, " + nome)
// if (idade >= 18){
//   let nome = "João"//içamento hoist
//   console.log (nome + ", você pode dirigir")
// }
// console.log("Até mais, " + nome)


// var linguagem = "Javascript"
// console.log ("Aprendendo " + linguagem)
// var linguagem = "Java"
// console.log("Aprendendo " + linguagem)


// var endereco = "Rua C"
// console.log(endereco)
// endereco = "Rua B"
// console.log(endereco)
// console.log(typeof(endereco))

//ECMAScript2015
//const, let, var
// let a = 2
// let b = "abc"
// console.log(typeof(b))
// b = 12
// console.log(typeof(b))
// b = true
// console.log(typeof(b))
// const nome1 = "Ana"
// const nome2 = 'Pedro'
// const nome3 = `José`

// console.log(typeof(nome1))
// console.log(typeof(nome2))
// console.log(typeof(nome3))

// nome1 = "João"

//REPL: Read, Evaluate, Print, Loop