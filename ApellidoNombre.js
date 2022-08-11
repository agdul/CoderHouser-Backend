class Usuario {
    constructor(name, lastname, books, pet){
        this.userName = name;
        this.userLastname = lastname;
        this.userBooks = books;
        this.userPet = pet;
    }
    //Retorna el nombre completo || Utilizar template strings. 
    getFullName (){
        return console.log(`Su nombre es ${this.userName} y se apellida ${this.userLastname}.`);
    }
    //Recibe un nombre de mascota y lo agrega al array
    addPet(newPet){
        this.userPet.push(newPet);
    }
    //Cuenta las mascotas
    countPets(){
        let i = 0;
        this.userPet.forEach(element => ++i);
        //return i;
        return console.log(`Usted tiene ${i} mascotas.`);
    }
    //Muestra los nombres de los libros del usuario
    getBookNames(){
        this.userBooks.forEach(element => console.log(element.title));
    }

};

//Intancia de Creacion de los Objetos  
const user = new Usuario('Abdul','Hamm',[{title : 'Cien anos de soledad', author : 'Garcia Marquez'},{title : 'Relato de un naufrego', author : 'Garcia Marquez'}], ['kml','manilulis']);
const user2 = new Usuario('Oso','Grisly',[{title : '100 bosques en soledad', author : 'Oso Pardo'},{title : 'Relato de un cazador', author : 'Polar Bear'}], ['pinguino','lorito']);
//Testeo de los metodos 
console.log('-------------------------------USUARIOS---------------------------------');
console.log(user);
console.log(user2);
console.log('------------------------------------------------------------------------');
//user 1 
console.log('---------------------------------USER 1---------------------------------');
user.getFullName();
//agregamos una mascota, observece que el la info de arriba muestra los elementos del array sin modificar.
console.log('/* Agregamos 1 mascota */');
user.addPet('Athos');
user.countPets();
console.log( `Libros de ${user.userName} :` );
user.getBookNames();
console.log('--------------------------UPDATE INFO - USER1---------------------------');
console.log(user);
console.log('------------------------------------------------------------------------');
console.log('---------------------------------USER 2---------------------------------');
user2.getFullName();
//agregamos mas mascotas, observece que el la info de arriba muestra los elementos del array sin modificar.
console.log('/* Agregamos 3 mascota */');
user2.addPet('Ardilla');
user2.addPet('Lobo marino');
user2.addPet('Iguana');
user2.countPets();
console.log( `Libros de ${user2.userName} :` );
user.getBookNames();
console.log('--------------------------UPDATE INFO - USER2---------------------------');
console.log(user2);
console.log('------------------------------------------------------------------------');