/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ObjectType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { Contract } from "../../contract/base/Contract";
import {
  ValidateNested,
  IsOptional,
  IsDate,
  IsString,
  MaxLength,
  IsInt,
  Min,
  Max,
} from "class-validator";
import { Type } from "class-transformer";
import { Lead } from "../../lead/base/Lead";

@ObjectType()
class SaleOpportunity {
  @ApiProperty({
    required: false,
    type: () => [Contract],
  })
  @ValidateNested()
  @Type(() => Contract)
  @IsOptional()
  contracts?: Array<Contract>;

  @ApiProperty({
    required: true,
  })
  @IsDate()
  @Type(() => Date)
  @Field(() => Date)
  createdAt!: Date;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @MaxLength(1000)
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  customer!: string | null;

  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @Field(() => String)
  id!: string;

  @ApiProperty({
    required: false,
    type: () => Lead,
  })
  @ValidateNested()
  @Type(() => Lead)
  @IsOptional()
  lead?: Lead | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @MaxLength(1000)
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  progress!: string | null;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsInt()
  @Min(-999999999)
  @Max(999999999)
  @IsOptional()
  @Field(() => Number, {
    nullable: true,
  })
  revenueForecast!: number | null;

  @ApiProperty({
    required: true,
  })
  @IsDate()
  @Type(() => Date)
  @Field(() => Date)
  updatedAt!: Date;
}

export { SaleOpportunity as SaleOpportunity };
