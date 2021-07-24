export interface IPersonInput {
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
}

export interface IPerson {
  identity: {
    firstName: string;
    lastName: string;
    age: number;
  };
  contact: {
    address: string;
    postalCode: string;
    town: string;
    country: {
      name: string;
    };
    phone: string;
    email: string;
  };
  updatedAt: Date;
}
