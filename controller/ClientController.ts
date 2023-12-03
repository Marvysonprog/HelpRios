import { AppDataSource } from "../db/data-source"
import { NextFunction, Request, Response } from "express"
import { Client } from '../Models/Client';

export class ClientController {

    private ClientRepository = AppDataSource.getRepository(Client)

    async all(request: Request, response: Response, next: NextFunction) {
        return this.ClientRepository.find()
    }

    async one(request: Request, response: Response, next: NextFunction) {
        const id = parseInt(request.params.id)


        const client = await this.ClientRepository.findOne({
            where: { id }
        })

        if (!client) {
            return "Cliente não registrado!!!"
        }
        return client
    }

    async save(request: Request, response: Response, next: NextFunction) {
        const { tipo, cpf, cnpj, nome_razao, cep, logradouro, numero, complemento, bairro, cidade, uf, nome_responsavel, fone_responsavel, nome_contato_1, fone_contato_1, nome_contato_2, fone_contato_2 } = request.body;

        const client = Object.assign(new Client(), {
            tipo, 
            cpf, 
            cnpj, 
            nome_razao, 
            cep, 
            logradouro,
            numero,   
            complemento, 
            bairro,     
            cidade, 
            uf,     
            nome_responsavel,     
            fone_responsavel, 
            nome_contato_1, 
            fone_contato_1,     
            nome_contato_2,     
            fone_contato_2
        })

        return this.ClientRepository.save(client)
    }

    async remove(request: Request, response: Response, next: NextFunction) {
        const id = parseInt(request.params.id)

        let clientToRemove = await this.ClientRepository.findOneBy({ id })

        if (!clientToRemove) {
            return "Este cliente não existe!!!"
        }

        await this.ClientRepository.remove(clientToRemove)

        return "O cliente foi removido!!!"
    }

}