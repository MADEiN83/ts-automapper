# ts-automapper [![npm version](https://badge.fury.io/js/ts-automapper.svg)](https://www.npmjs.com/package/ts-automapper) [![Build Status](https://travis-ci.org/MADEiN83/ts-automapper.svg?branch=master)](https://travis-ci.org/MADEiN83/ts-automapper) ![npm](https://img.shields.io/npm/dm/ts-automapper) ![npm](https://img.shields.io/npm/dt/ts-automapper) ![npm bundle size](https://img.shields.io/bundlephobia/min/ts-automapper)

## Install

Install with [npm](https://www.npmjs.com/):

```bash
$ npm i -s ts-automapper
```

You can read the full documentation [here](https://github.com/MADEiN83/ts-automapper/tree/master/docs).

## Why should I use this library?

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
import AutoMapper from "ts-automapper";

AutoMapper.create<Person, PersonInput>("editPerson")
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
    operation: p => p.split("_")[1],
    conditions: {
      // this field mapping will only work if the `age` property is `not empty`.
      notEmpty: [(src: Input) => src.age],
    }
  });
```

```ts
// person.service.ts
import AutoMapper from "ts-automapper";

const createPerson = (personInput: PersonInput): Promise<Person> => {
  const person: Person = AutoMapper.exec(person, personInput, "createPerson");
  return await this.repository.save(person);
};
```

## TODO

- [x] Create mapping definition
- [x] Execute a mapping TSource > TDestination
- [x] Nested mapping (source side)
- [x] Nested mapping (destination side)
- [x] Assign existing object
- [x] More operations
  - [x] Conditionnal mapping of property (eg.: exists, contains, equals, ...)
  - [ ] Condition based on other property
- Better unique key management (I want to remove `key` arg from methods)
- ...
