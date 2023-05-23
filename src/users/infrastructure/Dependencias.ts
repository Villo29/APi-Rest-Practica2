
import { CreateCars } from "../application/CreateCars";
import { CarsRepository } from "../infrastructure/ProductoRespository";
import { CarsControllers } from "./CarsControllers";
import { GetCars } from "../application/GetCars";

const productoRes = new CarsRepository();
const createproductos = new CreateCars(productoRes);
const getCars = new  GetCars (productoRes);


export const carsControllers = new CarsControllers(getCars, createproductos)
