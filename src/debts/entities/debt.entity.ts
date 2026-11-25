import { text } from "stream/consumers";
import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { ServicesCategory } from "./service.entity";

@Entity('Debt')
export class Debt {

    @PrimaryGeneratedColumn('uuid')
    id: string;

    @ManyToOne(
        () => ServicesCategory, 
        (category) => category.debts, 
        {nullable: false,}
    )
    @JoinColumn({ name: 'category_id' })
    category: ServicesCategory;

    @Column('text')
    period: string

    @Column('date')
    due_date: Date;

    @Column('int')
    amount: number;

    @Column('boolean')
    is_paid: boolean;

    @Column('text')
    receipt_path: string;

    @Column('text')
    Description: string;

    @CreateDateColumn({ type: 'timestamptz' }) 
    created_at: Date;
            
    @UpdateDateColumn({ type: 'timestamptz' })
    updated_at: Date;
}
