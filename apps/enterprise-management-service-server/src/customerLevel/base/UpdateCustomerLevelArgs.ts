/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { CustomerLevelWhereUniqueInput } from "./CustomerLevelWhereUniqueInput";
import { ValidateNested } from "class-validator";
import { Type } from "class-transformer";
import { CustomerLevelUpdateInput } from "./CustomerLevelUpdateInput";

@ArgsType()
class UpdateCustomerLevelArgs {
  @ApiProperty({
    required: true,
    type: () => CustomerLevelWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => CustomerLevelWhereUniqueInput)
  @Field(() => CustomerLevelWhereUniqueInput, { nullable: false })
  where!: CustomerLevelWhereUniqueInput;

  @ApiProperty({
    required: true,
    type: () => CustomerLevelUpdateInput,
  })
  @ValidateNested()
  @Type(() => CustomerLevelUpdateInput)
  @Field(() => CustomerLevelUpdateInput, { nullable: false })
  data!: CustomerLevelUpdateInput;
}

export { UpdateCustomerLevelArgs as UpdateCustomerLevelArgs };
