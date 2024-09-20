/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { CustomerInfoWhereUniqueInput } from "../../customerInfo/base/CustomerInfoWhereUniqueInput";
import { ApiProperty } from "@nestjs/swagger";

@InputType()
class CustomerInfoUpdateManyWithoutCustomerLevelsInput {
  @Field(() => [CustomerInfoWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [CustomerInfoWhereUniqueInput],
  })
  connect?: Array<CustomerInfoWhereUniqueInput>;

  @Field(() => [CustomerInfoWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [CustomerInfoWhereUniqueInput],
  })
  disconnect?: Array<CustomerInfoWhereUniqueInput>;

  @Field(() => [CustomerInfoWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [CustomerInfoWhereUniqueInput],
  })
  set?: Array<CustomerInfoWhereUniqueInput>;
}

export { CustomerInfoUpdateManyWithoutCustomerLevelsInput as CustomerInfoUpdateManyWithoutCustomerLevelsInput };
