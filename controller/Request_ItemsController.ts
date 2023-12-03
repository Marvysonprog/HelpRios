import { AppDataSource } from "../db/data-source"
import { NextFunction, Request, Response } from "express"
import { Client } from '../Models/Request_Items';

export class Request_ItemsController {

    private Request_ItemsRepository = AppDataSource.getRepository(RequestItems)

    async all(request: Request, response: Response, next: NextFunction) {
        return this.Request_ItemsRepository.find()
    }

    async one(request: Request, response: Response, next: NextFunction) {
        const id = parseInt(request.params.id)


        const requestItems = await this.Request_ItemsRepository.findOne({
            where: { id }
        })

        if (!requestItems) {
            return "unregistered Request Items"
        }
        return requestItems
    }

    async save(request: Request, response: Response, next: NextFunction) {
        const { id, firstName, lastName, age } = request.body;

        const requestItems = Object.assign(new RequestItems(), {
            id,
            firstName,
            lastName,   
            age
        })

        return this.Request_ItemsRepository.save(requestItems)
    }

    async remove(request: Request, response: Response, next: NextFunction) {
        const id = parseInt(request.params.id)

        let requestItemsToRemove = await this.Request_ItemsRepository.findOneBy({ id })

        if (!requestItemsToRemove) {
            return "this Request Items not exist"
        }

        await this.Request_ItemsRepository.remove(requestItemsToRemove)

        return "Request Items has been removed"
    }

}