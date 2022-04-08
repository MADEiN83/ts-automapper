# cast

Sometimes, you want to map a field to a different type.

For instance, you want to map a `string` to a `number` because the **API**, the **form** or even the **database** return the wrong data type. Don't pretend I'm wrong.

## create the interfaces

Interface from:

```ts
interface Input {
  age: string;
}
```

Interface to:

```ts
interface Output {
  age: number;
}
```

## create the mapping

```ts
// person.mapping.ts
import AutoMapper from "ts-automapper";

AutoMapper.create<Input, Output>("UNIQUE_KEY").map(
  (input) => input.age,
  (output) => output.age,
  {
    castTo: "number",
  }
);
```

`castTo` property accepts one of:

- `string`
- `number`
- `date`
- `boolean`

## run the mapping

```ts
// index.ts
import AutoMapper from "ts-automapper";

// Simply import all wanted mappings once.
import "./person.mapping";

const rawData: Input = {
  age: "18",
};

const output: Output = AutoMapper.exec<Input, Output>("UNIQUE_KEY", rawData);

console.log(output);

// { age: 18 }
```
