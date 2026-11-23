import { IsEmail, IsNumber, IsString, MaxLength, MinLength } from "class-validator";

export class CreateClientDto {

    @IsString()
    @MaxLength(12)
    @MinLength(12)
    rut: string;

    @IsString()
    @MaxLength(15)
    @MinLength(3)
    name: string;

    @IsEmail()      // investigar si hay limite
    email: string;

    @IsNumber()
    @MaxLength(10)
    @MinLength(8)           // hacer autorelleno de numero
    phone: number;




}
