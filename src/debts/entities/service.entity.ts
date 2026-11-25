import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Debt } from "./debt.entity";

@Entity('Service')
export class ServicesCategory{

    @PrimaryGeneratedColumn()
    id: number;

    @Column({ unique: true })
    name: string;

    @Column({ default: true })
    is_active: boolean;

    @OneToMany(() => Debt, (debt) => debt.category)
    debts: Debt[];
}