import { ObjectType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { Type } from "class-transformer";

@ObjectType("JwtStrategyOutputObject")
class JwtStrategyOutput {
    @Field(() => String)
    @ApiProperty({
        required: true,
        type: () => String
    })
    @Type(() => String)
    validatedUser!: string;
}

export { JwtStrategyOutput as JwtStrategyOutput };