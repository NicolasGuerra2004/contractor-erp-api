import { Column, CreateDateColumn, Entity, JoinColumn, ManyToMany, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { Project } from "./project.entity";


@Entity('ProjectDetails')
export class ProjectDetails {
   
    @PrimaryGeneratedColumn('uuid')
    id: string;
    
    @Column('int')
    item_number: number;

    @Column('text')
    description: string;

    @Column('int')
    unit: number;

    @Column('int')
    quantity: number;

    @Column('int')
    unit_price: number;

    @Column('int')
    total: number;

    @CreateDateColumn({ type: 'timestamptz' }) 
    created_at: Date;
        
    @UpdateDateColumn({ type: 'timestamptz' })
    updated_at: Date;

    @ManyToOne(
        () => Project,
        (project) => project.projectDetails,
    )
    @JoinColumn({ name: 'project_id' })
    project: Project;

}