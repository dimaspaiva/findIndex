// Array de objetos con valores representativos
const itens = [
  { n: 1, m: 2 },
  { n: 2, m: 4 },
  { n: 3, m: 8 },
  { n: 4, m: 16 },
  { n: 5, m: 32 }
];

// Variável do valor de N a ser encontrado
const nSearch = 1;
const mSearch = 8;

// Busca pelo index do item 1 passado
const i1 = itens.findIndex((item, index) =>
  item.n === nSearch ? index : null
); // retorna -1

// Busca pelo index do item 2 passado
const i2 = itens.findIndex((item, index) =>
  item.m === mSearch ? index : null
); // retorna 2

// Removendo item que teria o valor n = 1
itens.splice(i1, 1); // Remove o 5º item erroneamente

// Removendo o item que teria valor m = 8
itens.splice(i2, 1); // Remove o 3º item corretamente

console.log(`Index para n == ${nSearch} : ${i1}`);
console.log(`Index para m == ${mSearch} : ${i2}`);
