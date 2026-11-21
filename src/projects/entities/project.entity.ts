import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { ProjectDetails } from "./projects_details.entity";
import { Client } from "../../clients/entities/client.entity";
import { ProjectStatus } from "../enums/projects-status.enum";
import { PaymentModality } from "../enums/projects-payments.enum";
import { Material } from "../../materials/entities/material.entity";

@Entity('projects')
export class Project {

    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column('int', { unique: true })
    sheet: number;
    
    @Column('varchar')
    title: string;

    @Column('varchar', { nullable: true })
    work_place?: string;

    @Column('varchar', { nullable: true })
    assignee?: string;
    
    @Column('date')
    date: Date;
    
    @Column({
        type: 'enum',
        enum: ProjectStatus,
        default: ProjectStatus.PENDING,
    })
    status: ProjectStatus;
    
    @Column({
        type: 'enum',
        enum: PaymentModality,
        default: PaymentModality.INSTALLMENTS,
    })
    payment_modality: PaymentModality;

    @Column('int', { default: 0 })
    total_cost: number;
    
    @Column('int', { default: 0 })
    general_expenses: number;
    
    @Column('int', { default: 0 })
    utilities: number;  
    
    @Column('int', { default: 0 })
    total_net: number;
    
    @Column('text', { nullable: true })
    pdf_path?: string;

    @CreateDateColumn({ type: 'timestamptz' }) 
    created_at: Date;

    @UpdateDateColumn({ type: 'timestamptz' })
    updated_at: Date;

    @ManyToOne(
        () => Client,
        (client) => client.projects,
        { nullable: false }
    )
    @JoinColumn({ name: 'client_id' })
    client: Client;

    @OneToMany(                         
        () => ProjectDetails,
        (projectDetails) => projectDetails.project,
        { cascade: true, eager: true }
    )
    projectDetails?: ProjectDetails[];

    @OneToMany(
        () => Material,
        (material) => material.project,
    )
    materials: Material[];
}