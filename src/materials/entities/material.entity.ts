import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { Project } from "../../projects/entities/project.entity";


@Entity('Material')
export class Material {
    
    @PrimaryGeneratedColumn('uuid')
    id: string;
    
    @Column('text', { unique: true })
    receipt_number: string;

    @Column('text')
    supplier: string;
    
    @Column('text')
    description: string;

    @Column('date')
    purchase_date: Date;

    @Column('int')
    net_amount: number;

    @Column('int')
    iva_amount: number;

    @Column('int')
    total_amount: number;

    @Column('text')
    receipt_path: string

    @CreateDateColumn({ type: 'timestamptz' }) 
    created_at: Date;
    
    @UpdateDateColumn({ type: 'timestamptz' })
    updated_at: Date;

    @ManyToOne(
        () => Project,
        (project) => project.materials,
    )
    @JoinColumn({ name: 'project_id' })
    project: Project;

}
