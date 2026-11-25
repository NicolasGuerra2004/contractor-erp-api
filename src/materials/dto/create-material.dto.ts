import { IsDate, IsNumber, IsPositive, IsString, MaxLength, MinLength } from "class-validator";

export class CreateMaterialDto {

    @IsString()
    @MaxLength(30)
    receipt_number: string;

    @IsString()
    @MaxLength(20)
    @MinLength(3)
    supplier: string;

    @IsString()
    description: string;

    @IsDate()
    purchase_date: Date;

    @IsNumber()
    @IsPositive()
    net_number: number;

    @IsNumber()
    @IsPositive()
    iva_number: number;

    @IsNumber()
    @IsPositive()
    total_number: number;

    @IsString()
    receipt_path: string;

    

}
