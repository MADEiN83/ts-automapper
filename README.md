# ts-automapper [![npm version](https://badge.fury.io/js/ts-automapper.svg)](https://www.npmjs.com/package/ts-automapper) [![Build Status](https://travis-ci.org/MADEiN83/ts-automapper.svg?branch=master)](https://travis-ci.org/MADEiN83/ts-automapper) ![npm](https://img.shields.io/npm/dm/ts-automapper) ![npm](https://img.shields.io/npm/dt/ts-automapper) ![npm bundle size](https://img.shields.io/bundlephobia/min/ts-automapper)

- [Installation](#installation)
- [Usage](#usage)
- [Create mapping definition](#create-mapping-definition)
  - [Params](#params)
  - [Example](#example)
- [Map](#map)
  - [Params](#params-1)
  - [Example](#example-1)

## Install

Install with [npm](https://www.npmjs.com/):

```bash
$ npm i -s ts-automapper
```

## why?

Before:

```ts
// person.service.ts

const createPerson = (personInput: PersonInput): Promise<Person> => {
  const person: Person = {
    fullName = `${personInput.firstname} ${personInput.lastname}`;
    firstname = personInput.firstname;
    lastname = personInput.lastname;
    email = personInput.email;
    tel = personInput.tel;
    address01 = personInput.address01;
    address02 = personInput.address02;
    postalCode = personInput.address03.split("_")[0];
    city = personInput.address03.split("_")[1] || "Cagnes-sur-Mer";
    [...]
    [...]
    [...]
  };

  return await this.repository.save(person);
}

const editPerson = (personInput: PersonInput): Promise<Person> => {
  const person: Person = await this.repository.find(personInput.id);

  person.fullName = `${personInput.firstname} ${personInput.lastname}`;
  person.firstname = personInput.firstname;
  person.lastname = personInput.lastname;
  person.email = personInput.email;
  person.tel = personInput.tel;
  person.address01 = personInput.address01;
  person.address02 = personInput.address02;
  person.postalCode = personInput.address03.split("_")[0];
  person.city = personInput.address03.split("_")[1] || "Cagnes-sur-Mer";
  [...]
  [...]
  [...]

  return await this.repository.save(person);
};
```

Now:

```ts
// index.ts
import AutoMapper from ".ts-automapper";

AutoMapper.createDefinition<Person, PersonInput>("editPerson")
  .map(src => src.firstname, dst => dst.firstname)
  .map(src => src.lastname, dst => dst.lastname)
  .map(src => src.email, dst => dst.email)
  .map(src => src.tel, dst => dst.tel)
  .map(src => src.address01, dst => dst.address01)
  .map(src => src.address02, dst => dst.address02)
  .map(src => src.address03, dst => dst.postalCode, {
    operation: p => p.split("_")[0]
  })
  .map(src => src.address03, dst => dst.city, {
    operation: p => p.split("_")[1]
  });
```

```ts
// person.service.ts
import AutoMapper from ".ts-automapper";

const createPerson = (personInput: PersonInput): Promise<Person> => {
  const person: Person = AutoMapper.exec(person, personInput, "createPerson");
  return await this.repository.save(person);
};

const editPerson = (personInput: PersonInput): Promise<Person> => {
  const person: Person = await this.repository.find(personInput.id);
  const toSave: Person = AutoMapper.assign(person, personInput, "editPerson");

  return await this.repository.save(toSave);
};
```

## Create mapping definition

To create a mapping between two objects, you must call the static method `createDefinition` of the `AutoMapper` class.

Method takes only one argument (an unique key) and two interfaces:

- first interface must be the source interface
- second interface must be the destination interface

So, if we have an object of type `ISource` and we want a object of type `IDestination`, we should create a new mapping like that:

```ts
AutoMapper.createDefinition<ISource, IDestination>(uniqueKey);
```

### Params

- `src` **{ISource}**: The source object.
- `dest` **{IDestination}**: The destination object.
- `uniqueKey` **{string}**: The unique key of the current mapping.

### Example

```ts
import AutoMapper from "ts-automapper";
import { ISource, IDestination } = "../path/of/your/interfaces.ts";

AutoMapper.createDefinition<ISource, IDestination>('userInput_entity');
```

## Map

After we create a mapping between interfaces, we can now create all mappings between all wanted properties of our objects (source & destination).

```ts
.map(sourceProperty, destinationProperty)
```

For example, if we want to map the property sourceObject.srcOther to destinationObjet.other, we can define rule like that:

```ts
AutoMapper.createDefinition<ISource, IDestination>("UNIQUE_KEY")
  .map(src => src.srcProperty, dest => dest.destProperty)
  .map(src => src.srcOther, dest => dest.other);
```

### Params

- `src` **{ISource}**: The source object.
- `dest` **{IDestination}**: The destination object.

> You can chain your rules!

## TODO

- Nested mapping (source side)
- Nested mapping (destination side)
- More operations
- Conditionnal mapping
- ...
