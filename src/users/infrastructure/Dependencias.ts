
import { CreateCars } from "../application/CreateCars";
import { carsRepositori } from "../infrastructure/ProductoRespository";
import { CarsControllers } from "./CarsControllers";

const productoRes = new carsRepositori();
const createCars = new CreateCars(productoRes)

export const carsControllers = new CarsControllers(createCars)