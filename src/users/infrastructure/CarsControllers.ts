
import { Request, Response } from 'express';
import { CreateCars } from '../application/CreateCars';
import { GetCars } from '../application/GetCars';

export class CarsControllers {

    constructor(readonly GetCars: GetCars, readonly CreateCars: CreateCars ) { };

    getcars = async (req: Request, res: Response) => {
        try {
            const all = await this.GetCars.GetCars();
            res.status(200).json(all);
        } catch (error) {
            res.status(500).json({ error: "Internal server error" });
        }
    }

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
