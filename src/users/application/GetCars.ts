import { CarsRepository } from "../infrastructure/ProductoRespository";

export class GetCars {

    constructor(readonly carsRepositori: CarsRepository) { }

    async getCars() {
        return this.carsRepositori.getCars()
            .then((carsRepositori) => {
                console.log(carsRepositori);
                return carsRepositori;
            }).catch((error) => {
                console.log(error);
            });
    }
}
