export type PersonInput = {
  first_name: string;
  last_name: string;
  age: string;
  address: string;
  postal: string;
  town: string;
  countryName: string;
  phone: string;
  emailAddress: string;
  date: string;
  cars: { brand: string }[];
  props: Record<string, string | boolean>;
};