import { database } from './Database'
import { Producto } from '../domain/Cars-Producto'
import { ProductoRepository } from "../domain/Cars-repository"
import { QueryError } from 'mysql2'

export class carsRepositori implements ProductoRepository {
  getById(id: string): Promise<Producto | null> {
    throw new Error('Method not implemented.');
  }

  async create(id: number, nombre: string,  matricula: string): Promise<Producto> {
    const mysql = new database();
    return await new Promise((resolve, reject) => {
      const sql = `INSERT INTO Estacionamiento.Autos(id,nombre,matricula) VALUES ('${id}','${nombre}','${matricula}')`;
      mysql.connection.query(sql, (error: QueryError, results: Producto) => {
        if (error) {
          reject(error)
        } else {
          resolve(results);
        }
      })
    })
  }
}
