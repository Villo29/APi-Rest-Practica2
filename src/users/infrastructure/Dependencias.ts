
import { CreateCars } from "../application/CreateCars";
import { carsRepositori } from "../infrastructure/ProductoRespository";
import { CarsControllers } from "./CarsControllers";
import { GetCars } from "../application/GetCars";

const productoRes = new carsRepositori();
const createCars = new CreateCars(productoRes)
const getcars = new  GetCars (productoRes);


export const carsControllers = new CarsControllers(createCars, getcars)
