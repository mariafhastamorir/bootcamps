import { Bootcamp } from "src/bootcamps/entities/bootcamp.entity";
import { Review } from "src/reviews/entities/review.entity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

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

    @OneToMany(() => Bootcamp,
              (bootcamp: Bootcamp) => bootcamp.user)
    bootcamp: Bootcamp[]

    @OneToMany(() =>Review,
              (review: Review) => review.user)
    review: Review[]
}
