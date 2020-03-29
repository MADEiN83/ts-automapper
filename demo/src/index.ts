import AutoMapper from "ts-automapper";

/*
 * Create dummy interfaces.
 */

interface IPersonInput {
  first_name: string;
  last_name: string;
  age: string;
  address: string;
  postal: string;
  town: string;
  countryName: string;
  phone: string;
  emailAddress: string;
}

interface IPerson {
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
}

/*
 * Configure AutoMapper's mapping.
 */
AutoMapper.create<IPersonInput, IPerson>("personInput_person")
  .map(
    input => input.first_name,
    output => output.identity.firstName,
    {
      operation: p => p.trim()
    }
  )
  .map(
    input => input.last_name,
    output => output.identity.lastName,
    {
      operation: p => p.trim()
    }
  )
  .map(
    input => input.age,
    output => output.identity.age,
    {
      type: "number"
    }
  )
  .map(
    input => input.address,
    output => output.contact.address
  )
  .map(
    input => input.postal,
    output => output.contact.postalCode,
    {
      operation: p => p.substr(0, 5)
    }
  )
  .map(
    input => input.town,
    output => output.contact.town
  )
  .map(
    input => input.countryName,
    output => output.contact.country.name
  )
  .map(
    input => input.phone,
    output => output.contact.phone,
    {
      operation: p => p.substr(0, 10)
    }
  )
  .map(
    input => input.emailAddress,
    output => output.contact.email
  );

/*
 * Run mapping.
 */
const uglyData = {
  first_name: "     Anthony",
  last_name: "MADEiN83  ",
  age: "28",
  address: "Somewhere",
  postal: "068006793583750305839",
  town: "Cagnes-sur-Mer",
  countryName: "France",
  phone: "123456789012345678901234567890",
  emailAddress: "contact@me.io"
};

const awesomeData = AutoMapper.exec<IPersonInput, IPerson>(
  "personInput_person",
  uglyData
);

console.log(awesomeData);
