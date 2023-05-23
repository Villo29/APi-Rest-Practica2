import express from "express"
import { carsControllers } from "./Dependencias";
import { CarsControllers } from "./CarsControllers";
export const routes = express.Router();


routes.post('/', carsControllers.create.bind(carsControllers));
routes.get('/'), CarsControllers.getcars.bind(carsControllers)