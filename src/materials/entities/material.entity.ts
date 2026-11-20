import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";


@Entity('Material')
export class Material {
    
    @PrimaryGeneratedColumn('uuid')
    id: string;
    
    @Column('int',
        {unique: true}
    )
    sheet: number;
    
    @Column('text')
    tittle: string
    
    @Column('date')
    date: Date
    
    @Column('text')
    assignee: string;
    
    @Column('int',
        {unique: true}
    )
    numItem: number;
    
    @Column('text')
    description: string;
    
    @Column('text')   // UNIDAD SE NECESITA PREGUNTAR SOBRE PARA QUE SIRVE , POSIBLE ENUM
    unity: string;  
    
    @Column('int')
    amount: number;
    
    @Column('int')
    unitPrice: number;
    
    @Column('int')
    total: number;
}
