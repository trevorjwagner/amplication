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
import { EnterpriseWhereInput } from "./EnterpriseWhereInput";
import { IsOptional, ValidateNested, IsInt } from "class-validator";
import { Type } from "class-transformer";
import { EnterpriseOrderByInput } from "./EnterpriseOrderByInput";

@ArgsType()
class EnterpriseFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => EnterpriseWhereInput,
  })
  @IsOptional()
  @ValidateNested()
  @Field(() => EnterpriseWhereInput, { nullable: true })
  @Type(() => EnterpriseWhereInput)
  where?: EnterpriseWhereInput;

  @ApiProperty({
    required: false,
    type: [EnterpriseOrderByInput],
  })
  @IsOptional()
  @ValidateNested({ each: true })
  @Field(() => [EnterpriseOrderByInput], { nullable: true })
  @Type(() => EnterpriseOrderByInput)
  orderBy?: Array<EnterpriseOrderByInput>;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsOptional()
  @IsInt()
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  skip?: number;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsOptional()
  @IsInt()
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  take?: number;
}

export { EnterpriseFindManyArgs as EnterpriseFindManyArgs };
