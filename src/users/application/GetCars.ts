import { carsRepositori } from "../infrastructure/ProductoRespository";

export class GetCars {

    constructor(readonly carsRepositori: carsRepositori) { }

    async getCars() {
        return this.carsRepositori.GetCars()
            .then((carsRepositori) => {
                console.log(carsRepositori);
                return carsRepositori;
            }).catch((error) => {
                console.log(error);
            });
    }
}
