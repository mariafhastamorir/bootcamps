import { Course } from "src/courses/entities/course.entity";
import { Review } from "src/reviews/entities/review.entity";
import { User } from "src/users/entities/user.entity";
import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity('bootcamps')

export class Bootcamp {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({
        type:'varchar',
        length: 30
    })
    name: string;

    @Column({
        type:'integer'
    })
    phone: string;

    @Column({
        type:'text',
        nullable: true
    })
    address: string;

    @Column({
        type:'text'
    })
    topics: string;

    @Column({
        type:'double',
        name: 'average_rating'
    })
    averageRating: number;

    @Column({
        type:'timestamp',
        default: () => 'CURRENT_TIMESTAMP',
        name: 'create_at'
    })
    createAt: Date;

    @OneToMany(() => Course,
              (course: Course) => course.bootcamp)
    courses: Course[]

    @OneToMany(() => Review,
               (review: Review) => review.bootcamp)
    reviews: Review[]

    @ManyToOne(() => User,
                (user: User) => user.bootcamp )
    user: User[]
}
