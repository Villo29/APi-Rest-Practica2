import { ProductoRepository } from "../domain/Cars-repository"


export class CreateCars {
    constructor(readonly productoRepository: ProductoRepository) { }
    async create(id: number, nombre: string, matricula: string) {
        return this.productoRepository.create(id, nombre, matricula)
            .then((createCars) => {
                console.log(createCars);
                return createCars;
            }).catch((error) => {
                console.log(error);
            })

    }
}











