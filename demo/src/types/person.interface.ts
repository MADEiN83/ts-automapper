export type Person = {
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
};
