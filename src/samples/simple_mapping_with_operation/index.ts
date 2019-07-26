import AutoMapper from "../../core/AutoMapper";
import { IData1, IData2 } from "../samples.interfaces";

// Instantiate object of type IData1 with a default property value.
const data: IData1 = { column: "1_Un Label ici" };

// Creates a mapping named "data1_data2" for IData1 > IData2 interfaces.
AutoMapper.createDefinition<IData1, IData2>("data1_data2")
  // Map field source.column to be injected in destination.id with a simple transformation
  .map(p => p.column, p => p.id, {
    type: AutoMapper.TYPES.INTEGER,
    operation: (p: any) => p.split("_")[0]
  })
  // Map field source.column to be injected in destination.label with a simple transformation
  .map(p => p.column, p => p.label, {
    operation: (p: any) => p.split("_")[1]
  });

const result = AutoMapper.exec(data, "data1_data2");

console.log("source", data);
console.log("destination", result);
