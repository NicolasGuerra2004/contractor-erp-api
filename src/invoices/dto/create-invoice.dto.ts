import { IsDate, IsEnum, IsNumber, IsPositive } from "class-validator";
import { invoice_status } from "../enums/invoices-status.enum";

export class CreateInvoiceDto {

    @IsNumber()     // investigar largo y minimo
    sii_number: number;

    @IsNumber()
    @IsPositive()
    installment_number: number;

    @IsDate()
    issue_date: Date;

    @IsEnum(invoice_status)     // revisar mejor metodo
    status: string;

    @IsNumber()
    @IsPositive()
    net_amount: number;

    @IsNumber()
    @IsPositive()
    iva_amount: number;

    @IsNumber()
    @IsPositive()
    total_amount: number;

    @IsNumber()
    @IsPositive()       // todo
    credit_note_number: number;

    

    

    
}
