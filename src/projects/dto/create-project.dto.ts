import { IsArray, IsDate, IsEnum, IsNumber, IsOptional, IsPositive, IsString, ValidateNested } from "class-validator";
import { ProjectStatus } from "../enums/projects-status.enum";
import { PaymentModality } from "../enums/projects-payments.enum";
import { Type } from "class-transformer";
import { CreateProjectDetailDto } from "./create-project-details.dto";

export class CreateProjectDto {

    @IsNumber()
    @IsPositive()
    sheet: number;

    @IsString()
    title: string;

    @IsString()
    work_place: string;

    @IsString()
    assignee: string;

    @IsDate()
    date: Date;

    @IsEnum(ProjectStatus)
    status: ProjectStatus = ProjectStatus.PENDING;

    @IsEnum(PaymentModality)
    payment_modality: PaymentModality;

    @IsNumber()
    total_net: number;

    @IsString()
    @IsOptional()
    pdf_path? : string

    @IsOptional()
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => CreateProjectDetailDto)
    details?: CreateProjectDetailDto[];

    
}
