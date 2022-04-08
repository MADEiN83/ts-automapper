import AutoMapper from "ts-automapper";

import { PersonInput, Person } from "./types";
import "./mappings";

const uglyData: PersonInput = {
  first_name: "     Anthony",
  last_name: "MADEiN83  ",
  age: "29",
  address: "Somewhere",
  postal: "068006793583750305839",
  town: "Cagnes-sur-Mer",
  countryName: "France",
  phone: "123456789012345678901234567890",
  emailAddress: "contact@me.io",
  date: "Sat Jul 24 2021 11:18:47 GMT+0200",
};

/**
 * Simply execute the mapping defined in `person.mapping.ts`.
 */
const awesomeData = AutoMapper.exec<PersonInput, Person>(
  "personInput_person",
  uglyData
);

console.log(awesomeData);
