import { Producto } from "./Cars-Producto";
export interface ProductoRepository {
    GetCars(id: number, nombre: string, matricula: string): Promise<Producto[] | null>;
    create(id: number, nombre: string, matricula: string): Promise<Producto>;
}