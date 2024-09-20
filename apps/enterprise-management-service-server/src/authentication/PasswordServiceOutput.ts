import { ObjectType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { Type } from "class-transformer";

@ObjectType("PasswordServiceOutputObject")
class PasswordServiceOutput {
    @Field(() => String)
    @ApiProperty({
        required: true,
        type: () => String
    })
    @Type(() => String)
    hashedPassword!: string;
}

export { PasswordServiceOutput as PasswordServiceOutput };