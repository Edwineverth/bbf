import { Field, InputType } from '@nestjs/graphql';
import {
  IsArray,
  IsBoolean,
  IsNumber,
  IsObject,
  IsString,
} from 'class-validator';
@InputType()
export class CustomerGroupInputType {
  @Field()
  @IsString()
  group: string;

  @Field()
  @IsString()
  group1: string;

  @Field()
  @IsString()
  group2: string;

  @Field()
  @IsString()
  group3: string;

  @Field()
  @IsString()
  group4: string;

  @Field()
  @IsString()
  group5: string;
}

@InputType()
export class PaymentMethodInputType {
  @Field()
  @IsString()
  clientId: string;

  @Field()
  @IsString()
  typeCredit: string;

  @Field()
  @IsNumber()
  creditLimit: number;

  @Field()
  @IsNumber()
  creditUsed: number;

  @Field()
  @IsNumber()
  amountAvailable: number;
}

@InputType()
export class UpdateDateInputType {
  @Field()
  @IsString()
  date: string;
}

@InputType()
export class ClientInputType {
  @Field()
  @IsString()
  address: string;

  @Field({ nullable: false })
  @IsString()
  blocked: string;

  @Field()
  @IsString()
  cellPhone: string;

  @Field()
  @IsString()
  channel: string;

  @Field()
  @IsString()
  clientId: string;

  @Field()
  @IsString()
  country: string;

  @Field(() => CustomerGroupInputType)
  @IsObject()
  customerGroup: CustomerGroupInputType;

  @Field()
  @IsNumber()
  customerSchema: number;

  @Field()
  @IsString()
  distrChan: string;

  @Field()
  @IsString()
  division: string;

  @Field()
  @IsString()
  fiscalCode1: string;

  @Field()
  @IsString()
  fiscalCode2: string;

  @Field()
  @IsBoolean()
  frequency: boolean;

  @Field()
  @IsString()
  frequencyDays: string;

  @Field()
  @IsString()
  idPortfolio: string;

  @Field()
  @IsBoolean()
  immediateDelivery: boolean;

  @Field()
  @IsString()
  industryCode: string;

  @Field()
  @IsString()
  industryCode1: string;

  @Field()
  @IsBoolean()
  isEnrollment: boolean;

  @Field()
  @IsString()
  name: string;

  @Field()
  @IsString()
  name2: string;

  @Field()
  @IsString()
  office: string;

  @Field()
  @IsString()
  paymentCondition: string;

  @Field(() => [PaymentMethodInputType])
  @IsArray()
  paymentMethods: PaymentMethodInputType[];

  @Field()
  @IsString()
  priceGroup: string;

  @Field()
  @IsString()
  priceList: string;

  @Field()
  @IsString()
  routeId: string;

  @Field()
  @IsString()
  salesOrg: string;

  @Field()
  @IsString()
  supplyCenter: string;

  @Field(() => UpdateDateInputType)
  @IsObject()
  updateDate: UpdateDateInputType;

  @Field()
  @IsString()
  vendorGroup: string;
}
