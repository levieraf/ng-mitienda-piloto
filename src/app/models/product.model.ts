export class Product {
    id: number;
    nombre: string;
    sku: string;
    descripcion: string;

    constructor(id: number, nombre: string, sku: string, descripcion: string) {
        this.id = id;
        this.nombre = nombre;
        this.sku = sku;
        this.descripcion = descripcion;
    }
}