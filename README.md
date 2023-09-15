# ts-automapper [![npm version](https://badge.fury.io/js/ts-automapper.svg)](https://www.npmjs.com/package/ts-automapper) ![npm](https://img.shields.io/npm/dm/ts-automapper) ![npm](https://img.shields.io/npm/dt/ts-automapper) ![npm bundle size](https://img.shields.io/bundlephobia/min/ts-automapper) [![CircleCI](https://circleci.com/gh/MADEiN83/ts-automapper/tree/master.svg?style=svg)](https://circleci.com/gh/MADEiN83/ts-automapper/tree/master)

## Table of Contents

- [Installing](#installing)
  - [Yarn](#via-yarn)
  - [npm](#via-npm)
- [Usage](#usage)
- [Example](#example)
- [API](#api)
  - [create](#create)
  - [apply](#apply)

## Installing

### Via yarn

```bash
$ yarn add ts-automapper
```

### Via npm

```bash
$ npm i ts-automapper
```

## Usage

Before, you had to create a method or utility class in order to convert an object (generally from an API) to another one.

For instance:

```ts
// person.service.ts
const createPerson = (rawPersonFromAPI: RawPerson): Promise<Person> => {
  const person: DTOPerson = {
    fullName = `${rawPersonFromAPI.firstname} ${rawPersonFromAPI.lastname}`;
    firstname = rawPersonFromAPI.firstname.trim();
    lastname = rawPersonFromAPI.lastname.trim().toUpperCase();
    email = rawPersonFromAPI.email.trim().toLowerCase();
    tel = rawPersonFromAPI.tel.replaceAll(" ", "");
    address01 = persrawPersonFromAPIonInput.address01.trim();
    address02 = rawPersonFromAPI.address02.trim();
    postalCode = rawPersonFromAPI.address03.split("_")[0];
    city = rawPersonFromAPI.address03.split("_")[1] || "Saint-Raphaël";
    // Other properties mapping.
  };

  return this.service.createPerson(person);
}
```

## Example

Now, you just need to:

- create a mapping definition (like schema)
- import the schema
- use it! 🦄

Ready?

1. Creating a mapping is quit easy and similar to what you had before

You can map all properties you want. The first argument is an **unique key** to be used to retrieve and apply the schema from **everywhere**. The second argument is an array with your mappings.

```ts
// ./src/core/mappings/index.ts
import AutoMapper from "ts-automapper";

AutoMapper.create<FromType, ToTYpe>("createPerson", [
  ["person.firstname", ({ person }) => person.firstname.trim()],
  ["person.lastname", ({ person }) => person.lastname.trim().toUpperCase()],
  ["person.email", ({ person }) => person.email.trim().toLowerCase()],
  // ...
  ["person.postalCode", ({ person }) => person.address03.split("_")[0]],
  ["person.city", ({ person }) => person.address03.split("_")[1]],
  // ...
]);
```

2. Import your schema(s)

You can import your schema(s) where you want. Just be sure it's imported **before** you want to use them.

```ts
// ./src/index.ts
import "@/core/mappings";
```

3. Use your created schema

Then, you only need one line to transform your object from `FromType` to `ToType`. From everywhere.

```ts
const person = AutoMapper.apply<FromType, ToType>("createPerson", raw);
```

## API

### create

```ts
AutoMapper.create<A, B>(key, mappings);
```

| Parameter  | Description                                                             |
| ---------- | ----------------------------------------------------------------------- |
| `A`        | Your raw object type you want to convert.                               |
| `B`        | Your target object type you want to convert to.                         |
| `key`      | A unique identifier for the mapping.                                    |
| `mappings` | An array of field mappings from source type (`A`) to target type (`B`). |

#### Example

```ts
type A = { first_name: string };
type B = { firstname: string };

AutoMapper.create<A, B>("UNIK_KEY", [
  ["firstname", (rawObject: A) => rawObject.first_name.trim()],
]);
```

> The `firstname` is not an hardcoded string. It's like a `enum-like string type`. It means that all keys are inferred from your `B` type.

From here, you're telling to `AutoMapper` that you want to convert `A` to `B` by:

- setting up an unique identifier `UNIK_KEY`
- taking the `first_name` property (from `A`) and injecting it to `firstname` property of `B`
- applying a `trim()` to it before the injection

Nothing more. You can add all needed property mappings you need. 🎯

### apply

```ts
AutoMapper.apply<A, B>(key, rawObject);
```

| Parameter   | Description                                                       |
| ----------- | ----------------------------------------------------------------- |
| `A`         | Your raw object type you want to convert.                         |
| `B`         | Your target object type you want to convert to.                   |
| `key`       | A unique identifier for the mapping you created with `.create()`. |
| `rawObject` | Your raw object of type `A`.                                      |

#### Example

```ts
// Import your schema(s) where you want, but before trying to apply it.
import "./schema.ts";

const output: B = AutoMapper.apply<A, B>("UNIK_KEY", {
  first_name: "Anthony   ",
}); // output is: { firstname: "Anthony" }
```

Output will be:

```json
{ "firstname": "Anthony" }
```

From here, you want to apply an **existing** schema and get a valid `B` type.

That's all 🤭
