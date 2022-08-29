const fs = require('fs');

class Contenedor{
    constructor(name){
        this.name = name;
    }

    async save(data){
        try{
            let contentido = await fs.promises.readFile(`./${this.name}`,'utf-8');
            let contenidojson = JSON.parse(contentido);
            let lastIndex = contenidojson.length - 1;
            let lastId = contenidojson[lastIndex].id

            data.id = lastId + 1;
            let id = data.id
            contenidojson.push(data);
            await fs.promises.writeFile(`./${this.name}`, JSON.stringify(contenidojson))

            return id;
        }

        catch(error){
            console.log(error);
        }

    
    }

    async getById(id){
        try{
            let contentido = await fs.promises.readFile(`./${this.name}`,'utf-8');
            let contenidojson = JSON.parse(contentido);

            let dataArray 
            contenidojson.forEach(element => {
                if(element.id == id){
                    dataArray = element
                }
            });

            return dataArray;
        }
        catch(error){
            console.log(error);
        }

    }

    async getAll(){
        try {
            let contentido = await fs.promises.readFile(`./${this.name}`,'utf-8');
            let contenidojson = JSON.parse(contentido);
            return contenidojson;
        }
        catch (error) {
            console.log(error);
        }
      
    }

    async deleteById(id){
        try {
            const arry = await this.getAll();
            let match = arry.find(element => element.id === id);
            if (match == undefined){
                return console.log('Eror ID')
            }
            else{
                let idDelete = arry.indexOf(match);
                arry.splice(idDelete, 1);
                await fs.promises.writeFile(`./${this.name}`,JSON.stringify(arry));
            }
        }
         catch (error) {
            console.log(error);
        }

    }

    async deleteAll(){
        try {
            let contentido = await fs.promises.readFile(`./${this.name}`,'utf-8');
            let contenidojson = JSON.parse(contentido);

        }
        catch (error) {
            
        }

    }

    
}

let contenedor = new Contenedor('productos.json');

let newInfo = {
    "id": 1,
    "title": "malvoro",
    "price": 450.50
}

//  contenedor.save(newInfo).then(res => {
//      console.log(res);
//  });


// contenedor.getById(3).then(res => {
//     console.log(res);
// });

// contenedor.getAll().then(res => {
//     console.log(res);
// });

contenedor.deleteAll().then(res => {
    console.log(res);
});