import { AppDataSource } from "../db/data-source"
import { NextFunction, Request, Response } from "express"
import { Client } from '../Models/Request_clients';


export class Request_clientsController {

    private Request_clientsRepository = AppDataSource.getRepository(RequestClients)

    async all(request: Request, response: Response, next: NextFunction) {
        return this.Request_clientsRepository.find()
    }

    async one(request: Request, response: Response, next: NextFunction) {
        const id = parseInt(request.params.id)


        const Requestclients = await this.Request_clientsRepository.findOne({
            where: { id }
        })

        if (!Requestclients) {
            return "unregistered Request Clients"
        }
        return Requestclients
    }

    async save(request: Request, response: Response, next: NextFunction) {
        const { id, firstName, lastName, age } = request.body;

        const Requestclients = Object.assign(new RequestClients(), {
            id,
            firstName,
            lastName,
            age
        })

        return this.Request_clientsRepository.save(Requestclients)
    }

    async remove(request: Request, response: Response, next: NextFunction) {
        const id = parseInt(request.params.id)

        let Request_clientsToRemove = await this.Request_clientsRepository.findOneBy({ id })

        if (!Request_clientsToRemove) {
            return "this Request Clients not exist"
        }

        await this.Request_clientsRepository.remove(Request_clientsToRemove)

        return "Request Clients has been removed"
    }

}