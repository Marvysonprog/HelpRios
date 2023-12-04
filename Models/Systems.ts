import { CharacterEncoding } from "crypto"
import "reflect-metadata"
import { Entity, PrimaryGeneratedColumn, Column } from "typeorm"

@Entity()
export class Systems {

    @PrimaryGeneratedColumn()
    id: number

    @Column({ type: "varchar" })
    typee:  string

    @Column({ type: "varchar" })
    description: string

    @Column({ type: "varchar" })
    financial: string

    @Column({ type: "varchar" })
    stock: string

    @Column({ type: "varchar" })
    humanResources: string

    @Column({ type: "varchar"})
    billsToPay: string

    @Column({ type: "varchar"})
    fiscal: string

}