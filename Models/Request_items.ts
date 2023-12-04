import { CharacterEncoding } from "crypto"
import "reflect-metadata"
import { Requests_clients } from "./Requests_clients"
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from "typeorm"

@Entity()
export class Request_items {

    @PrimaryGeneratedColumn()
    id: number

    @Column({ type: "int" })
    id_system:  number

    @Column({ type: "varchar" })
    ocorrencia: string

    @ManyToOne(() => Requests_clients, (requests_clients) => requests_clients.requisItem)
    requests_clients: Requests_clients
}