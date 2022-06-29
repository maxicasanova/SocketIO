const fs = require('fs');

class Contenedor{
    constructor(nombreArchivo){
        this.nombre = nombreArchivo;
        async function create() {
            try{
                await fs.promises.writeFile(`./${nombreArchivo}.txt`, '[]');
                console.log('Se ha creado un archivo con nombre ' + nombreArchivo)
            } catch(err) {
                console.log('Ha ocurrido un error ' + err);
            }
        };
        create();
    }
    async save(obj) {
        let data  = await fs.promises.readFile(`./${this.nombre}.txt`, 'utf-8');
        let dataArr = JSON.parse(data);

        try {
            dataArr = [...dataArr, obj];
            obj.id = dataArr.length;
            await fs.promises.writeFile(`./${this.nombre}.txt`, JSON.stringify(dataArr));
            console.log(`Se agrego el objeto con el siguiente ID: ${obj.id}`);
            return obj.id;
        } catch (error) {
            console.log(`No se ha podido guardar el objeto: ${error}`);
        }
    }
    async getById(id){
        let data  = await fs.promises.readFile(`./${this.nombre}.txt`, 'utf-8');
        let dataArr = JSON.parse(data);

        try {
            const objeto = dataArr.find(obj => obj.id === id);
            console.log(`Se encontro el objeto: ${objeto.title}`);
            return objeto;
        } catch (error) {
            console.log(`No se encontro el objeto: ${error}`);
            return null;
        }
    }
    async getAll(){
        let data  = await fs.promises.readFile(`./${this.nombre}.txt`, 'utf-8');
        let dataArr = JSON.parse(data);
        console.log(dataArr);
        return dataArr;
    }
    
}

module.exports = Contenedor;