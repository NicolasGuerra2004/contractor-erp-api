import { Column, CreateDateColumn, Entity, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { Project } from '../../projects/entities/project.entity';


@Entity('Client')
export class Client {

    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column('varchar', 
        { length: 12,
        unique: true }
    )
    rut: string;

    @Column('text')
    name: string;

    @Column('text')
    email: string;

    @Column('int')
    phone: number;

    @CreateDateColumn({ type: 'timestamptz' }) 
    created_at: Date; 

    @UpdateDateColumn({ type: 'timestamptz' })
    updated_at: Date;
    
    @OneToMany(
        () => Project,
        (project) => project.client
    )
    projects: Project[];


    // before update todo realizar comprobracion de rut, numero
}
