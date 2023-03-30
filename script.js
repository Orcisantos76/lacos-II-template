console.log('30/03')
// --------------- PRÁTICA GUIADA ---------------
// Em uma escola, são aplicadas 4 provas por bimestre.
// Tendo como base o array de cada bimestre, crie um programa que mostre a média e a soma das notas de cada bimestre.
// Para esse programa, considere o seguinte formato:
const bimestre1 =[7,8,10,5]
const bimestre2 =[8,10,5,7]
const bimestre3 =[4,7,3,2]
const bimestre4 =[3,8,10,9]

const notasDoAno =[bimestre1,bimestre2,bimestre3,bimestre4]

//console.log(notasDoAno)

// Como saída, o programa deve exibir os valores da média e da soma em uma mensagem parecida com essa:
// "A soma das notas do bimestre 1 é: 40
// A média do bimestre 1 é: 10"
// Exiba a mensagem acima para cada um dos bimestres.
// Dica:  para percorrer arrays dentro de arrays, utilize dois laços!

// for (let i = 0;i<notasDoAno.length;i++){
//   let soma = 0
//   //console.log(notasDoAno[i])
//   for(let j = 0;j<notasDoAno[i].length;j++){
//     console.log(notasDoAno[i][j])
//     soma += notasDoAno[i][j]
//   }
//   console.log(`A soma das notas do bimestre ${i+1} é ${soma}`)//referencia o primeiro for, que percorre notasDoAno
//   console.log(`A média do bimestre ${i+1} é: ${soma/notasDoAno[i].length}`)
// }

//for in
for (let i in notasDoAno){
  const valorBimestre =Number(i)+1
  let soma = 0
  for(let nota of notasDoAno[i]){//notas do ano na posicao i
    soma += nota
  }
  // console.log(`A soma das notas do bimestre ${valorBimestre} é ${soma}`)
  // console.log(`A média do bimestre ${valorBimestre} é: ${soma/notasDoAno[i].length}`)
}

// Utilizando o array de filmes que está no template, complete os exercícios abaixo:



// “Ator/Atriz 1: Lázaro Ramos"
// "Ator/Atriz 2: Leandra Leal"
// "Ator/Atriz 3: Pedro Cardoso”



// --------------- EXERCÍCIO DE FIXAÇÃO ---------------
const filmes = [
  {
    titulo: 'O Auto da Compadecida',
    ano: 2000,
    diretor: 'Guel Arraes',
    elenco: [
      'Selton Mello',
      'Mateus Nachtergaele',
      'Marco Nanini',
      'Fernanda Montenegro',
    ],
  },
  {
    titulo: 'Carandiru',
    ano: 2001,
    diretor: 'Hector Babenco',
    elenco: [
      'Wagner Moura',
      'José Carlos Vasconcelos',
      'Ailton Graça',
      'Caio Blat',
    ],
  },
  {
    titulo: 'Aquarius',
    ano: 2012,
    diretor: 'Kléber Mendonça Filho',
    elenco: [
      'Sônia Braga',
      'Humberto Carrão',
      'Maeve Jinkings',
      'Bárbara Colen',
    ],
  },
]

// escreva seu código abaixo 👇🏻
// Crie um laço for para exibir o título, o ano e a pessoa diretora dos filmes como uma string:
// Exemplo de saída: “O Homem que copiava, de 2003, dirigido por Jorge Furtado”
for (let i =0; i < filmes.length; i++){
  //dentro de filmes posiçao i pego o .chave-desejada
  console.log(`${filmes[i].titulo}, de ${filmes[i].ano} dirigido por ${filmes[i].diretor}`)
  console.log('-------------------------------')
  //dentro de filmes[], que é filmes na posiçao i, pego .elenco numero de itens(length)
  for (let j = 0; j<filmes[1].elenco.length; j ++){
    for (let k = 0; k<filmes[1].elenco.length; k++){
      //console.log(filmes[k].elenco)
    }

  }
  
}
// b. Crie um laço for dentro do primeiro, para concatenar o elenco numa string:
// 	Exemplo de saída:
// “O Homem que copiava, de 2003, dirigido por Jorge Furtado”

for (let i in filmes){
  console.log(`${filmes[i].titulo}, ${filmes[i].ano}, ${filmes[i].diretor}
  `)// pra chegar no elenco, filmes[indice].elenco é um caminho
  for(let j of filmes[i].elenco){
    console.log(`Ator/Atriz ${j}, elenco`)
  }
}
// array[indice].objeto