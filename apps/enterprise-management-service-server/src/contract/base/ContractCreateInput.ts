/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import {
  IsString,
  MaxLength,
  IsOptional,
  ValidateNested,
  IsDate,
} from "class-validator";
import { SaleOpportunityWhereUniqueInput } from "../../saleOpportunity/base/SaleOpportunityWhereUniqueInput";
import { Type } from "class-transformer";

@InputType()
class ContractCreateInput {
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
  contractDetails?: string | null;

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
  customer?: string | null;

  @ApiProperty({
    required: false,
    type: () => SaleOpportunityWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => SaleOpportunityWhereUniqueInput)
  @IsOptional()
  @Field(() => SaleOpportunityWhereUniqueInput, {
    nullable: true,
  })
  saleOpportunity?: SaleOpportunityWhereUniqueInput | null;

  @ApiProperty({
    required: false,
  })
  @IsDate()
  @Type(() => Date)
  @IsOptional()
  @Field(() => Date, {
    nullable: true,
  })
  validityPeriod?: Date | null;
}

export { ContractCreateInput as ContractCreateInput };
