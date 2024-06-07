import { Field, InputType } from '@nestjs/graphql';
@InputType()
export class CustomerGroupInputType {
  @Field()
  group: string;

  @Field()
  group1: string;

  @Field()
  group2: string;

  @Field()
  group3: string;

  @Field()
  group4: string;

  @Field()
  group5: string;
}

@InputType()
export class PaymentMethodInputType {
  @Field()
  clientId: string;

  @Field()
  typeCredit: string;

  @Field()
  creditLimit: number;

  @Field()
  creditUsed: number;

  @Field()
  amountAvailable: number;
}

@InputType()
export class UpdateDateInputType {
  @Field()
  date: string;
}

@InputType()
export class ClientInputType {
  @Field()
  address: string;

  @Field()
  blocked: string;

  @Field()
  cellPhone: string;

  @Field()
  channel: string;

  @Field()
  clientId: string;

  @Field()
  country: string;

  @Field(() => CustomerGroupInputType)
  customerGroup: CustomerGroupInputType;

  @Field()
  customerSchema: number;

  @Field()
  distrChan: string;

  @Field()
  division: string;

  @Field()
  fiscalCode1: string;

  @Field()
  fiscalCode2: string;

  @Field()
  frequency: boolean;

  @Field()
  frequencyDays: string;

  @Field()
  idPortfolio: string;

  @Field()
  immediateDelivery: boolean;

  @Field()
  industryCode: string;

  @Field()
  industryCode1: string;

  @Field()
  isEnrollment: boolean;

  @Field()
  name: string;

  @Field()
  name2: string;

  @Field()
  office: string;

  @Field()
  paymentCondition: string;

  @Field(() => [PaymentMethodInputType])
  paymentMethods: PaymentMethodInputType[];

  @Field()
  priceGroup: string;

  @Field()
  priceList: string;

  @Field()
  routeId: string;

  @Field()
  salesOrg: string;

  @Field()
  supplyCenter: string;

  @Field(() => UpdateDateInputType)
  updateDate: UpdateDateInputType;

  @Field()
  vendorGroup: string;
}
