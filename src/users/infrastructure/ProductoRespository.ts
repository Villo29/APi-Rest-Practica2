import { QueryError } from 'mysql2'
import { database } from './Database'
import { Producto } from '../domain/Cars-Producto'
import { ProductoRepository } from "../domain/Cars-repository"



export class CarsRepository implements ProductoRepository {
  
  async getCars(): Promise<Producto[] | null> {
    const mysql = new database();
    return await new Promise((resolve, reject) => {
        mysql.connection.query("SELECT * FROM Estacionamiento.Autos", (error: QueryError, rows: Producto[]) => {
            if (error) {
                reject(error);
            } else {
                resolve(rows);
            }
        });
    });
};

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
