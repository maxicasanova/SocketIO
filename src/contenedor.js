class Contenedor{
    constructor(){
        this.productos = [];
    }
    save(obj) {
        obj.id= this.productos.length + 1;
        this.productos.push(obj);
        return obj
    }
    update(id, obj){
        const index = this.productos.findIndex(p => p.id === Number(id));
        this.productos[index] = {id,...obj};
        return this.productos[index];
    }

    getById(id){
        const object = this.productos.find(p => p.id === Number(id));
        return object ? object : {error: 'producto no encontrado'}
    }

    getAll(){
        return this.productos;
    }

    deleteById(id){
        const index = this.productos.findIndex(p => p.id === id);
        this.productos.splice((index - 1), 1);
    }
}

module.exports = Contenedor;