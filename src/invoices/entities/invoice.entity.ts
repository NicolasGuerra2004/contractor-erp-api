import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { Project } from "../../projects/entities/project.entity";
import { invoice_status } from "../enums/invoices-status.enum";

@Entity()
export class Invoice {

    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column('int')
    sii_number: number;

    @Column('int')
    installment_number: number;

    @Column('date')
    issue_date: Date;

    @Column({
        type: 'enum',
        enum: invoice_status,
        default: invoice_status.PENDING,
    })
    status: invoice_status;

    @Column('int')
    net_amount: number;

    @Column('int')
    iva_amount: number;

    @Column('int')
    total_amount: number;

    @Column('int')
    credit_note_number: number;

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
