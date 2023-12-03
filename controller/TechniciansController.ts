import { AppDataSource } from "../data-source"
import { NextFunction, Request, Response } from "express"
import { Systems } from "../Models/Technicians"


export class TechniciansController {

    private TechniciansRepository = AppDataSource.getRepository(Technicians)

    async all(request: Request, response: Response, next: NextFunction) {
        return this.TechniciansRepository.find()
    }

    async one(request: Request, response: Response, next: NextFunction) {
        const id = parseInt(request.params.id)


        const technicians = await this.TechniciansRepository.findOne({
            where: { id }
        })

        if (!technicians) {
            return "unregistered Technicians"
        }
        return technicians
    }

    async save(request: Request, response: Response, next: NextFunction) {
        const { id, firstName, lastName, age } = request.body;

        const technicians = Object.assign(new Technicians(), {
            id,
            firstName,
            lastName,   
            age
        })

        return this.TechniciansRepository.save(technicians)
    }

    async remove(request: Request, response: Response, next: NextFunction) {
        const id = parseInt(request.params.id)

        let TechniciansToRemove = await this.TechniciansRepository.findOneBy({ id })

        if (!TechniciansToRemove) {
            return "this Technicians not exist"
        }

        await this.TechniciansRepository.remove(TechniciansToRemove)

        return "Technicians has been removed"
    }

}