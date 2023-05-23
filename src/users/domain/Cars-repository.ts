import { Producto } from "./Cars-Producto";
export interface ProductoRepository {
    create(id: number, nombre: string, matricula: string): Promise<Producto>;
    getCars(): Promise<Producto[] | null>;
}