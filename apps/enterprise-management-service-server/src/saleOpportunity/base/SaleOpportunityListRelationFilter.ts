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
import { SaleOpportunityWhereInput } from "./SaleOpportunityWhereInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";

@InputType()
class SaleOpportunityListRelationFilter {
  @ApiProperty({
    required: false,
    type: () => SaleOpportunityWhereInput,
  })
  @ValidateNested()
  @Type(() => SaleOpportunityWhereInput)
  @IsOptional()
  @Field(() => SaleOpportunityWhereInput, {
    nullable: true,
  })
  every?: SaleOpportunityWhereInput;

  @ApiProperty({
    required: false,
    type: () => SaleOpportunityWhereInput,
  })
  @ValidateNested()
  @Type(() => SaleOpportunityWhereInput)
  @IsOptional()
  @Field(() => SaleOpportunityWhereInput, {
    nullable: true,
  })
  some?: SaleOpportunityWhereInput;

  @ApiProperty({
    required: false,
    type: () => SaleOpportunityWhereInput,
  })
  @ValidateNested()
  @Type(() => SaleOpportunityWhereInput)
  @IsOptional()
  @Field(() => SaleOpportunityWhereInput, {
    nullable: true,
  })
  none?: SaleOpportunityWhereInput;
}
export { SaleOpportunityListRelationFilter as SaleOpportunityListRelationFilter };
