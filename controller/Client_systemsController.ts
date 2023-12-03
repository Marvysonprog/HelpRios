import { AppDataSource } from "../db/data-source"
import { NextFunction, Request, Response } from "express"
import { Client } from '../Models/Client_systems';


export class Client_systemsController {

    private Client_systemsRepository = AppDataSource.getRepository(Client_Systems)

    async all(request: Request, response: Response, next: NextFunction) {
        return this.Client_systemsRepository.find()
    }

    async one(request: Request, response: Response, next: NextFunction) {
        const id = parseInt(request.params.id)


        const clientSystems = await this.Client_systemsRepository.findOne({
            where: { id }
        })

        if (!clientSystems) {
            return "unregistered Client system"
        }
        return clientSystems
    }

    async save(request: Request, response: Response, next: NextFunction) {
        const { id, firstName, lastName, age } = request.body;

        const clientSystems = Object.assign(new Client_Systems(), {
            id,
            firstName,
            lastName,
            age
        })

        return this.Client_systemsRepository.save(clientSystems)
    }

    async remove(request: Request, response: Response, next: NextFunction) {
        const id = parseInt(request.params.id)

        let clientSystemsToRemove = await this.Client_systemsRepository.findOneBy({ id })

        if (!clientSystemsToRemove) {
            return "this Client system not exist"
        }

        await this.Client_systemsRepository.remove(clientSystemsToRemove)

        return "Client system has been removed"
    }

}