# transform & cast

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
    transform: (data: Input) => data.age.split(" ")[0],
    castTo: "number",
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
  age: "30 yo",
};

const output: Output = AutoMapper.exec<Input, Output>("UNIQUE_KEY", rawData);

console.log(output);

// { age: 30 }
```
