import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { minimunSkill } from "../enum/minimun.skill.enum";
import { Bootcamp } from "src/bootcamps/entities/bootcamp.entity";


@Entity('courses')

export class Course {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({
        type:'varchar',
        length: 50
    })
    title: string;

    @Column({
        type:'text'
    })
    description: string;

    @Column({
        type:'integer'
    })
    weeks: number;

    @Column({
        type:'integer'
    })
    tuition: number;

    @Column({
        type:'enum',
        enum: [ 'Beginner',
                'Intermediate',
                'advanced'
        ],
        name: 'minimun_skill'
    })
    minimunSkill: minimunSkill

    @Column({
        type:'timestamp',
        default: () => 'CURRENT_TIMESTAMP',
        name:'create_at'
    })
    createdAt: Date;

    @ManyToOne(() => Bootcamp,
            (bootcamp: Bootcamp) => bootcamp.courses)
    bootcamp: Bootcamp
}
