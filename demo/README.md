# ts-automapper demo

# install & launch demo project

```bash
$ npm i
$ npm start
```

Project will try to transfrom following ugly data:

```json
{
  "first_name": "     Anthony",
  "last_name": "MADEiN83  ",
  "age": "28",
  "address": "Somewhere",
  "postal": "068006793583750305839",
  "town": "Cagnes-sur-Mer",
  "countryName": "France",
  "phone": "123456789012345678901234567890",
  "emailAddress": "contact@me.io"
}
```

To this beautiful auto-generated object:

```json
{
  "identity": {
    "firstName": "Anthony",
    "lastName": "MADEiN83",
    "age": 28
  },
  "contact": {
    "address": "Somewhere",
    "postalCode": "06800",
    "town": "Cagnes-sur-Mer",
    "country": {
      "name": "France"
    },
    "phone": "1234567890",
    "email": "contact@me.io"
  }
}
```

## how it works

First, you need at least two interfaces :

- first one will be your `input` data (like raw data from a form)
- second should be your `output` data (like object you want to save in your favorite database)

Let's create the `input` interface:

```ts
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
```

And the `output` interface:

```ts
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
```

Now, we will define the mapping between these two.
Start to create a new mapping definition with an unique key:

```ts
AutoMapper.create<IPersonInput, IPerson>("YOUR_KEY");
```

It simply creates an empty mapping instance for now. We'll add all field's mapping you want, like that:

```
AutoMapper.create<IPersonInput, IPerson>("personInput_person")
  .map(
    input => input.first_name,
    output => output.identity.firstName,
    {
      operation: p => p.trim()
    }
  )
```

We can run the mapping!

```js
const output = AutoMapper.exec<IPersonInput, IPerson>(
  "personInput_person",
  intput
);

console.log(output);
```

```json
{
  "identity": {
    "firstName": "Anthony",
    "lastName": "MADEiN83",
    "age": 28
  },
  "contact": {
    "address": "Somewhere",
    "postalCode": "06800",
    "town": "Cagnes-sur-Mer",
    "country": {
      "name": "France"
    },
    "phone": "1234567890",
    "email": "contact@me.io"
  }
}
```
