
// guardamos en una variable el nombre de la persona
const name = 'Gisela';
const age = 28;
const eyesColor = 'brown';
const hairColor = 'brown';
const food = 'pizza';
const isMarried = false;
const isStudent = true;

console.log('Mi nombre es ' + name + ' y tengo ' + age + ' años');

//guardamos en un objeto las propiedades de la persona
let person = {
    name:'Gisela',
    age: 28,
    eyesColor: 'brown',
    hairColor: 'brown',
    food: 'pizza',
    isMarried: false,
    isStudent: true
};

//guardamos en un array las propiedades de la persona con dos objetos
const person2=[ {
    name:'Gisela',
    age: 28,
    eyesColor: 'brown',
    hairColor: 'brown',
    food: 'pizza',
    isMarried: false,
    isStudent: true
},{
    name:'Carlos',
    age: 43,
    eyesColor: 'brown',
    hairColor: 'brown',
    food: 'pizza',
    isMarried: false,
    isStudent: true
}];

const pensamientoGisela=['tengo', 'una', 'habilidad', 'fenomenal', 'para','enfrentar', 'cualquier', 'cosa' ];


imprimir = (pensamientoGisela) => {

    let meditacion ='';
    
   
     pensamientoGisela.forEach(element => {
        meditacion=meditacion +element+' ';
        
        });

  return meditacion;
}


const arrayPalabras = ['hola', 'como', 'estas'];
//console.log('Mi nombre es ' + person.name + ' y tengo ' + person.age + ' años');

console.log('Mi nombre es 2 ' + person2[0].name + ' y tengo ' + person2[0].age + ' años');

console.log('Mi nombre es 2 ' + person2[1].name + ' y tengo ' + person2[1].age + ' años');

console.log('Me gusta comer ' + person.food);

for (var i = 0; i < person2.length; i++) {
    console.log(person2[i].name);
}

person2.forEach(element => {
   console.log(element.name);  
});

console.log('meditacion__ ',imprimir(pensamientoGisela));