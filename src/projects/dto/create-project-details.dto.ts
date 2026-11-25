import { IsEnum, IsInt, IsNotEmpty, IsOptional, IsString, Min } from "class-validator";
import { UnitType } from "../enums/projects-unity.enum";

export class CreateProjectDetailDto {
  @IsInt()
  @Min(1)
  item_number: number;

  @IsString()
  @IsNotEmpty()
  description: string;

  @IsInt()
  @Min(1)
  quantity: number;

  @IsInt()
  @Min(0)
  unit_price: number;

  @IsInt()
  @Min(0)
  total: number;

  @IsOptional()
  @IsEnum(UnitType)
  unit?: UnitType = UnitType.GL;
}