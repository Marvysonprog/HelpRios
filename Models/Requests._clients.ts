import { CharacterEncoding } from "crypto"
import "reflect-metadata"
import { Request_items } from "./Request_items"
import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm"

@Entity('Chamados')
export class Requests_clients {

    @PrimaryGeneratedColumn()
    id: number

    @Column({ type: "int" })
    id_client:  number

    @Column({ type: "date" })
    data_abertura: Date

    @OneToMany(() => Request_items, (requisItem) => requisItem.requests_clients)
    requisItem: Request_items[]

}