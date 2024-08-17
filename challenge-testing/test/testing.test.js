const CarritoDeComprasClass = require("../index");

let newCarrito;
let producto;

beforeEach(() =>{
  newCarrito = new CarritoDeComprasClass();
  producto = {
    producto: "Laptop",
    precio: 300,
    cantidad: 5,
  }

});



describe("Carrito de compras", () => {
  it("que exista", () => {
    expect(typeof CarritoDeComprasClass).toBe("function");
  });
  it("Que esté instanciado", () => {
    expect(newCarrito).toBeInstanceOf(CarritoDeComprasClass);
  });
  it("Que tenga los metodos correspondientes", () => {
    expect(CarritoDeComprasClass.prototype.constructor).toBeDefined();
    expect(CarritoDeComprasClass.prototype.agregarProducto).toBeDefined();
    expect(CarritoDeComprasClass.prototype.calcularTotal).toBeDefined();
    expect(CarritoDeComprasClass.prototype.aplicarDescuento).toBeDefined();
  });
});

describe("el constructor de Carrito de compras ", ()=> {
  it("debe inicializarse como un array vacio", ()=> {
    expect(newCarrito.listaCompra).toEqual([])
  })
})

describe("agregar producto", () => {
  it("pushea a la lista",() => {
    newCarrito.agregarProducto(producto)
    expect(newCarrito.listaCompra).toContain(producto);
  })
})

describe("calcula el total de los productos",()=>{
  it("suma el precio de cada producto del array", ()=>{
    newCarrito.agregarProducto(producto)
    expect(newCarrito.calcularTotal()).toBe(1500)
  })
}
)

describe("El metodo descuento", ()=>{
  it("aplica el porcentaje correctamente", () => {
    newCarrito.agregarProducto(producto)
    expect(newCarrito.aplicarDescuento(50)).toBe(750)
    expect(newCarrito.aplicarDescuento(10)).toBe(1350)
    expect(newCarrito.aplicarDescuento(100)).toBe(0)
  })
})