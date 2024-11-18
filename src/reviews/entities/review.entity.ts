import { Bootcamp } from "src/bootcamps/entities/bootcamp.entity";
import { User } from "src/users/entities/user.entity";
import { Column, Entity, ManyToMany, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity('reviews')

export class Review {

    @PrimaryGeneratedColumn()
    id: number

    @Column({
        type:'varchar',
        length: 50
    })
    title: string;

    @Column({
        type:'text'
    })
    comment: string;

    @Column({
        type:'integer'
    })
    rating: number;

    @ManyToOne(() => Bootcamp,
               (bootcamp: Bootcamp) => bootcamp.reviews )
    bootcamp: Bootcamp

    @ManyToOne(() => User,
            (user: User) => user.review)
    user: User
}
