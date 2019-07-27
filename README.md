# ts-automapper [![npm version](https://badge.fury.io/js/ts-automapper.svg)](https://www.npmjs.com/package/ts-automapper)

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
