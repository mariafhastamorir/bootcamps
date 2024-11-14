import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('users')

export class User {
    @PrimaryGeneratedColumn()
    id:number;

    @Column({
        type:'varchar',
        length: 50
    })
    name: string;

    @Column({
        type:'text'
    })
    email: string;

    @Column({
        type:'varchar',
        length: 20
    })
    role: string;

    @Column({
        type:'varchar',
        length: 50
    })
    password:string;
}
