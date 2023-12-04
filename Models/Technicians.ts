import { CharacterEncoding } from "crypto"
import "reflect-metadata"
import { Entity, PrimaryGeneratedColumn, Column } from "typeorm"

@Entity()
export class Technicians {

    @PrimaryGeneratedColumn()
    id: number

    @Column({ type: "varchar" })
    firstName:  string

    @Column({ type: "varchar" })
    lastName: string

    @Column({ type: "int" })
    age: number

    @Column({ type: "int" })
    dateOfBirth: number

    @Column({ type: "int" })
    cpf: number

    @Column({ type: "int" })
    rg: number

    @Column({ type: "varchar" })
    address: string

    @Column({ type: "varchar" })
    nationality: string

    @Column({ type: "int" })
    fone: number

}