export class Volquete {
    _id?: string;
    numero: number;
    cliente: string;
    precio: number;
    cantidad: number;
    tamaño: string;
    chofer: string;
    ubicacion: string;

    constructor(numero: number, cliente: string, precio: number, cantidad: number, tamaño: string, chofer: string, ubicacion: string) {
        this.numero = numero;
        this.cliente = cliente;
        this.precio = precio;
        this.cantidad = cantidad;
        this.tamaño = tamaño;
        this.chofer = chofer;
        this.ubicacion = ubicacion;
    }
}