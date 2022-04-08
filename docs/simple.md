# simple

## create the interfaces

Interface from:

```ts
interface Input {
  first_name: string;
  last_name: string;
}
```

Interface to:

```ts
interface Output {
  person: {
    firstName: string;
    lastName: string;
  };
}
```

## create the mapping

AutoMapper allows you to map fields from one interface to another. Even if the destination field is in an object.

```ts
// person.mapping.ts
import AutoMapper from "ts-automapper";

AutoMapper.create<Input, Output>("UNIQUE_KEY")
  // Map the first name field.
  .map(
    (input) => input.first_name,
    (output) => output.person.firstName
  )
  // Map the last name field.
  .map(
    (input) => input.first_name,
    (output) => output.person.firstName
  );
```

## run the mapping

```ts
// index.ts
import AutoMapper from "ts-automapper";

// Simply import all wanted mappings once.
import "./person.mapping";

const rawData: Input = {
  first_name: "John",
  last_name: "Doe",
};

const output: Output = AutoMapper.exec<Input, Output>("UNIQUE_KEY", rawData);

console.log(output);

// { person: { firstName: "John", lastName: "Doe" } }
```
