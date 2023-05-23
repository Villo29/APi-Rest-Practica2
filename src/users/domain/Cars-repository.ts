import { vehicle } from "./Cars-Producto";
export interface ProductoRepository {
    create(id: number, nombre: string, matricula: string): Promise<vehicle>;
    getCars(): Promise<vehicle[] | null>;
}