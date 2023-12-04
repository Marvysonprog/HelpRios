import { AppDataSource } from "../db/data-source"
import { NextFunction, Request, Response } from "express"
import { Client } from '../Models/Systems';


export class SystemsController {

    private SystemsRepository = AppDataSource.getRepository(Systems)

    async all(request: Request, response: Response, next: NextFunction) {
        return this.SystemsRepository.find()
    }

    async one(request: Request, response: Response, next: NextFunction) {
        const id = parseInt(request.params.id)


        const systems = await this.SystemsRepository.findOne({
            where: { id }
        })

        if (!systems) {
            return "unregistered System"
        }
        return systems
    }

    async save(request: Request, response: Response, next: NextFunction) {
        const { id, typee, description, financial, stock, humanResources, billsToPay, fiscal } = request.body;

        const systems = Object.assign(new Systems(), {
            id,
            typee,
            description,   
            financial,
            stock, 
            humanResources,
            billsToPay, 
            fiscal
        })

        return this.SystemsRepository.save(systems)
    }

    async remove(request: Request, response: Response, next: NextFunction) {
        const id = parseInt(request.params.id)

        let systemsToRemove = await this.SystemsRepository.findOneBy({ id })

        if (!systemsToRemove) {
            return "this system not exist"
        }

        await this.SystemsRepository.remove(systemsToRemove)

        return "system has been removed"
    }

}