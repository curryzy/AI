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
import { ContractCreateNestedManyWithoutSaleOpportunitiesInput } from "./ContractCreateNestedManyWithoutSaleOpportunitiesInput";
import {
  ValidateNested,
  IsOptional,
  IsString,
  MaxLength,
  IsInt,
  Min,
  Max,
} from "class-validator";
import { Type } from "class-transformer";
import { LeadWhereUniqueInput } from "../../lead/base/LeadWhereUniqueInput";

@InputType()
class SaleOpportunityCreateInput {
  @ApiProperty({
    required: false,
    type: () => ContractCreateNestedManyWithoutSaleOpportunitiesInput,
  })
  @ValidateNested()
  @Type(() => ContractCreateNestedManyWithoutSaleOpportunitiesInput)
  @IsOptional()
  @Field(() => ContractCreateNestedManyWithoutSaleOpportunitiesInput, {
    nullable: true,
  })
  contracts?: ContractCreateNestedManyWithoutSaleOpportunitiesInput;

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
    type: () => LeadWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => LeadWhereUniqueInput)
  @IsOptional()
  @Field(() => LeadWhereUniqueInput, {
    nullable: true,
  })
  lead?: LeadWhereUniqueInput | null;

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
  progress?: string | null;

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
  revenueForecast?: number | null;
}

export { SaleOpportunityCreateInput as SaleOpportunityCreateInput };
