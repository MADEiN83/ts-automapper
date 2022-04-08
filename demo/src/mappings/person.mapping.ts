import AutoMapper from "ts-automapper";
import { IPersonInput, IPerson } from "../interfaces";

AutoMapper.create<IPersonInput, IPerson>("personInput_person")
  .map(
    (input) => input.first_name,
    (output) => output.identity.firstName,
    {
      transform: (p) => p.first_name.trim(),
    }
  )
  .map(
    (input) => input.last_name,
    (output) => output.identity.lastName,
    {
      transform: (p) => p.last_name.trim(),
    }
  )
  .map(
    (input) => input.age,
    (output) => output.identity.age,
    {
      castTo: "number",
    }
  )
  .map(
    (input) => input.address,
    (output) => output.contact.address
  )
  .map(
    (input) => input.postal,
    (output) => output.contact.postalCode,
    {
      transform: (p) => p.postal.substr(0, 5),
    }
  )
  .map(
    (input) => input.town,
    (output) => output.contact.town
  )
  .map(
    (input) => input.countryName,
    (output) => output.contact.country.name
  )
  .map(
    (input) => input.phone,
    (output) => output.contact.phone,
    {
      transform: (p) => p.phone.substr(0, 10),
    }
  )
  .map(
    (input) => input.emailAddress,
    (output) => output.contact.email
  )
  .map(
    (input) => input.date,
    (output) => output.updatedAt,
    {
      castTo: "date",
    }
  );
