export interface IData1 {
  column: string;
  nested?: { value?: string };
}

export interface IData2 {
  id: number;
  label: string;
  user: { firstname?: string; lastname?: string };
}
