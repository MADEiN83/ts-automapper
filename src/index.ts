import AutoMapper from "./core/AutoMapper";
export { AutoMapper };

interface IData1 {
  column: string;
}

interface IData2 {
  id: number;
  label: string;
}
const data: IData1 = { column: "1_Un Label ici" };
const dataList: IData1[] = [
  { column: "1_Un Label ici" },
  { column: "2_Un Label ici" },
  { column: "3_Un Label ici" }
];

AutoMapper.createDefinition<IData1, IData2>("data1_data2")
  .map(p => p.column, p => p.id, {
    type: AutoMapper.TYPES.INTEGER,
    operation: (p: any) => p.split("_")[0]
  })
  .map(p => p.column, p => p.label, { operation: (p: any) => p.split("_")[1] });

const result = AutoMapper.exec(data, "data1_data2");
const resultAll = AutoMapper.execAll(dataList, "data1_data2");
console.log("result", result);
console.log("resultAll", resultAll);
