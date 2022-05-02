//alert('ey');
/********EJERS JAVASCRIPT ARROW*********/

// 1. Convierte la siguiente función en una función flecha:
// function saludar() {
//   return "Hola";
// }

const saludar = () => 'Hola';
console.log(saludar);

// 2. Convierte la siguiente función en una función flecha en línea:
// function division(a,b) {
//   return a / b;
// }

const division = (a, b) => a / b;
console.log(division(4, 2));

// 3. Convierte la siguiente función en una función flecha:
// function miNombre(nombre) {
//   return `Mi nombre es ${nombre}`;
// }

const miNombre = (nombre) => `Mi nombre es ${nombre}`;

console.log(miNombre('Pepe'));

// 4. Convierte las siguientes funciones en funciones flecha:

// function test2() {
//   console.log("Función test 2 ejecutada.");
// }
// function test1(callback) {
//   callback();
// }

const test2 = () => console.log('Función test 2 ejecutada.');

const test1 = (callback) => callback();

console.log(test1(test2));

/********EJERS JAVASCRIPT FOREACH*********/
// Utiliza la siguiente array para resolver los próximos ejercicios:

let gente = [
  {
    nombre: 'Jamiro',
    edad: 45,
  },
  {
    nombre: 'Juan',
    edad: 35,
  },
  {
    nombre: 'Paco',
    edad: 34,
  },
  {
    nombre: 'Pepe',
    edad: 14,
  },
  {
    nombre: 'Pilar',
    edad: 24,
  },
  {
    nombre: 'Laura',
    edad: 24,
  },
  {
    nombre: 'Jenny',
    edad: 10,
  },
];

// 5. Crea un array con la gente mayor de 25 años y muéstralo por consola.
let mayor25 = [];
gente.forEach((persona) => {
  if (persona.edad > 25) {
    mayor25.push(persona.nombre);
  }
});

console.log(mayor25);

// 6. Crea un array con la gente que empieza por J.

let empiezaporJ = [];

gente.forEach((persona) => {
  if (persona.nombre[0] === 'J') {
    empiezaporJ.push(persona.nombre);
  }
});

console.log(empiezaporJ);
/**********EJERS MAP*********/

// 7. Map*************************
// Dado el siguiente array, crear otro que sea el resultado de elevar cada número a si mismo:
const numbers = [4, 5, 6, 7, 8, 9, 10];

const elevarAlMismo = numbers.map((value) => {
  return value ** value;
});

console.log(elevarAlMismo);
// Resultado esperado
// [256, 3125, 46656, 823543, 16777216, 387420489, 10000000000]

//8. Dado el siguiente array, generar un segundo array que consiga generar de salida el resultado esperado:
//const foodList = ['Pizza', 'Ramen', 'Paella', 'Entrecot'];

const foodList2 = [
  {
    plato: 'Pizza',
    pais: 'Italia',
  },
  {
    plato: 'Ramen',
    pais: 'Japón',
  },
  {
    plato: 'Paella',
    pais: 'Valencia',
  },
  {
    plato: 'Entrecotte',
    pais: 'sabroso',
  },
];

const arrayComida2 = foodList2.map((location) => {
  if (location.plato === 'Entrecotte') {
    return `Aunque no como carne, el ${location.plato} es ${location.pais} `;
  } else {
    return `Como soy de ${location.pais}, amo comer ${location.plato}`;
  }
});

console.log(arrayComida2);

// const arrayComida = foodList.map((plato) => {
//   const comidayPais = {
//     platoName:
//   };
// });

// console.log(arrayComida);

//Resultado esperado
/* [
    'Como soy de Italia, amo comer Pizza',
    'Como soy de Japón, amo comer Ramen',
    'Como soy de Valencia, amo comer Paella',
    'Aunque no como carne, el Entrecot es sabroso'
   ]
/****/
/******************EJERS FILTER***********************/
// 9. Crea un segundo array que devuelva los impares
const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let numerosImpares = numeros.filter((numero) => numero % 2 !== 0);

console.log(numerosImpares);

// 10. Dado el siguiente array, genera un segundo array que filtre los platos veganos y saque una sentencia como la del ejemplo:
const foodList = [
  {
    name: 'Tempeh',
    isVeggie: true,
  },
  {
    name: 'Cheesbacon burguer',
    isVeggie: false,
  },
  {
    name: 'Tofu burguer',
    isVeggie: true,
  },
  {
    name: 'Entrecot',
    isVeggie: false,
  },
];

const vegano = foodList
  .filter((vegan) => vegan.isVeggie === true)
  .map((vegan) => `Que rico ${vegan.name} me voy a comer!`);
console.log(vegano);

/******************EJERS REDUCE***********************/
// 11. Dado el siguiente array, obtén la multiplicación de todos los elementos del array:

const numerosRedu = [39, 2, 4, 25, 62];

const multi = numerosRedu.reduce((a, b) => a * b);

console.log(multi);
/*********EXTRAS**************************/
/**************************************************/
/*************EJERS MAP************************/
// 12. Dado el siguiente array, crear un segundo array que forme frases como en el ejemplo accediendo a las propiedades del objeto proporcionado:
const staff = [
  {
    name: 'Pepe',
    role: 'The Boss',
    hobbies: ['leer', 'ver pelis'],
  },
  {
    name: 'Ana',
    role: 'becaria',
    hobbies: ['nadar', 'bailar'],
  },
  {
    name: 'Luis',
    role: 'programador',
    hobbies: ['dormir', 'comprar'],
  },
  {
    name: 'Carlos',
    role: 'secretario',
    hobbies: ['futbol', 'queso'],
  },
];

const frase = staff.map((persona) => {
  return `${persona.name} es ${persona.role} y le gusta ${persona.hobbies[0]} y ${persona.hobbies[1]}`;
});
console.log(frase);

// Resultado esperado
/*
    [
      'Pepe es TheBoss y le gusta leer y ver pelis',
      'Ana es becaria y le gusta nadar y bailar',
      'Luis es programador y le gusta dormir y comprar',
      'Ana es becaria y le gusta nadar y bailar',
      'Carlos es secretario y le gusta fútbol y queso'
    ]
    */

/*************EJERS FILTER************************/

// 13. Dado el siguiente array, devolver un array con los nombres de los elementos que valgan más de 300 euros
const inventory = [
  {
    name: 'Mobile phone',
    price: 199,
  },
  {
    name: 'TV Samsung',
    price: 459,
  },
  {
    name: 'Viaje a cancún',
    price: 600,
  },
  {
    name: 'Mascarilla',
    price: 1,
  },
];
// *
//         [
//           'TV Samsung,',
//           'Viaje a Cancún'
//         ]
//       */

const masde300 = inventory
  .filter((dispositivo) => dispositivo.price > 300)
  .map((dispositivo) => `${dispositivo.name}`);

console.log(masde300);

/*************EJERS REDUCE************************/
// 14. Concatena todos los elementos del array con reduce para que devuelva una sola frase
const sentenceElements = [
  'Me',
  'llamo',
  'Vicente',
  'y',
  'quiero',
  'sentir',
  'la',
  'fuerza',
  'con',
  'javascript',
];

// Resultado--> 'Me llamo XX y quiero sentir la fuerza con javascript'

const manifiesto = sentenceElements.reduce((a, b) => `${a} + ${b}`);

console.log(manifiesto);
