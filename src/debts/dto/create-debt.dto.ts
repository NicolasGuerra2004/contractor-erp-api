import { Type } from "class-transformer";
import { IsBoolean, IsDate, IsInt, IsNumber, isString, IsString, Min } from "class-validator";

export class CreateDebtDto {


    @IsInt()
    @Min(1)
    category_id: number;            // relacionarlo en debts.service con service

    @IsString()
    period: string

    @Type(() => Date)
    @IsDate()
    due_date: Date;

    @IsNumber()
    amount: number;

    @IsBoolean()
    is_paid: boolean;

    @IsString()
    description: string;


}   
