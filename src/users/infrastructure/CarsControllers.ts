
import { Request, Response } from 'express';
import { CreateCars } from '../application/CreateCars';
import { GetCars } from '../application/GetCars';

export class CarsControllers {

    constructor(readonly GetCars: GetCars, readonly CreateCars: CreateCars ) { };

    getcars = async (req: Request, res: Response) => {
        try {
            const data = await this.GetCars.getCars();
            res.status(200).json(data);
        } catch (error) {
            res.status(500).json({ error: "error del servidor" });
        }
    }

    create = async (req: Request, res: Response) => {
        try {
            const { id, nombre, matricula } = req.body
            const dataproducto = await this.CreateCars.create(id, nombre, matricula);
            res.status(200).json(dataproducto)
        } catch (error) {
            res.status(500).json({ error: "error del servidor" })
        }
    }
}
