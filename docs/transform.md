# transform

## create the interfaces

Interface from:

```ts
interface Input {
  full_name: string;
}
```

Interface to:

```ts
interface Output {
  person: { firstName: number; lastName: number };
}
```

## create the mapping

```ts
// person.mapping.ts
import AutoMapper from "ts-automapper";

AutoMapper.create<Input, Output>("UNIQUE_KEY")
  // Map the first name field.
  .map(
    (input) => input.full_name,
    (output) => output.person.firstName,
    {
      transform: (data: Input) => data.full_name.split(" ")[0],
    }
  )
  // Map the last name field.
  .map(
    (input) => input.full_name,
    (output) => output.person.lastName,
    {
      transform: (data: Input) => data.full_name.split(" ")[1],
    }
  );
```

## run the mapping

```ts
// index.ts
import AutoMapper from "ts-automapper";

// Simply import all wanted mappings once.
import "./person.mapping";

const rawData: Input = {
  full_name: "John Doe",
};

const output: Output = AutoMapper.exec<Input, Output>("UNIQUE_KEY", rawData);

console.log(output);

// { person: { firstName: "John", lastName: "Doe" } }
```
