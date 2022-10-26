// o que são vetores ou arrays

// como declarar um array
let array = ['string', 1, true];
// deve ser declarado entre colchetes "[]"
console.log(array);

// como um array pode guardar diferentes valores inclusive outros array
// ex: let array = ['string' , 1, true,['array1' ],['array2 ]];

//como acessar o índice de um array
console.log(array[2]); 

// manipulando um array
// forEach - realiza uma função para item do array
array.forEach(function(item, index){console.log(item, index);});

// push - add item no final do array
array.push('novo item');
console.log(array);

//pop - remove o último item do array 
array.pop();
console.log(array);

//shift - remove o primeiro item do array
array.shift();
console.log(array);

//unshift - add item no início do array
array.unshift('novo item');
console.log(array);

//indexOf - retorna o índice de um item do array
console.log(array.indexOf(true));

//slice - remove ou substitui um item por índice
//array.splice(0, 2);
//console.log(array);

//slice - retorna uma parte de um array existente
let novoArray = array.slice(0, 2);
console.log(novoArray);

console.log('---------------------------------------------')
// o que são objetivos
let object ={propriedade1: 'valor1', propriedade2: 'valor2'};
// deve ser declarado entre chaves {}
console.log(object);

//assim como arrays as propriedades de objetos támbem podem guardar quaisquer valores*/
let object2 = {
    string: 'string',
    number: 1,
    boolean:true,
    array: ['array'],
    objectInterno: {objectoInterno: 'objectInterno'}};

//como acessar propriedades de objetos
//usando o ponto "."
console.log(object2.objectInterno);

// desestruturando objeto
let string = object2.string;
let number = object2.number;
let boolean = object2.boolean;  

console.log(string, number, boolean)
