
import { Request, Response } from 'express';
import { CreateCars } from '../application/CreateCars';

export class CarsControllers {

    constructor(readonly CreateCars: CreateCars) { }
    create = async (req: Request, res: Response) => {
        try {
            const { id, nombre, matricula } = req.body
            const dataproducto = await this.CreateCars.createCar(id, nombre, matricula);
            res.status(200).json(dataproducto)
        } catch (error) {
            res.status(500).json({ error: "servidor error" })
        }
    }
}
