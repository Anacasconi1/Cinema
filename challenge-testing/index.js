class CarritoDeCompras {
    constructor() {
        this.listaCompra = [];
    }
    agregarProducto(producto) {
        this.listaCompra.push(producto)
    }
    calcularTotal() {
        const total = this.listaCompra.map(product => product.precio * product.cantidad)
        const reduced = total.reduce((acum, cont) => acum + cont, 0);
        return reduced
    }
    
    aplicarDescuento(descuento){
        const discounter = (this.calcularTotal() * descuento) / 100;
        const total = this.calcularTotal() - discounter;
        return total
        
    }
};

const producto = {
    producto: "Laptop",
    precio: 300,
    cantidad: 5,
}


const nuevoCarro = new CarritoDeCompras;

nuevoCarro.agregarProducto(producto);
nuevoCarro.aplicarDescuento(10)


module.exports =  CarritoDeCompras;