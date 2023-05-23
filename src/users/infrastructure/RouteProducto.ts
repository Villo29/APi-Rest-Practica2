import express from "express"
import { carsControllers } from "./Dependencias";
export const routes = express.Router();


routes.post('/', carsControllers.create.bind(carsControllers));
routes.get('/', carsControllers.getcars.bind(carsControllers))